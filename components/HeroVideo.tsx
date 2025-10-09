"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface HeroVideoProps {
  videoSrc: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroVideo() {
    const setores = [
    "Indústria",
    "Energia",
    "Saneamento",
    "Oil and Gas",
    "Infraestrutura",
    "Agro",
    "Siderúrgica",
    "Serviços",
    "Bens e Consumo",
    "Esportes",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsAnimating(true);
        
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % setores.length);
          setIsAnimating(false);
        }, 300); // Duração da animação de saída
        
      }, 2000); // Troca a cada 2 segundos

      return () => clearInterval(interval);
    }, [setores.length]);



   return (
    <section className="hero-video relative w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video-home.mp4" type="video/mp4" />
      </video>

      {/* Camada de escurecimento */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex justify-between items-end gap-8">
          
          {/* Bloco da esquerda (título) */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-framer-title leading-tight">
              Transformando estratégia em resultados
            </h1>
          </div>


          

          {/* Bloco da direita (setores animados) */}
          <div className="flex flex-col items-start flex-1 max-w-md">
            <p className="font-framer-subtitle">para</p>
            <div className="overflow-hidden h-16 flex items-center w-full">
              <div
                className={`font-framer-title transition-all duration-300 whitespace-nowrap ${
                  isAnimating 
                    ? 'opacity-0 -translate-y-8' 
                    : 'opacity-100 translate-y-0'
                }`}
              >
                {setores[currentIndex]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

