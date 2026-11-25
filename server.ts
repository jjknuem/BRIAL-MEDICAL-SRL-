import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ALLOWED_URGENCIES = new Set([
  'Normal (48h)',
  'Prioritaria (12h)',
  'Crítica - UCI / Quirófano (<2h)',
]);

const EMAIL_REGEX = /^[^\s@<>()[\]\\,;:\s@"]+@[^\s@<>()[\]\\,;:\s@"]+\.[^\s@<>()[\]\\,;:\s@"]{2,}$/;

function sanitizeSingleLine(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, maxLen);
}

function sanitizeMultiline(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n/g, '\n').trim().slice(0, maxLen);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '100kb' }));

  app.post('/api/service-request', async (req: Request, res: Response) => {
    const body = req.body && typeof req.body === 'object' ? req.body : {};

    const hospitalName = sanitizeSingleLine(body.hospitalName, 200);
    const equipmentType = sanitizeSingleLine(body.equipmentType, 200);
    const serialNumber = sanitizeSingleLine(body.serialNumber, 120);
    const issueDescription = sanitizeMultiline(body.issueDescription, 3000);
    const urgencyRaw = sanitizeSingleLine(body.urgency, 80);
    const urgency = ALLOWED_URGENCIES.has(urgencyRaw) ? urgencyRaw : 'Prioritaria (12h)';
    const contactPerson = sanitizeSingleLine(body.contactPerson, 150);
    const contactEmail = sanitizeSingleLine(body.contactEmail, 150);
    const contactPhone = sanitizeSingleLine(body.contactPhone, 40);

    if (
      !hospitalName ||
      !equipmentType ||
      !issueDescription ||
      !contactPerson ||
      !contactPhone ||
      !contactEmail
    ) {
      return res.status(400).json({
        ok: false,
        error: 'Todos los campos obligatorios, incluido el correo de contacto, son requeridos.',
      });
    }

    if (!EMAIL_REGEX.test(contactEmail)) {
      return res.status(400).json({
        ok: false,
        error: 'El correo electrónico proporcionado no tiene un formato válido.',
      });
    }

    const randomId = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `BM-${randomId}`;
    const createdAt = new Date().toLocaleTimeString('es-DO', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const recipientEmail =
      process.env.SERVICE_RECIPIENT_EMAIL?.trim() || 'info@brialmedical.com';

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const smtpFrom = process.env.SMTP_FROM?.trim();

    const baseTicket = {
      ticketId,
      createdAt,
      hospitalName,
      equipmentType,
      urgency,
      estimatedArrival: 'Atención oportuna Brial Medical',
      assignedEngineer: 'Equipo Técnico Brial Medical SRL',
      fromEmail: contactEmail,
      toEmail: recipientEmail,
    };

    if (!smtpHost || !smtpUser || !smtpPass) {
      return res.status(200).json({
        ok: true,
        sentViaServer: false,
        reason: 'SMTP_NOT_CONFIGURED',
        ticket: {
          ...baseTicket,
          status: 'Pendiente de Envío por Cliente',
          sentViaServer: false,
        },
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const plainText = [
        `SOLICITUD DE INTERVENCIÓN TÉCNICA - ${ticketId}`,
        `--------------------------------------------------`,
        `Correo del Solicitante: ${contactEmail}`,
        `Responsable de Contacto: ${contactPerson}`,
        `Teléfono Directo / Móvil: ${contactPhone}`,
        `Hospital / Institución Médica: ${hospitalName}`,
        `Equipo o Dispositivo: ${equipmentType}`,
        `Número de Serie / Modelo: ${serialNumber || 'No especificado'}`,
        `Nivel de Urgencia Operativa: ${urgency}`,
        ``,
        `Descripción Técnica de la Falla o Solicitud:`,
        issueDescription,
        ``,
        `Enviado a través del formulario de Mesa de Control Biomédico — Brial Medical SRL`,
      ].join('\n');

      const htmlBody = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1d1d1f; max-width: 640px; margin: 0 auto; border: 1px solid #e5e5ea; border-radius: 16px; overflow: hidden;">
          <div style="background: #072042; color: #ffffff; padding: 24px 28px;">
            <p style="margin: 0 0 6px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #7cc4fa;">Brial Medical SRL · Mesa de Control Biomédico</p>
            <h1 style="margin: 0; font-size: 20px;">Solicitud de Intervención Técnica (${escapeHtml(ticketId)})</h1>
          </div>
          <div style="padding: 24px 28px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #6e6e73; width: 42%;">Correo Remitente:</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(contactEmail)}</td></tr>
              <tr><td style="padding: 8px 0; color: #6e6e73;">Responsable:</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(contactPerson)}</td></tr>
              <tr><td style="padding: 8px 0; color: #6e6e73;">Teléfono:</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(contactPhone)}</td></tr>
              <tr><td style="padding: 8px 0; color: #6e6e73;">Institución Médica:</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(hospitalName)}</td></tr>
              <tr><td style="padding: 8px 0; color: #6e6e73;">Equipo / Dispositivo:</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(equipmentType)}</td></tr>
              <tr><td style="padding: 8px 0; color: #6e6e73;">Serie / Modelo:</td><td style="padding: 8px 0;">${escapeHtml(serialNumber || 'No especificado')}</td></tr>
              <tr><td style="padding: 8px 0; color: #6e6e73;">Urgencia Operativa:</td><td style="padding: 8px 0; font-weight: 600; color: #0071e3;">${escapeHtml(urgency)}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #f5f5f7; border-radius: 12px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; color: #6e6e73; text-transform: uppercase;">Descripción Técnica</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(issueDescription)}</p>
            </div>
          </div>
        </div>
      `;

      const safeDisplayName = contactPerson.replace(/["<>]/g, '');

      await transporter.sendMail({
        from: smtpFrom || `"${safeDisplayName} (${contactEmail})" <${smtpUser}>`,
        sender: smtpUser,
        replyTo: `"${safeDisplayName}" <${contactEmail}>`,
        to: recipientEmail,
        subject: `[${ticketId}] Solicitud Técnica: ${equipmentType} — ${hospitalName}`,
        text: plainText,
        html: htmlBody,
      });

      return res.status(200).json({
        ok: true,
        sentViaServer: true,
        ticket: {
          ...baseTicket,
          status: 'Enviado por Correo',
          sentViaServer: true,
        },
      });
    } catch (err) {
      console.error('Error sending service request email via SMTP:', err);
      return res.status(200).json({
        ok: true,
        sentViaServer: false,
        reason: 'SMTP_SEND_ERROR',
        ticket: {
          ...baseTicket,
          status: 'Pendiente de Envío por Cliente',
          sentViaServer: false,
        },
      });
    }
  });

  if (process.env.NODE_ENV === 'production') {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

startServer();
