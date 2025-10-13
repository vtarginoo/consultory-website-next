import React from 'react';

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface OurValuesProps {
  title?: string;
  highlightWord?: string;
  values?: Value[];
  backgroundColor?: string;
  cardBackgroundColor?: string;
  titleColor?: string;
}

export default function OurValuesSection({
  title = "NOSSOS",
  highlightWord = "VALORES",
  values = [
    {
      icon: "/values/value1.svg",
      title: "Solidez & Precisão",
      description: "Atuamos com rigor e discernimento, filtrando o essencial para construir estratégias que se sustentam no tempo."
    },
    {
      icon: "/values/value2.svg",
      title: "Transparência & Compromisso",
      description: "Cultivamos relações honestas, guiadas pela coragem de dizer o necessário e pela ética de sustentar o que dizemos."
    },
    {
      icon: "/values/value3.svg",
      title: "Confiança",
      description: "Nossa trajetória nos permite assumir compromissos com maturidade, entregando segurança em cada decisão compartilhada."
    },
    {
      icon: "/values/value4.svg",
      title: "Flexibilidade & Inovação",
      description: "Evoluímos com o contexto, combinando escuta ativa e ousadia para propor caminhos que ainda não foram trilhados."
    },
    {
      icon: "/values/value5.svg",
      title: "Respeito & Diversidade",
      description: "Reconhecemos a riqueza do plural, criando espaços onde a diferença é potência e a escuta é prática cotidiana."
    },
    {
      icon: "/values/value6.svg",
      title: "Intuição & Estratégia",
      description: "Traduzimos sinais sutis em escolhas conscientes, alinhando sensibilidade e direção para decisões que fazem sentido."
    }
  ],
  backgroundColor = "transparent",
  cardBackgroundColor = "rgb(255, 255, 255)",
  titleColor = "#1B1D1F"
}: OurValuesProps) {
  return (
    <div
      className="w-full py-16 md:py-24"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-light"
          style={{
            color: titleColor 
          }}
          >
            {title} <strong className="font-semibold">{highlightWord}</strong>
          </h3>

          {/* Divider */}
          <div className="mx-auto mt-6 h-1 w-64 bg-[#ce9c5d] rounded"></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: cardBackgroundColor }}
            >
              {/* Icon */}
              <div className="w-10 h-10 mb-6">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h6 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h6>
                <p className="text-base text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}