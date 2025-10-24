import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MoreButton from './MoreButton';
import { formatBold, formatText } from './lib/textFormatting';

interface AllianceSectionProps {
    title: string; // Pode incluir **texto** para bold
    description: string; // Pode incluir **texto** para bold
    buttonText?: string;
    buttonLink?: string;
    imageSrc?: string;
    imageAlt?: string;
    className?: string;
}

export const AllianceSection: React.FC<AllianceSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = '',
  className = ''
}) => {
  
    return (
        <section className={`relative py-0 md:py-0 ${className}`}>
            {/* Background escuro */}
            <div className="absolute inset-0 bg-gray-900"
             style={{ backgroundColor:'#000' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-3 items-center">
                    {/* Imagem do cliente (opcional) */}
                    {imageSrc && (
                        <div
                            className="hidden md:flex md:w-[36%] flex-shrink-0 items-center justify-center self-stretch relative"
                            style={{ opacity: 0.2 }}
                        >
                            <div className="relative w-full aspect-square max-w-[580px]">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover rounded-lg"
                                    style={{
                                        objectPosition: 'center center'
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Conteúdo */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Título */}
                        <h4
                            className="text-white uppercase"
                            style={{
                                fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                fontSize: '36px',
                                fontWeight: 400,
                                lineHeight: '1.2em',
                                letterSpacing: '0em',
                            }}
                        >
                            {formatText(title)}
                        </h4>

                        {/* Linha divisória (visível apenas em mobile) */}
                        <div className="md:hidden w-full h-[2px] bg-[#ce9c5d]"></div>

                        {/* Descrição */}
                        <h6
                            className="text-white/50 leading-relaxed"
                            style={{
                                fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                fontSize: '24px',
                                fontWeight: 400,
                                lineHeight: '1.6em',
                            }}
                        >
                            {formatBold(description)}
                        </h6>

                        {/* Botão */}

                        {/* <MoreButton text={'Veja Mais'} link={"/arco-gt"}></MoreButton> */}

                    </div>
                </div>
            </div>
        </section>
    );
};
