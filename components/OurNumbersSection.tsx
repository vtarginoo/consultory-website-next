

import React from 'react';
import MoreButton from './MoreButton';

interface StatItem {
  number: string;
  description: string;
}

interface OurNumbersSectionProps {
  title?: { first: string; second: string };
  description?: string;
  subtitle?: string;
  stats: StatItem[];
  imageUrl: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export const OurNumbersSection: React.FC<OurNumbersSectionProps> = ({
  title = { first: 'NOSSOS', second: 'NÚMEROS' },
  description = 'A Arco Consulting Partners é uma consultoria em gestão que atua lado a lado com empresas para superar desafios estratégicos, financeiros e operacionais.',
  subtitle = 'Experiência e resultados em diversos segmentos:',
  stats,
  imageUrl,
  imageAlt = 'Team working',
  buttonText = 'VEJA MAIS',
  buttonLink,
  className = ''
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Imagem */}
          <div className="lg:w-1/2">
            <img 
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto rounded-lg object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>

          {/* Conteúdo */}
          <div className="lg:w-1/2">
            {/* Título */}
            <h2 className="text-gray-900 uppercase mb-4">
              <span
                style={{
                  fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                  fontSize: '36px',
                  fontWeight: 500,
                  letterSpacing: '0em',
                }}
              >
                {title.first}{' '}
              </span>
              <span
                style={{
                  fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                  fontSize: '36px',
                  fontWeight: 800,
                  letterSpacing: '0em',
                }}
              >
                {title.second}
              </span>
            </h2>

            {/* Linha decorativa */}
            <div className="w-64 h-1 bg-[#ce9c5d] mb-6"></div>

            {/* Descrição */}
            <p 
              className="text-gray-700 mb-4"
              style={{
                fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
                fontSize: '16px',
                lineHeight: '1.6',
                maxWidth: 'clamp(300px, 90vw, 600px)',
              }}
            >
              {description}
            </p>

            <p 
              className="text-gray-700 mb-8"
              style={{
                fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              {subtitle}
            </p>

            {/* Grid de Estatísticas */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`relative pb-6 border-b border-gray-200 sm:pb-0 sm:border-b-0 last:border-b-0 ${
                    index % 2 === 0 ? 'sm:border-r sm:pr-8' : ''
                  }`}
                >
                  <div 
                    className="text-gray-900 mb-2"
                    style={{
                      fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                      fontSize: 'clamp(40px, 8vw, 64px)',
                      fontWeight: 700,
                      lineHeight: '1',
                    }}
                  >
                    {stat.number}
                  </div>
                  <p 
                    className="text-gray-600"
                    style={{
                      fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
                      fontSize: 'clamp(14px, 2.5vw, 18px)',
                      lineHeight: '1.4',
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
           <MoreButton text={buttonText} link={buttonLink}/>
          </div>
        </div>
      </div>
    </section>
  );
};