"use client";


interface DNASectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export const DNASection: React.FC<DNASectionProps> = ({ 
  title, 
  subtitle,
  children, 
  align = 'left',
  className = '' 
}) => {
  // Função para processar o texto em parágrafos
  const renderContent = () => {
    if (typeof children === 'string') {
      // Divide o texto em parágrafos (por linhas vazias)
      const paragraphs = children
        .trim()
        .split('\n\n')
        .filter(p => p.trim());
      
      return paragraphs.map((paragraph, index) => {
        // Procura por texto em bold (entre ** ou dentro de tags)
        const parts = paragraph.split(/(\*\*.*?\*\*|<strong>.*?<\/strong>)/g);
        
        return (
          <p key={index} className="leading-relaxed"
          style={{
          color: '#1B1D1f',
          fontWeight: 400,
          fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
          fontSize: '16px',
          }}>
            {parts.map((part, i) => {
              // Remove ** ou tags strong e aplica bold
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
              }
              if (part.startsWith('<strong>')) {
                const text = part.replace(/<\/?strong>/g, '');
                return <strong key={i}>{text}</strong>;
              }
              return part;
            })}
          </p>
        );
      });
    }
    
    return children;
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row gap-6 items-start justify-center ${
          align === 'right' ? 'md:flex-row-reverse' : ''
        }`}>
          {/* Título */}
          <div className="md:w-auto flex-shrink-0">
            <h2 
              className="text-gray-800 uppercase"
              style={{
                fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                fontSize: '36px',
                fontWeight: 500,
                lineHeight: '1.2em',
                letterSpacing: '0em',
              }}
            >
              {title}
            </h2>
            {subtitle && (
              <h3 
                className="mt-1 pl-8 md:pl-12 lg:pl-16"
                style={{
                  fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                  fontSize: '36px',
                  fontWeight: 700,
                  lineHeight: '1.2em',
                  letterSpacing: '0em',
                  WebkitTextStroke: '1px currentColor',
                }}
              >
                {subtitle}
              </h3>
            )}
          </div>

          {/* Divisor vertical */}
          <div className="min-w-[3px] bg-[#ce9c5d] hidden md:block self-stretch"></div>

          {/* Conteúdo */}
          <div className="flex-1 space-y-4 max-w-3xl">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};
