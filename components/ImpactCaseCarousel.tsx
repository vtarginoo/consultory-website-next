'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImpactCaseCarouselProps {
    textContent: string;
    imageUrl1: string;
    carouselImages: string[];
    className?: string;
}

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
        <section className={`py-16 ${className}`} style={{ backgroundColor: '#ffff' }}>
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
                        CASES DE <strong style={{ fontWeight: 800 }}>IMPACTO</strong>
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
                <div className="flex flex-col lg:flex-row gap-0 items-start mt-24">
                    {/* Lado Esquerdo - Texto e Imagem */}
                    <div className="lg:w-1/2">
                        <div className="space-y-6">
                            {/* Texto */}
                            <div
                                style={{
                                    fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                    fontSize: '16px',
                                    lineHeight: '1.6em',
                                    color: 'rgb(0, 0, 0)',
                                }}
                                dangerouslySetInnerHTML={{ 
                                    __html: textContent.replace(/<p>/g, '<p style="margin-bottom: 20px;">')
                                }}
                            />

                            {/* Imagem 1 */}
                            <div className="mt-8">
                                <img
                                    src={imageUrl1}
                                    alt="Imagem de apoio"
                                    className="w-full rounded-3xl"
                                    style={{
                                        maxHeight: '400px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Lado Direito - Carrossel */}
                    <div className="lg:w-1/2 flex justify-center">
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
                                    left: '-60px',
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
                                    right: '-60px',
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