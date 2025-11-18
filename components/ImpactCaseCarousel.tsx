'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImpactCaseCarouselProps {
    textContent: string;
    imageUrl1: string;
    carouselImages: string[];
    className?: string;
}

const styles = {
    title: {
        fontFamily: '"Instrument Sans", sans-serif',
        fontSize: 'clamp(28px, 5vw, 36px)',
        fontWeight: 500,
        color: 'rgb(36, 36, 36)',
    },
    text: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontSize: '16px',
        lineHeight: '1.6em',
        color: 'rgb(0, 0, 0)',
        textAlign: 'justify' as const,
        textJustify: 'inter-word' as const,
    }
};

export const ImpactCaseCarousel: React.FC<ImpactCaseCarouselProps> = ({
    textContent,
    imageUrl1,
    carouselImages,
    className = ''
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <section className={`py-16 bg-white ${className}`}>
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Título */}
                <div className="text-center mb-6">
                    <h2 className="uppercase mb-0" style={styles.title}>
                        CASOS DE <strong style={{ fontWeight: 800 }}>IMPACTO</strong>
                    </h2>
                    <div className="flex justify-center">
                        <div className="h-[3px] w-[40%] bg-[#ce9c5d]" />
                    </div>
                </div>

                {/* Conteúdo Principal */}
                <div className="flex flex-col lg:flex-row items-start mt-12 gap-8">
                    {/* Lado Esquerdo - Texto e Imagem */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="w-full max-w-lg space-y-4">
                            {/* Texto compacto (justificado) */}
                            <div
                                style={styles.text}
                                // preserva margin entre <p> do HTML recebido
                                dangerouslySetInnerHTML={{
                                    __html: textContent.replace(/<p>/g, '<p style="margin-bottom: 12px;">')
                                }}
                            />

                            {/* Imagem 1 - mesma largura do texto e centralizada */}
                            <div className="mt-4">
                                <img
                                    src={imageUrl1}
                                    className="w-full rounded-2xl mx-auto"
                                    style={{
                                        height: "300px",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                   {/* Lado Direito - Carrossel */}
                    <div className="lg:w-1/2 flex justify-start items-start">
                        <div className="relative" style={{ maxWidth: '400px', width: '100%' }}>
                            {/* Imagem do Carrossel */}
                            <div className="rounded-3xl overflow-hidden flex items-center justify-center">
                                <img
                                    src={carouselImages[currentSlide]}
                                    alt={`Slide ${currentSlide + 1}`}
                                    className="w-full h-auto rounded-3xl"
                                />
                            </div>

                            {/* Botão Anterior - Lado Esquerdo */}
                            <button
                                onClick={prevSlide}
                                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                                style={{
                                    position: 'absolute',
                                    left: '-25px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: '#ce9c5d',
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 10
                                }}
                                aria-label="Slide anterior"
                            >
                                <ChevronLeft size={28} color="white" strokeWidth={3} />
                            </button>

                            {/* Botão Próximo - Lado Direito */}
                            <button
                                onClick={nextSlide}
                                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                                style={{
                                    position: 'absolute',
                                    right: '-25px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: '#ce9c5d',
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 10
                                }}
                                aria-label="Próximo slide"
                            >
                                <ChevronRight size={28} color="white" strokeWidth={3} />
                            </button>

                            {/* Indicadores */}
                            <div className="flex justify-center items-center gap-2 mt-6">
                                {carouselImages.map((_, index) => (
                                    <div
                                        key={index}
                                        className="transition-all duration-300"
                                        style={{
                                            width: currentSlide === index ? '32px' : '12px',
                                            height: '12px',
                                            borderRadius: '6px',
                                            backgroundColor: currentSlide === index ? '#ce9c5d' : '#d1d5db',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};