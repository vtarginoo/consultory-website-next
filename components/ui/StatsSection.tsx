import React from 'react';

interface Stat {
  value: string;
  description: string;
}

interface StatsSectionProps {
  title?: string | React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  stats: Stat[];
  accentColor?: string;
  textColor?: string;
}

export default function StatsSection({
  title = "Entregamos resultados reais, implementados junto com sua equipe para gerar impacto duradouro.",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "INSIGHTS" }
  ],
  stats = [
    { value: "+50", description: "projetos entregues" },
    { value: "+2,5 BI", description: "em redução de custos" },
    { value: "+1 BI", description: "em geração de caixa no curto prazo" },
    { value: "+20 BI", description: "em gastos negociados" }
  ],
  accentColor = "rgb(206, 156, 93)",
  textColor = "rgba(27, 29, 31, 0.8)"
}: StatsSectionProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-0">
      <div className="mb-16 max-w-3xl">
       
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight"
        style={{
          color: "rgb(1B1D1f)",
        fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '42px',
        lineHeight: '1.1em',
        letterSpacing: '0em',
        WebkitTextStroke: '0,5px currentColor',
  }}
        >
          {title}
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-3"
              style={{ color: accentColor,
                fontFamily: '"Inter","Inter Placeholder", sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '64px',
                lineHeight: '1.1em',
                letterSpacing: '0em',
                WebkitTextStroke: '0,5px currentColor',
               }}
            >
              {stat.value}
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: textColor }}
            >
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}