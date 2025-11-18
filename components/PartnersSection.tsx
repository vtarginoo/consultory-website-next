'use client';

import { useState } from 'react';
import MoreButton from './MoreButton'; // Ajuste o caminho conforme necessário
import { TeamMember } from '@/types/ITeamMember';
import { TeamCard } from './TeamCard';



const teamMembers: TeamMember[] = [
  {
    name: 'Vinícius Aquino',
    role: 'Co-Founder & Managing Partner',
    image: '/employee/partner-3.png',
    resume: "20 anos de experiência em consultoria, redução de custos e excelência operacional. Liderou programas de otimização da cadeia de valor que geraram mais de R$ 1 bilhão em resultados. Administrador pela PUC-RJ e UCAM."
  },
  {
    name: 'Marcos Nicolas',
    role: 'Senior Partner Growth & Governance',
    image: '/employee/partner-4.png',
    resume: "Executivo com 38 anos de atuação nos setores privado e público, liderando projetos em infraestrutura, governo e tecnologia. Matemático e Analista de Sistemas pela UERJ, com MBA pelo COPPEAD/UFRJ."
  },
  {
    name: 'Marcos Saraiva',
    role: 'Co-Founder & Chairman',
    image: '/employee/partner-1.png',
    resume: "Mais de 35 anos em liderança global nos setores de mineração, oil&gas, energia e agronegócio. Mestre em Marketing e Engenheiro Elétrico, com especializações no MIT, IMD, INSEAD/FDC e Kellogg."
  },
  {
    name: 'Rodrigo Colombaretti',
    role: 'Co-Founder & CEO',
    image: '/employee/22.png',
    resume: "Executivo com 25 anos em multinacionais de grande porte, especialista em estratégia, logística, finanças e planejamento. Engenheiro Químico e advogado, com formações no MIT, IMD e COPPEAD."
  }

];




// Componente Principal
export default function PartnersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className=" px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Título centralizado */}
        <div className="flex flex-col items-center mb-12">
          <h2
            className="text-center"
            style={{
              fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
              fontSize: 'clamp(32px, 4vw + 1rem, 48px)',
              fontWeight: 500,
              letterSpacing: '0em',
              color: '#222',
              WebkitTextStrokeWidth: '0.5px',
              WebkitTextStrokeColor: '#222',
            }}
          >
            NOSSOS <strong className="font-bold">LÍDERES</strong>
          </h2>

          <div className="mt-2 h-[2px] bg-[#ce9c5d] w-[160px] lg:w-[220px]" />
        </div>

        {/* Grid 4 colunas em uma linha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              member={member}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}