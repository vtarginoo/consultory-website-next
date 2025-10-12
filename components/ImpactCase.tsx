import React from 'react';
import { Check } from 'lucide-react';
import MoreButton from './MoreButton';

interface ImpactCaseProps {
    category: string;
    title: string;
    description: string;
    items: string[];
    imageUrl: string;
    imageAlt?: string;
    buttonText?: string;
    buttonLink?: string;
    className?: string;
}

export const ImpactCase: React.FC<ImpactCaseProps> = ({
    category,
    title,
    description,
    items,
    imageUrl,
    imageAlt = 'Case study image',
    buttonText = 'VEJA MAIS',
    buttonLink = '#',
    className = ''
}) => {
    return (
        <section className={`py-16 ${className}`}
        style={{ backgroundColor: '#1b1d1f0d',}}>
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
                    {/* Texto e Lista */}
                    <div className="lg:w-1/2">
                        <div className="space-y-6">
                            {/* Badge de Categoria */}
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
                                {description}
                            </p>

                            {/* Lista de Items */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                                {items.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div
                                            className="flex-shrink-0 mt-0.5"
                                            style={{
                                                width: '20px',
                                                height: '20px',
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 256 256"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    fill: 'rgba(36, 36, 36, 0.5)',
                                                }}
                                            >
                                                <path d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2" />
                                                <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208H208Z" />
                                            </svg>
                                        </div>
                                        <p
                                            style={{
                                                fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                                fontSize: '14px',
                                                lineHeight: '1.4em',
                                                color: 'rgb(92, 92, 92)',
                                            }}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Botão */}
                            <div className="pt-4">
                                <MoreButton text={buttonText} link={buttonLink}/> 
                            </div>
                        </div>
                    </div>

                    {/* Imagem */}
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
