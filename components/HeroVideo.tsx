"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import LogoCarousel from "./LogoCarousel";
import ContactWidget from "./ContactWidget";

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
    <section className="relative w-full h-screen overflow-hidden">
      {/* Camada 1: Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video-home.mp4" type="video/mp4" />
      </video>

      {/* Camada 2: Overlay escuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Camada 3: Container do conteúdo */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* ÁREA 1: Conteúdo Principal (Título + Setores + Subtítulo) */}
        <div className="flex-1 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            {/* Container de todo o conteúdo */}
            <div className="space-y-4">
              {/* Grid com 2 colunas: Título | Setores */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
                {/* Coluna esquerda: Título principal */}
                <div className="text-white">
                  <h1 className="font-framer-title leading-tight">
                    Transformando estratégia em resultados
                  </h1>
                </div>

                {/* Coluna direita: Setores animados */}
                <div className="text-white">
                  <p className="font-framer-subtitle -mb-2">
                    para
                  </p>
                  <div className="overflow-hidden h-16 md:h-20 flex items-center">
                    <div
                      className={`md:text-5xl  font-framer-animation transition-all duration-300 whitespace-nowrap ${isAnimating
                          ? "opacity-0 -translate-y-8"
                          : "opacity-100 translate-y-0"
                        }`}
                    >
                      {setores[currentIndex]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Linha divisória + Subtítulo juntos */}
              <div className="w-full space-y-1">
                {/* Linha divisória */}
                <div className="w-full h-px bg-white/20 relative overflow-hidden mb-4" />

                {/* Subtítulo */}
                <p className="text-base md:text-lg font-framer-subtitle2 text-gray-200 max-w-[480px] text-justify">
                  Um modelo inovador de consultoria, focado na otimização da
                  cadeia de valor e geração de resultados por meio de
                  Procurement e Supply Chain.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ÁREA 2: Barra Inferior (Logos + Widget de Contato) */}
        <div className="w-full" >
          <div className="w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Seção de logos "Excelência Reconhecida" */}
              
              <LogoCarousel></LogoCarousel>

              {/* Widget de Contato - PERSONALIZE DEPOIS */}
              
              <ContactWidget></ContactWidget>            

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
