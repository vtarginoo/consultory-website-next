"use client"

import React, { useState } from 'react';
import { formatText } from './lib/textFormatting';


interface QuemSomosVideoSectionProps {
  videoId: string;
  title?: string;
  description?: string;
  className?: string;
}

export const QuemSomosVideoSection: React.FC<QuemSomosVideoSectionProps> = ({
  videoId,
  title = "QUEM **SOMOS**",
  description = '"A Arco Consulting Partners é uma consultoria em gestão que atua lado a lado com empresas para superar desafios estratégicos, financeiros e operacionais.\\n\\nFazemos parte do **Grupo Effectus**, ampliando nossa capacidade de entregar soluções completas que unem performance, inovação e sustentabilidade."',
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Video Player */}
          <div className="lg:w-1/2">
            <article
              role="presentation"
              className="relative w-full rounded-lg overflow-hidden cursor-pointer"
              style={{ aspectRatio: '16/9' }}
              onClick={handlePlay}
            >
              {!isPlaying ? (
                <>
                  {/* Thumbnail */}
                  <img
                    decoding="async"
                    src={`https://i.ytimg.com/vi_webp/${videoId}/sddefault.webp`}
                    alt="Video thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  
                  {/* Play Button */}
                  <button
                    aria-label="Play"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[68px] h-[48px] p-0 border-none bg-transparent cursor-pointer transition-transform hover:scale-110"
                  >
                    <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                      <path
                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                        fill="#212121"
                        fillOpacity="0.8"
                        className="transition-all duration-100"
                      />
                      <path d="M 45,24 27,14 27,34" fill="#fff" />
                    </svg>
                  </button>
                </>
              ) : (
                <iframe
                  loading="lazy"
                  title="Youtube Video"
                  allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  src={`https://www.youtube.com/embed/${videoId}?v=${videoId}&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1`}
                  frameBorder="0"
                  className="absolute top-0 left-0 w-full h-full"
                />
              )}
            </article>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            {/* Title */}
            <h3
              className="uppercase"
              style={{
                fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                fontSize: 'clamp(28px, 5vw, 36px)',
                fontWeight: 500,
                letterSpacing: '0em',
                color: 'rgb(36, 36, 36)',
              }}
            >
              {formatText(title)}
            </h3>

            {/* Divider (hidden on mobile) */}
            <div className="hidden lg:block w-full h-[2px] bg-[#ce9c5d]" />

            {/* Description */}
            <p
              style={{
                fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                fontSize: '16px',
                lineHeight: '1.6em',
                color: 'rgba(27, 29, 31, 0.8)',
              }}
            >
              {formatText(description)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosVideoSection;