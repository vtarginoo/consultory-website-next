"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { formatText } from './lib/textFormatting';


interface QuemSomosTitleSectionProps {
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  className?: string;
}

export const QuemSomosTitleSection: React.FC<QuemSomosTitleSectionProps> = ({
  imageSrc,
  imageAlt = "Quem Somos",
  title = "QUEM **SOMOS**",
  description = '"A Arco Consulting Partners é uma consultoria em gestão que atua lado a lado com empresas para superar desafios estratégicos, financeiros e operacionais.\\n\\nFazemos parte do **Grupo Effectus**, ampliando nossa capacidade de entregar soluções completas que unem performance, inovação e sustentabilidade."',
  className = ''
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full bg-[#35507f] rounded-2xl" style={{ aspectRatio: '4/3' }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain rounded-2xl p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
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

export default QuemSomosTitleSection;