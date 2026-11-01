'use client';

import Image from 'next/image';

interface MuskoLogoProps {
  variant?: 'full' | 'standard' | 'mark-only' | 'image-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  lightBackground?: boolean;
}

export default function MuskoLogo({
  variant = 'standard',
  size = 'md',
  className = '',
  lightBackground = false
}: MuskoLogoProps) {
  const imgSizes = {
    sm: { width: 38, height: 38, textMain: 'text-lg', textSub: 'text-[8px]', tagText: 'text-[7px]' },
    md: { width: 48, height: 48, textMain: 'text-2xl', textSub: 'text-[9px]', tagText: 'text-[8px]' },
    lg: { width: 64, height: 64, textMain: 'text-3xl', textSub: 'text-[11px]', tagText: 'text-[9px]' },
    xl: { width: 84, height: 84, textMain: 'text-4xl', textSub: 'text-xs', tagText: 'text-[10px]' }
  };

  const current = imgSizes[size];

  if (variant === 'image-only') {
    return (
      <div
        className={`relative overflow-hidden rounded-xl bg-white p-1 border-2 border-[#E5A823]/40 shadow-md ${className}`}
        style={{ width: current.width, height: current.height }}
      >
        <Image
          src="/musko-logo.jpg"
          alt="Musko Properties and Real Estate"
          fill
          className="object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 group ${className}`}>
      {/* Official Logo Badge */}
      <div
        className="relative overflow-hidden rounded-xl bg-white p-1 border-2 border-[#E5A823]/40 shadow-lg shadow-[#07111F]/50 flex-shrink-0 transition-transform group-hover:scale-105"
        style={{ width: current.width, height: current.height }}
      >
        <Image
          src="/musko-logo.jpg"
          alt="Musko Properties and Real Estate Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {variant !== 'mark-only' && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-serif font-black tracking-tight leading-none transition-colors ${
                current.textMain
              } ${
                lightBackground
                  ? 'text-[#0A1C38] group-hover:text-[#E5A823]'
                  : 'text-white group-hover:text-[#F5BE42]'
              }`}
            >
              MUSKO
            </span>
          </div>

          <span
            className={`font-mono uppercase font-bold tracking-[0.22em] mt-1 transition-colors ${
              current.textSub
            } ${
              lightBackground
                ? 'text-[#0A1C38]/85'
                : 'text-[#8FA2BF] group-hover:text-white'
            }`}
          >
            PROPERTIES AND REAL ESTATE
          </span>

          {variant === 'full' && (
            <div className="flex items-center gap-1.5 mt-1 pt-1 border-t border-[#E5A823]/30">
              <span className={`font-mono uppercase tracking-[0.16em] text-[#E5A823] font-semibold ${current.tagText}`}>
                LAND &bull; INVEST &bull; DEVELOP &bull; BUILD &bull; GROW
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
