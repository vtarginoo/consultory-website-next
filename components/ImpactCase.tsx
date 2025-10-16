import React from 'react';
import { formatBold } from './lib/textFormatting';
import Image from 'next/image';

interface ImpactCaseProps {
    category: string;
    title: string;
    description: string;
    highlightText?: string;
    imageUrl: string;
    imageUrl2: string;
    imageAlt?: string;
    buttonText?: string;
    buttonLink?: string;
    className?: string;
}

export const ImpactCase: React.FC<ImpactCaseProps> = ({
    category,
    title,
    description,
    highlightText,
    imageUrl,
    imageUrl2,
    imageAlt = 'Case study image',
    buttonText = 'VEJA MAIS',
    buttonLink = '#',
    className = ''
}) => {
    return (
        <section className={`py-16 ${className}`}
            style={{ backgroundColor: '#1b1d1f0d', }}>
            <div className="container mx-auto px-4">
                {/* Título da Seção */}
                <div className="text-center mb-6">
                    <h2
                        className="uppercase mb-0"
                        style={{
                            fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                            fontSize: 'clamp(28px, 5vw, 36px)',
                            fontWeight: 500,
                            letterSpacing: '0em',
                            color: 'rgb(36, 36, 36)',
                            WebkitTextStrokeWidth: '0.5px',
                            WebkitTextStrokeColor: 'rgba(36, 36, 36, 0.1)',
                        }}
                    >
                        CASOS DE <strong style={{ fontWeight: 800 }}>IMPACTO</strong>
                    </h2>

                    {/* Divisor */}
                    <div className="flex justify-center">
                        <div
                            style={{
                                backgroundColor: '#ce9c5d',
                                width: '40%',
                                height: '3px',
                                position: 'relative',
                            }}
                        />
                    </div>
                </div>

                {/* Conteúdo Principal */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Texto e Imagem 2 */}
                    <div className="lg:w-1/2">
                        <div className="space-y-6">
                            {/* Badge de Categoria (Sem alterações) */}
                            <div className="flex items-center gap-3">
                                <div
                                    style={{
                                        width: '4px',
                                        height: '24px',
                                        backgroundColor: '#ce9c5d',
                                        boxShadow: 'rgba(27, 57, 66, 0.22) 1px 1px 1px 0px',
                                    }}
                                />
                                <span
                                    style={{
                                        fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'rgb(27, 57, 66)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    {category}
                                </span>
                            </div>

                            {/* Título (Sem alterações) */}
                            <h3
                                style={{
                                    fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                    fontSize: 'clamp(22px, 4vw, 28px)',
                                    fontWeight: 500,
                                    color: 'rgb(0, 1, 6)',
                                    lineHeight: '1.3',
                                }}
                            >
                                {title}
                            </h3>

                            {/* Descrição (Sem alterações) */}
                            <p
                                style={{
                                    fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                    fontSize: '16px',
                                    lineHeight: '1.4em',
                                    color: 'rgb(92, 92, 92)',
                                }}
                            >
                                {formatBold(description)}
                            </p>

                            {/* Texto destacado (opcional) (Sem alterações) */}
                            {highlightText && (
                                <p
                                    style={{
                                        fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                        fontSize: '16px',
                                        lineHeight: '1.4em',
                                        color: 'rgb(92, 92, 92)',
                                        fontWeight: 700,
                                    }}
                                >
                                    {highlightText}
                                </p>
                            )}


                            {/* IMAGEM 2 - Refatorada para <Image /> */}
                            <div className="flex justify-center items-center">
                                {/* O 'relative' no contêiner permite que 'layout="fill"' funcione */}
                                <div className="relative w-full max-w-md rounded-3xl overflow-hidden" style={{ aspectRatio: '3/2' }}>
                                    <Image
                                        src={imageUrl2}
                                        alt={imageAlt}
                                        // Usa o tamanho definido pelo div pai
                                        layout="fill"
                                        // Aplica o corte da imagem
                                        objectFit="cover"
                                        // Por ser a segunda imagem, o Lazy Loading (padrão) é bom
                                    />
                                </div>
                            </div>

                            {/* Botão */}
                            {/* <div className="pt-4">
                                <MoreButton text={buttonText} link={buttonLink} />
                            </div> */}
                        </div>
                    </div>

                    {/* IMAGEM 1 (lateral direita) - Refatorada para <Image /> */}
                    <div className="lg:w-1/2">
                        {/* Adicionamos 'relative' para o Image funcionar com 'fill' */}
                        <div className="relative rounded-3xl overflow-hidden" style={{ height: '500px' }}>
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                // Usa o tamanho definido pelo div pai (height: 500px e w-full)
                                layout="fill"
                                // Aplica o corte da imagem
                                objectFit="cover"
                                // Esta provavelmente é a imagem principal na dobra, bom para usar 'priority'
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};