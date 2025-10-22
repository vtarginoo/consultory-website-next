"use client"

import React from "react";

interface TimelineItemProps {
  year: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, isLast }) => {
  return (
    <div className="timeline-item flex-1 flex flex-col items-center">
      {/* Year Circle */}
      <div 
        className="circle w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold text-black transition-all duration-300 cursor-pointer hover:text-white z-10 relative"
        style={{ backgroundColor: '#d4a152' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#c67d2f';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#F5B017';
        }}
      >
        {year}
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const timelineData = [
    {
      year: '2019',
      items: [
        'Consolidação do modelo da Arco com foco total em gerar impacto para o cliente',
        'Casos de sucesso e entregas que validaram nosso produto e expertise',
        'Crescimento sustentado mesmo com baixa estrutura formal',
        'Triênio com um ano a mais em função da pandemia'
      ]
    },
    {
      year: '2023',
      items: [
        'Crescimento de portfólio, base de clientes e complexidade',
        'Evolução na governança, nos produtos e nos processos',
        'Compreensão e desenvolvimento de gestão interna e maturidade operacional'
      ]
    },
    {
      year: '2025',
      items: [
        'Governança, cadeia de valor e processos consolidados',
        'Capacidade de atender novos projetos com mais qualidade e previsibilidade',
        'Entrada em fase de crescimento e expansão de mercado com maturidade, mirando metas mais desafiadoras e com menor dependência de projetos pontuais'
      ]
    },
    {
      year: '2028',
      items: []
    }
  ];

  return (
    <div className="timeline w-full py-8 md:py-12 fade-in visible">
      {/* Desktop View - Horizontal */}
      <div className="hidden md:block relative">
        {/* Timeline Items Grid - Circles */}
        <div className="grid grid-cols-4 gap-8 relative">
          {timelineData.map((data, idx) => (
            <TimelineItem 
              key={data.year}
              year={data.year}
              isLast={idx === timelineData.length - 1}
            />
          ))}
        </div>

        {/* Connecting Lines Container */}
        <div className="absolute top-12 md:top-14 left-0 right-0 flex items-center justify-between px-[12.5%]">
          {timelineData.map((_, idx) => {
            if (idx === timelineData.length - 1) return null;
            
            const isLastConnection = idx === timelineData.length - 2;
            
            return (
              <div 
                key={`line-${idx}`}
                className="flex-1 h-1"
                style={{ 
                  backgroundColor: isLastConnection ? 'transparent' : '#F5B017',
                  borderTop: isLastConnection ? '2px dashed #F5B017' : 'none',
                  marginLeft: idx === 0 ? '0' : '0px',
                  marginRight: '0px'
                }}
              />
            );
          })}
        </div>

        {/* Items below the lines - using same 4 column grid */}
        <div className="grid grid-cols-4 gap-8 mt-12 relative">
          {timelineData.map((data, idx) => {
            // Skip the last item (2028) as it has no content
            if (idx === timelineData.length - 1) return <div key={`empty-${idx}`}></div>;
            
            return (
              <div key={`items-${data.year}`} className="flex justify-end" style={{ marginRight: '-50%' }}>
                {data.items.length > 0 && (
                  <ul className="space-y-3 w-full max-w-[280px]">
                    {data.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <div 
                          className="mt-1 flex-shrink-0 w-5 h-5 rounded flex items-center justify-center"
                          style={{ backgroundColor: '#FFFF' }}
                        >
                          <svg className="w-3 h-3" fill="#F5B017" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                        </div>
                        <span 
                          className="text-sm md:text-base text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile View - Vertical */}
      <div className="md:hidden space-y-8">
        {timelineData.map((data, idx) => (
          <div key={data.year} className="relative flex flex-col items-center">
            {/* Year Circle */}
            <div 
              className="circle w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold text-black transition-all duration-300 cursor-pointer hover:text-white z-10"
              style={{ backgroundColor: '#F5B017' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c67d2f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F5B017';
              }}
            >
              {data.year}
            </div>

            {/* Items */}
            {data.items.length > 0 && (
              <ul className="space-y-3 px-4 mt-6 w-full">
                {data.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <div 
                      className="mt-1 flex-shrink-0 w-5 h-5 rounded flex items-center justify-center"
                      style={{ backgroundColor: '#FFFF' }}
                    >
                      <svg className="w-3 h-3" fill="#F5B017" viewBox="0 0 448 512">
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                      </svg>
                    </div>
                    <span 
                      className="text-sm text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            )}

            {/* Connecting Line for mobile */}
            {idx < timelineData.length - 1 && (
              <div 
                className={`w-1 h-12 mt-6 ${
                  idx === timelineData.length - 2 
                    ? 'border-l-2 border-dashed' 
                    : ''
                }`}
                style={{ 
                  backgroundColor: idx === timelineData.length - 2 ? 'transparent' : '#F5B017',
                  borderColor: '#F5B017'
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;