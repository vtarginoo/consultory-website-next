"use client";


import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface NumberedItem {
    number: number;
    title: string;
    link?: string; // URL para onde o item deve linkar
    image?: string; // Caminho da imagem (opcional)
    onlyImage?: boolean; // Se true, mostra número + imagem (sem texto)
}

interface NumberedSectionProps {
    items: NumberedItem[];
    className?: string;
}

export const NumberedSection: React.FC<NumberedSectionProps> = ({
    items,
    className = ''
}) => {
    const renderRightContent = (item: NumberedItem) => {
        if (item.onlyImage && item.image) {
            // Se onlyImage for true, mostra a imagem ao invés do texto
            return (
                <div className="w-16 h-16 md:w-20 md:h-20 relative">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                    />
                </div>
            );
        }

        // Se não, renderiza o texto com largura definida
        return (
            <div className="flex flex-col w-32 md:w-40">
                <span 
                    className="text-sm md:text-base font-semibold text-gray-800 uppercase break-words"
                    style={{
                        fontFamily: '"DM Sans", "DM Sans Placeholder", "sans-serif"',
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '1.2em',
                        textTransform: 'uppercase',
                        color: '#222222',
                        fontStyle: 'normal',
                    }}
                >
                    {item.title}
                </span>
            </div>
        );
    };

    const renderItem = (item: NumberedItem, index: number) => {
        // Renderização: número + divisor + (texto OU imagem)
        const content = (
            <div className="flex items-center gap-4">
                <span
                    className="numbered-section-number"
                    style={{
                        fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                        fontSize: '54px',
                        fontWeight: 500,
                        lineHeight: '1.2em',
                        color: '#222222',
                        fontStyle: 'normal',
                    }}
                >
                    {item.number}
                </span>
                <div className="h-16 w-[3px] bg-[#ce9c5d]" />

                {renderRightContent(item)}
            </div>
        );

        // Se tem link, envolve em Link
        if (item.link) {
            return (
                <Link
                    key={index}
                    href={item.link}
                    className="transition-opacity hover:opacity-70"
                >
                    {content}
                </Link>
            );
        }

        // Se não tem link, retorna apenas o conteúdo
        return <div key={index}>{content}</div>;
    };

    return (
        <section className={`py-12 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {items.map((item, index) => renderItem(item, index))}
                </div>
            </div>
        </section>
    );
};