import React from 'react';
import { IClient } from '@/types/IClient';

interface LogosGridProps {
  clients: IClient[];
  featuredLogos?: string[]; // Array com os nomes dos logos em destaque
}

const LogosGrid = ({ clients, featuredLogos }: LogosGridProps) => {
  // Se featuredLogos for fornecido, filtra apenas esses clientes
  const displayClients = featuredLogos 
    ? clients.filter(client => featuredLogos.includes(client.nome))
    : clients;

  // Divide em duas linhas: primeiros 8 e restantes
  const firstRow = displayClients.slice(0, 8);
  const secondRow = displayClients.slice(8);

  return (
    <div className="w-full py-12 px-4">
      {/* Primeira linha - 8 logos */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 md:gap-12 items-center justify-items-center max-w-6xl mx-auto mb-8">
        {firstRow.map((client, index) => (
          <div 
            key={index}
            className="flex items-center justify-center w-full h-16 md:h-20 px-2"
          >
            <img 
              src={client.logoComum} 
              alt={client.nome}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Segunda linha - logos restantes centralizados */}
      {secondRow.length > 0 && (
        <div className="flex gap-8 md:gap-12 items-center justify-center max-w-6xl mx-auto">
          {secondRow.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center w-24 md:w-32 h-16 md:h-20 px-2"
            >
              <img 
                src={client.logoComum} 
                alt={client.nome}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogosGrid;