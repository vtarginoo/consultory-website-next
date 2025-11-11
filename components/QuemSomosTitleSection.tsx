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
  description = `"A Arco Consulting Partners é uma consultoria em gestão que atua lado a lado com empresas para superar desafios estratégicos, financeiros e operacionais.\n\nFazemos parte do **Grupo Effectus**, ampliando nossa capacidade de entregar soluções completas que unem performance, inovação e sustentabilidade."`,
  className = "",
}) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start justify-center">

          {/* Imagem sem moldura - MAIOR */}
          <div className="lg:w-1/3 w-full flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-square overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center m-0 p-0"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Texto mais estreito */}
          <div className="lg:w-auto max-w-[520px] space-y-5 text-center lg:text-left">
            <div>
              <h3
                className="uppercase tracking-wide"
                style={{
                  fontFamily: '"Instrument Sans", sans-serif',
                  fontSize: "clamp(20px, 4vw, 28px)",
                  fontWeight: 500,
                  color: "rgb(36, 36, 36)",
                }}
              >
                {formatText(title)}
              </h3>

              {/* divisor laranja */}
              <div className="mt-2 h-[2px] bg-[#ce9c5d] w-[160px] lg:w-[220px]" />
            </div>

            <p
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "16px",
                lineHeight: "1.7em",
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