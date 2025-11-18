"use client"

import React from 'react';
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
  description = `"A Arco Consulting Partners é uma consultoria em gestão que atua lado a lado com empresas para superar desafios estratégicos, financeiros e operacionais.\n\nFazemos parte do **Grupo Effectus**, ampliando nossa capacidade de entregar soluções completas que unem performance, inovação e sustentabilidade."`,
  className = "",
}) => {
  return (
    <section className={` ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">

          {/* Imagem - MAIOR */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative w-full max-w-[380px] lg:max-w-[420px]" style={{ aspectRatio: '1/1' }}>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Texto centralizado verticalmente */}
          <div className="lg:w-auto max-w-[580px] space-y-6 text-left flex flex-col justify-center">
            <div>
              <h3
                className="uppercase tracking-wide"
                style={{
                  fontFamily: '"Instrument Sans", sans-serif',
                  fontSize: "clamp(22px, 4vw, 32px)",
                  fontWeight: 500,
                  color: "rgb(36, 36, 36)",
                }}
              >
                {formatText(title)}
              </h3>

              {/* divisor laranja */}
              <div className="mt-3 h-[2px] bg-[#ce9c5d] w-[200px]" />
            </div>

            <p
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "16px",
                lineHeight: "1.75em",
                color: "rgba(27, 29, 31, 0.8)",
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