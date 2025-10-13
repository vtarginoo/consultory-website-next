import React from 'react';

/**
 * Processa texto com markdown bold (**texto**) e quebras de linha (\n)
 * @param text - Texto a ser processado
 * @returns Array de elementos React
 */
export const formatText = (text: string): React.ReactNode => {
  // Primeiro, divide por quebras de linha
  const lines = text.split(/\\n|\n/);
  
  return lines.map((line, lineIndex) => {
    // Divide a linha em partes para processar o bold
    const parts = line.split(/(\*\*.*?\*\*)/g);
    
    const processedLine = parts.map((part, partIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`${lineIndex}-${partIndex}`}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    // Adiciona quebra de linha se não for a última linha
    return (
      <React.Fragment key={lineIndex}>
        {processedLine}
        {lineIndex < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
};

/**
 * Versão simplificada que processa apenas bold (sem quebras de linha)
 * @param text - Texto a ser processado
 * @returns Array de elementos React
 */
export const formatBold = (text: string): React.ReactNode => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};