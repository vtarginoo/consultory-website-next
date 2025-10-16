"use client";

import Image from 'next/image'
import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import MoreButton from './MoreButton';

// Definição da interface (mantida para contexto)
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
  solutions: Solution[];
  className?: string;
}



export const SolutionsMenu: React.FC<SolutionsMenuProps> = ({
  title = 'CONTRATE NOSSAS',
  subtitle = 'SOLUÇÕES',
  solutions,
  className = ''
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleSolution = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // 2. Definir a URL da imagem dinamicamente
  const currentSolution = openIndex >= 0 && openIndex < solutions.length ? solutions[openIndex] : null;
  const currentImageUrl = currentSolution ? `/solutions/solution${currentSolution.imageNumber}.avif` : null;
  const currentImageAlt = currentSolution ? currentSolution.title : 'Imagem da Solução';

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Título (Sem alterações) */}
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
            DO DIAGNÓSTICO A <strong style={{ fontWeight: 800 }}>CAPTURA DE VALOR</strong>
          </p>

          {/* Divisor (Sem alterações) */}
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
          {/* Lista de Soluções (Sem alterações no loop) */}
          <div className="lg:w-1/2 space-y-4">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* Header do Card (Sem alterações) */}
                <button
                  onClick={() => toggleSolution(index)}
                  className="w-full p-6 flex items-start justify-between text-left"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Número (Sem alterações) */}
                    <span
                      style={{
                        fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                        fontSize: '24px',
                        fontWeight: 500,
                        color: 'rgba(36, 36, 36, 0.5)',
                      }}
                    >
                      {String(solution.id).padStart(2, '0')}.
                    </span>

                    {/* Título (Sem alterações) */}
                    <div className="flex-1">
                      <h5
                        style={{
                          fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                          fontSize: 'clamp(18px, 3vw, 24px)',
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
                  </div>

                  {/* Ícone (Sem alterações) */}
                  <div
                    className="ml-4 flex items-center justify-center transition-transform duration-300"
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid rgba(0, 0, 0, 0.8)',
                      borderRadius: '20px',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={20} color="rgba(0, 0, 0, 0.8)" />
                  </div>
                </button>

                {/* Conteúdo Expansível (Sem alterações) */}
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2">
                    <div className="pl-12">
                      <p
                        className="mb-6"
                        style={{
                          fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                          fontSize: '14px',
                          lineHeight: '1.3em',
                          color: 'rgb(27, 57, 66)',
                        }}
                      >
                        {solution.description}
                      </p>

                      {/* Botão Ver Mais */}
                      <MoreButton text={'VEJA MAIS'} link={solution.link || '#'}/> 
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* IMAGEM LATERAL - Refatorada para <Image /> */}
          <div className="lg:w-1/2">
            <div 
              // Adicionamos 'relative' para o Image funcionar com 'fill'
              className="relative rounded-3xl overflow-hidden"
              style={{ 
                height: '600px',
                backgroundColor: '#f0f0f0',
              }}
            >
              {currentSolution && currentImageUrl && (
                <>
                  <Image
                    src={currentImageUrl}
                    alt={currentImageAlt}
                    // OBRIGATÓRIO: Faz a imagem preencher 100% do div pai
                    layout="fill"
                    // Aplica o corte da imagem
                    objectFit="cover"
                    // Otimiza a transição de opacidade quando a imagem muda
                    className="transition-opacity duration-500" 
                    // priority é crucial para carregar a primeira imagem principal
                    priority={openIndex === 0} 
                  />
                  
                  {/* Badge com número (Sem alterações) */}
                  <div
                    className="absolute top-6 left-6 px-6 py-3 rounded-xl"
                    style={{
                      backgroundColor: 'rgb(0, 0, 0)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                        fontSize: '40px',
                        fontWeight: 500,
                        color: 'rgb(255, 255, 255)',
                      }}
                    >
                      {String(currentSolution.id).padStart(2, '0')}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};