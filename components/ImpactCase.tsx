import React from 'react';
import { Check } from 'lucide-react';
import MoreButton from './MoreButton';
import { formatBold } from './lib/textFormatting';

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
                            {/* Badge de Categoria */}
                            <div className="flex items-center gap-3">
                                <div
                                    style={{
                                        width: '4px',
                                        height: '24px',
                                        backgroundColor: '#E8481C',
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

                            {/* Título */}
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

                            {/* Descrição */}
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

                            {/* Texto destacado (opcional) */}
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


                            {/* Imagem 2 (abaixo do texto) - Menor mas mantendo proporção */}
                            <div className="flex justify-center items-center">
                                <div className="relative w-full max-w-md rounded-3xl overflow-hidden" style={{ aspectRatio: '3/2' }}>
                                    <img
                                        src={imageUrl2}
                                        alt={imageAlt}
                                        className="w-full h-full object-cover"
                                        style={{
                                            display: 'block',
                                            objectPosition: 'center',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Botão */}
                            {/* <div className="pt-4">
                                <MoreButton text={buttonText} link={buttonLink} />
                            </div> */}
                        </div>
                    </div>

                    {/* Imagem 1 (lateral direita) */}
                    <div className="lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden" style={{ height: '500px' }}>
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};