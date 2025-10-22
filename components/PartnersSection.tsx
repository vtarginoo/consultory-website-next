'use client';

import { useState } from 'react';
import MoreButton from './MoreButton'; // Ajuste o caminho conforme necessário
import { TeamMember } from '@/types/ITeamMember';
import TeamCard from './TeamCard';


const teamMembers: TeamMember[] = [
    {
        name: 'Marcos Saraiva',
        role: 'Co-Founder & Chairman',
        image: '/employee/partner-1.png',
        resume: "Mais de 35 anos em liderança global nos setores de mineração, oil&gas, energia e agronegócio. Mestre em Marketing e Engenheiro Elétrico, com especializações no MIT, IMD, INSEAD/FDC e Kellogg."
    },
    {
        name: 'Rodrigo Colombaretti',
        role: 'Co-Founder & CEO',
        image: '/employee/partner-2.jpeg',
        resume: "Executivo com 25 anos em multinacionais de grande porte, especialista em estratégia, logística, finanças e planejamento. Engenheiro Químico e advogado, com formações no MIT, IMD e COPPEAD."
    },
    {
        name: 'Vinícius Aquino',
        role: 'Co-Founder & COO',
        image: '/employee/partner-3.jpg',
        resume: "20 anos de experiência em consultoria, redução de custos e excelência operacional. Atuou em projetos que geraram mais de R$ 1 bilhão em resultados. Administrador pela PUC-RJ, com passagens por KPMG e BrainNet."
    },
    {
        name: 'Marcos Nicolas',
        role: 'Co-Founder & Advisor',
        image: '/employee/partner-4.png',
        resume: "Executivo com 38 anos de atuação nos setores privado e público, liderando projetos em infraestrutura, governo e tecnologia. Matemático e Analista de Sistemas pela UERJ, com MBA pelo COPPEAD/UFRJ."
    }
];

export default function PartnersSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Grid 3 colunas x 2 linhas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Primeira Linha */}
                    {/* Coluna 1: Título */}
                    <div
                        className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer"
                        style={{ backgroundColor: "#1b1d1f0d" }}>

                        <div className="flex items-start justify-end"
                            style={{ backgroundColor: "#0000" }}>
                            <h2 className="font-light text-right pr-6 pt-6"
                                style={{
                                    fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                    fontSize: 'clamp(24px, 4vw + 1rem, 42px)',
                                    fontWeight: 500,
                                    letterSpacing: '0em',
                                    color: '#222',
                                    WebkitTextStrokeWidth: '0.5px',
                                    WebkitTextStrokeColor: '#222',
                                }}
                            >
                                NOSSOS{' '}
                                <br />
                                <strong className="font-bold">LÍDERES</strong>
                            </h2>
                        </div>
                    </div>

                    {/* Coluna 2: Marcos Saraiva */}
                    <TeamCard
                        member={teamMembers[0]}
                        index={0}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                    />

                    {/* Coluna 3: Rodrigo Colombaretti */}
                    <TeamCard
                        member={teamMembers[1]}
                        index={1}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                    />

                    {/* Segunda Linha */}
                    {/* Coluna 1: Vinícius Aquino */}
                    <TeamCard
                        member={teamMembers[2]}
                        index={2}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                    />

                    {/* Coluna 2: Marcos Nicolas */}
                    <TeamCard
                        member={teamMembers[3]}
                        index={3}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                    />

                    {/* Coluna 3: Botão CTA */}
                    <div className="flex items-end justify-center relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer"
                        style={{ backgroundColor: "#1b1d1f" }}>
                        <div className='pb-4'>
                        <MoreButton text={'ENTRAR EM CONTATO'} link={'/contato'} />
                        </div>
                    </div>

                    <div />

                </div>
            </div>
        </section>
    );
}