"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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

// Dados de exemplo (substitua pela importação real)
const solutionsData: Solution[] = [
  { id: 1, title: 'Diagnóstico Estratégico', description: 'Análise completa do seu negócio para identificar oportunidades de crescimento e otimização.', imageNumber: 1 },
  { id: 2, title: 'Planejamento Financeiro', description: 'Estruturação financeira robusta para suportar o crescimento sustentável da empresa.', imageNumber: 2 },
  { id: 3, title: 'Gestão de Processos', description: 'Otimização de processos para aumentar eficiência e reduzir custos operacionais.', imageNumber: 3 },
  { id: 4, title: 'Transformação Digital', description: 'Implementação de tecnologias que impulsionam a produtividade e competitividade.', imageNumber: 4 },
];


// Estilos reutilizáveis
const styles = {
  mainTitle: {
    fontFamily: '"Instrument Sans", sans-serif',
    fontSize: 'clamp(28px, 5vw, 36px)',
    fontWeight: 500,
    color: 'rgb(36, 36, 36)',
    lineHeight: '1.1'
  },
  subtitle: {
    fontFamily: '"Instrument Sans", sans-serif',
    fontSize: 'clamp(24px, 4vw, 36px)',
    fontWeight: 600,
    color: 'rgb(36, 36, 36)',
    lineHeight: '1.2'
  },
  number: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: 'clamp(18px, 3vw, 24px)',
    fontWeight: 500,
    color: 'rgba(36, 36, 36, 0.5)',
    minWidth: '40px'
  },
  cardTitle: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: 'clamp(16px, 2.5vw, 20px)',
    fontWeight: 500,
    color: 'rgb(36, 36, 36)',
    lineHeight: '1.3'
  },
  description: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '1.6em',
    color: 'rgb(27, 57, 66)',
    textAlign: 'justify',
    textIndent: '2em'
  }
};

const SolutionsMenu: React.FC<SolutionsMenuProps> = ({
  title = 'CONTRATE NOSSAS',
  subtitle = 'SOLUÇÕES',
  solutions = solutionsData,
  className = ''
}) => {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="uppercase mb-0" style={styles.mainTitle}>
            {title} <strong style={{ fontWeight: 800 }}>{subtitle}</strong>
          </h2>
          <p className="mb-2 mt-1" style={styles.subtitle}>
            DO DIAGNÓSTICO À <strong style={{ fontWeight: 800 }}>CAPTURA DE VALOR</strong>
          </p>
          <div className="flex justify-center">
            <div className="h-[3px] w-[40%] bg-[#ce9c5d]" />
          </div>
        </div>

        {/* Lista de Soluções */}
        <div className="max-w-4xl mx-auto space-y-4">
          {solutions.map((solution, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={solution.id}
                className="rounded-2xl transition-all duration-300 bg-black/5"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  {/* Número */}
                  <div className="mr-3" style={styles.number}>
                    {String(index + 1).padStart(2, '0')}.
                  </div>

                  {/* Título */}
                  <div className="flex-1 pr-3">
                    <h5 style={styles.cardTitle}>{solution.title}</h5>
                  </div>

                  {/* Ícone */}
                  <div
                    className="ml-3 flex items-center justify-center w-9 h-9 border border-black/80 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? 'rgba(206, 156, 93, 0.2)' : 'transparent',
                      transform: `${isHovered ? 'scale(1.1)' : 'scale(1)'} ${isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}`
                    }}
                  >
                    <ArrowRight size={18} color="rgba(0, 0, 0, 0.8)" />
                  </div>
                </button>

                {/* Descrição */}
                {isOpen && (
                  <div className="px-6 pb-6 transition-all duration-300">
                    <p >

                      {formatText(solution.description)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsMenu;


