"use client";

import Image from 'next/image'
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { solutionsData } from '@/data/solutionsData';
import { formatText } from './lib/textFormatting';

interface Solution {
  id: number;
  title: string;
  description: string;
  link?: string;
  imageNumber: number;
}

interface SolutionsMenuProps {
  title?: string;
  subtitle?: string;
  solutions?: Solution[];
  className?: string;
}

export const SolutionsMenu: React.FC<SolutionsMenuProps> = ({
  title = 'CONTRATE NOSSAS',
  subtitle = 'SOLUÇÕES',
  solutions = solutionsData,
  className = ''
}) => {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleSolution = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const displaySolution = openIndex >= 0 ? solutions[openIndex] : null;
  const currentImageUrl = displaySolution ? `/solutions/solutions${displaySolution.imageNumber}.png` : null;
  const currentImageAlt = displaySolution ? displaySolution.title : 'Imagem da Solução';

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 
            className="uppercase mb-1"
            style={{
              fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
              fontSize: 'clamp(28px, 5vw, 36px)',
              fontWeight: 500,
              letterSpacing: '0em',
              color: 'rgb(36, 36, 36)',
              WebkitTextStrokeWidth: '1 px',
              WebkitTextStrokeColor: 'rgba(36, 36, 36, 0.1)'
            }}
          >
            {title} <strong style={{ fontWeight: 800 }}>{subtitle}</strong>
          </h2>
          <p 
            className="mb-2"
            style={{
              fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 600,
              color: 'rgb(36, 36, 36)',
              WebkitTextStrokeWidth: '1 px',
              WebkitTextStrokeColor: 'rgba(36, 36, 36, 0.1)'
            }}
          >
            DO DIAGNÓSTICO À <strong style={{ fontWeight: 800 }}>CAPTURA DE VALOR</strong>
          </p>

          {/* Divisor */}
          <div className="flex justify-center">
            <div 
              style={{
                backgroundColor: '#ce9c5d',
                width: '40%',
                height: '3px',
                position: 'relative',
              }}
            />
          </div>
        </div>

        {/* Grid com Cards e Imagem */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Lista de Soluções - Mais estreita */}
          <div className="lg:w-1/3 space-y-4">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: openIndex === index ? 'rgba(206, 156, 93, 0.15)' : 'rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* Header do Card */}
                <button
                  onClick={() => toggleSolution(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  {/* Título */}
                  <div className="flex-1 pr-4">
                    <h5
                      style={{
                        fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        fontWeight: 500,
                        color: 'rgb(36, 36, 36)',
                        lineHeight: '1.3',
                        WebkitTextStrokeWidth: '1 px',
                        WebkitTextStrokeColor: 'rgba(36, 36, 36, 0.1)'
                      }}
                    >
                      {solution.title}
                    </h5>
                  </div>

                  {/* Ícone de Seta - Repouso para baixo, clicada para direita */}
                  <div
                    className="ml-4 flex items-center justify-center transition-all duration-300"
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid rgba(0, 0, 0, 0.8)',
                      borderRadius: '20px',
                      backgroundColor: hoveredIndex === index ? 'rgba(206, 156, 93, 0.2)' : 'transparent',
                      transform: `${hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'} ${openIndex === index ? 'rotate(0deg)' : 'rotate(90deg)'}`,
                    }}
                  >
                    <ArrowRight size={20} color="rgba(0, 0, 0, 0.8)" />
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Área de Descrição e Imagem - Mais larga */}
          <div className="lg:w-2/3 space-y-6">
            {/* Descrição acima da imagem */}
            {openIndex >= 0 && displaySolution && (
              <div 
                className="rounded-2xl p-6 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                }}
              >
                <p
                  style={{
                    fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    lineHeight: '1.6em',
                    color: 'rgb(27, 57, 66)',
                  }}
                >
                  {formatText(displaySolution.description)}
                </p>
              </div>
            )}

            {/* Imagem ou Estado Vazio */}
            <div 
              className="relative rounded-3xl overflow-hidden flex items-center justify-center"
              style={{ 
                height: openIndex >= 0 ? '450px' : '600px',
                backgroundColor: '#f0f0f0',
                transition: 'height 0.3s ease',
              }}
            >
              {displaySolution && currentImageUrl ? (
                <Image
                  src={currentImageUrl}
                  alt={currentImageAlt}
                  layout="fill"
                  objectFit="contain"
                  className="transition-opacity duration-500" 
                  priority
                />
              ) : (
                <div className="text-center px-8">
                  <p
                    style={{
                      fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                      fontSize: 'clamp(18px, 3vw, 24px)',
                      fontWeight: 500,
                      color: 'rgba(36, 36, 36, 0.4)',
                      lineHeight: '1.5',
                    }}
                  >
                    Clique em uma solução ao lado para conhecer os detalhes
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}