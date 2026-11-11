import React from 'react';
import brialLogoSrc from '../assets/BRIAL LOGO.jpg';

interface BrialLogoProps {
  variant?: 'full' | 'compact' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const BrialLogo: React.FC<BrialLogoProps> = ({
  variant = 'compact',
  size = 'md',
  className = '',
  showText = true
}) => {
  const sizeMap = {
    sm: { img: 'h-9 w-9', text: 'text-sm' },
    md: { img: 'h-11 w-11', text: 'text-base' },
    lg: { img: 'h-24 w-24', text: 'text-xl' },
    xl: { img: 'h-32 w-32', text: 'text-2xl' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  if (variant === 'full') {
    return (
      <div className={`inline-flex flex-col items-center justify-center ${className}`}>
        <div className="p-3 bg-white rounded-2xl shadow-xs border border-black/[0.04] flex items-center justify-center">
          <img
            src={brialLogoSrc}
            alt="Brial Medical SRL Logo"
            className={`${currentSize.img} object-contain rounded-xl`}
            loading="eager"
          />
        </div>
        {showText && (
          <div className="text-center mt-3">
            <span className="block font-bold tracking-[0.2em] text-[#072042] text-sm uppercase">
              BRIAL
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase text-[#0080D7] mt-0.5">
              MEDICAL SRL
            </span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={brialLogoSrc}
          alt="Brial Medical SRL Logo"
          className={`${currentSize.img} object-contain rounded-lg`}
          loading="eager"
        />
      </div>
    );
  }

  // Compact variant: Image + Crisp text lockup
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="p-1 bg-white rounded-xl border border-black/[0.04] shadow-2xs shrink-0 flex items-center justify-center">
        <img
          src={brialLogoSrc}
          alt="Brial Medical SRL Logo"
          className={`${currentSize.img} object-contain rounded-lg`}
          loading="eager"
        />
      </div>
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-bold text-base sm:text-lg tracking-[0.14em] uppercase text-[#072042]">
            BRIAL
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase mt-0.5 text-[#0080D7]">
            MEDICAL SRL
          </span>
        </div>
      )}
    </div>
  );
};
