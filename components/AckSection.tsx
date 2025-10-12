import React from 'react';
import Image from 'next/image';


interface AckSectionProps {
  title: string; // Pode incluir **texto** para bold e \n para quebra
  description: string; // Pode incluir **texto** para bold
  images?: string[]; // Array de caminhos das imagens
  className?: string;
}

export const AckSection: React.FC<AckSectionProps> = ({
  title,
  description,
  images = [
    '/acknowledgment/ack1.avif',
    '/acknowledgment/ack2.avif',
    '/acknowledgment/ack3.avif',
    '/acknowledgment/ack4.avif'
  ],
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

  // Processa quebras de linha no título
  const renderTitle = () => {
    const lines = title.split('\\n');
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {renderText(line)}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className={`py-12 md:py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Título e Descrição em cima */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Título */}
            <h4
              className="uppercase"
              style={{
                fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                fontSize: '36px',
                fontWeight: 400,
                lineHeight: '1.2em',
                letterSpacing: '0em',
                color: '#222222',
              }}
            >
              {renderTitle()}
            </h4>
            
            {/* Linha divisória */}
            <div className="hidden md:block min-w-[3px] h-20 bg-[#ce9c5d]"></div>

            {/* Descrição */}
            <p
              className="max-w-md text-center md:text-left"
              style={{
                fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.6em',
                color: '#222222',
              }}
            >
              {renderText(description)}
            </p>
          </div>

          {/* Grid de Imagens embaixo */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((imageSrc, index) => (
              <div 
                key={index}
                className="relative aspect-[232/298] w-full rounded-2xl border border-[#ce9c5d] overflow-hidden bg-white p-4"
              >
                <Image
                  src={imageSrc}
                  alt={`Reconhecimento ${index + 1}`}
                  fill
                  className="object-contain p-2"
                  style={{
                    objectPosition: 'center center'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};