import React from 'react';
import Link from 'next/link';
import MoreButton from './MoreButton';

interface ClientsCTASectionProps {
  title: string; 
  description: string;
  className?: string;
}

export const ClientsCTASection: React.FC<ClientsCTASectionProps> = ({
  title,
  description,
  className = ''
}) => {
  // Função para processar texto com bold (**texto**)
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto text-center">
          {/* Título */}
          <h4
            className="uppercase"
            style={{
              fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
              fontSize: '38px',
              fontWeight: 400,
              lineHeight: '1.2em',
              letterSpacing: '0em',
              color: '#222222',
            }}
          >
            {renderText(title)}
          </h4>

          {/* Descrição */}
          <p
            style={{
              fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.6em',
              color: '#222222',
            }}
          >
            {description}
          </p>

          {/* Linha decorativa (SVG do Framer) */}
          <div className="w-full max-w-md -mb-4">
            <svg 
            className="block mx-auto"
              width="20%" 
              height="3" 
              viewBox="0 0 400 2" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <line 
                x1="0" 
                y1="1" 
                x2="400" 
                y2="1" 
                stroke="#ce9c5d" 
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Botão CTA */}
          <MoreButton text={'Entrar em Contato'} link={'/contato'}></MoreButton>


        </div>
      </div>
    </section>
  );
};