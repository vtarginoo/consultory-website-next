import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
  imageSrc?: string; // Propriedade opcional para a imagem
  imageAlt?: string;  // Propriedade opcional para o texto alt da imagem
}

export default function Hero({ title, subtitle, children, imageSrc, imageAlt }: HeroProps) {
  return (
    <section className="relative w-full text-left overflow-hidden">
      {/* Container da Imagem de Fundo (só renderiza se imageSrc existir) */}
      {imageSrc && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={imageAlt || 'Hero Banner Image'}
              layout="fill"
              objectFit="cover"
            />
            {/* Overlay para escurecer a imagem e garantir legibilidade do texto */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        </>
      )}

      {/* Conteúdo do Hero */}
      <div className="relative z-2 py-24 px-4 text-white dark:text-gray-100">
        <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          {title}
        </h1>
        <p className="text-xl font-light">
          {subtitle}
        </p>
        <div className="flex justify-center space-x-6 mt-12">
          {children}
        </div>
      </div>
    </section>
  );
}
