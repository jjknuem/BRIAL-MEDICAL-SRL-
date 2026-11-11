import React from 'react';

export const MedicalEquipmentBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none" 
      aria-hidden="true"
    >
      {/* High-Resolution Medical Equipment Background with Cinematic Blur */}
      <img
        src="/src/assets/images/medical_equipment_blurred_bg_1794358143227.jpg"
        alt=""
        className="w-full h-full object-cover object-center scale-110 filter blur-[20px] md:blur-[30px] opacity-25 sm:opacity-30 transform-gpu will-change-transform"
      />

      {/* Atmospheric Clinical Gradient Overlays to keep text contrast crisp and readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7]/80 via-[#f5f5f7]/60 to-[#f5f5f7]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(245,245,247,0.7)_80%)]" />

      {/* Subtle Biomedical Bokeh Highlights & Ambient Tech Light Pulses */}
      <div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#0080D7]/12 filter blur-[100px] pointer-events-none animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-[#072042]/10 filter blur-[120px] pointer-events-none" 
      />
      <div 
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00A86B]/8 filter blur-[100px] pointer-events-none" 
      />

      {/* Subtle Medical Instrument Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#072042 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};
