'use client'



import React, { useState } from 'react';
import Image from 'next/image';

interface ImpactCaseCarouselProps {
    textContent: string;
    imageUrl1: string;
    carouselImages: string[];
    className?: string;
}

const styles = {
    title: {
        fontFamily: '"Instrument Sans", sans-serif',
        fontSize: 'clamp(24px, 4vw, 34px)',
        fontWeight: 500,
        color: 'rgb(36, 36, 36)',
    },
    text: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontSize: '14px',
        lineHeight: '1.6em',
        color: 'rgb(0, 0, 0)',
        textAlign: 'justify' as const,
        textJustify: 'inter-word' as const,
    },
};

/**
 * CarouselWithIndicators - Agora totalmente responsivo
 */
export const CarouselWithIndicators: React.FC<{
    images: string[];
    current: number;
    onChange: (index: number) => void;
}> = ({ images, current, onChange }) => {
    return (
        <div className="w-full mx-auto">
            {/* Indicadores acima do carrossel */}
            <div className="flex justify-center items-center gap-2 mb-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onChange(index)}
                        aria-label={`Ir para slide ${index + 1}`}
                        className={`transition-all duration-300 focus:outline-none ${current === index ? 'shadow-lg' : ''}`}
                        style={{
                            width: current === index ? 32 : 12,
                            height: 12,
                            borderRadius: 6,
                            backgroundColor: current === index ? '#ce9c5d' : '#d1d5db',
                            cursor: 'pointer',
                        }}
                    />
                ))}
            </div>

            {/* Wrapper responsivo do carrossel */}
            <div className="rounded-3xl overflow-hidden relative w-full mx-auto"
                style={{
                    maxWidth: '620px',
                    aspectRatio: '1154 / 2126',
                    maxHeight: '700px',
                }}
            >
                <img
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    className="rounded-3xl w-full h-full object-contain"
                />
            </div>
        </div>
    );
};

export const ImpactCaseCarousel: React.FC<ImpactCaseCarouselProps> = ({
    textContent,
    imageUrl1,
    carouselImages,
    className = '',
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <section className={`py-8 md:py-16 bg-white ${className}`}>
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Título */}
                <div className="text-center mb-6 md:mb-8">
                    <h2 className="uppercase mb-0" style={styles.title}>
                        CASOS DE <strong style={{ fontWeight: 800 }}>IMPACTO</strong>
                    </h2>
                    <div className="flex justify-center">
                        <div className="h-[3px] w-[60%] md:w-[40%] bg-[#ce9c5d]" />
                    </div>
                </div>

                {/* Conteúdo Principal */}
                <div className="flex flex-col lg:flex-row items-start mt-8 md:mt-12 gap-6 lg:gap-0">
                    {/* Lado Esquerdo - Texto e Imagem */}
                    <div className="w-full lg:w-9/12 flex justify-center">
                        <div className="w-full max-w-md space-y-4 px-2 md:px-0">
                            <div
                                style={styles.text}
                                dangerouslySetInnerHTML={{
                                    __html: textContent.replace(/<p>/g, '<p style="margin-bottom: 10px;">'),
                                }}
                            />

                            <div className="mt-4 relative w-full h-[260px] md:h-[320px] lg:h-[400px]" style={{ maxWidth: '480px' }}>
                                <Image
                                    src={imageUrl1}
                                    alt="Impact case"
                                    fill
                                    className="rounded-2xl object-cover"
                                    style={{ objectPosition: 'center center' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 480px, 480px"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Lado Direito - Carrossel */}
                    <div className="w-full lg:w-7/12 flex justify-center lg:justify-start items-start lg:-ml-48 px-2 md:px-0">
                        <div className="w-full" style={{ maxWidth: '620px' }}>
                            <CarouselWithIndicators
                                images={carouselImages}
                                current={currentSlide}
                                onChange={setCurrentSlide}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};