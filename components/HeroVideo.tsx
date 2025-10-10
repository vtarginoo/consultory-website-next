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
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            
            {/* Container de todo o conteúdo */}
            <div className="space-y-8">
              
              {/* Grid com 2 colunas: Título | Setores */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
                
                {/* Coluna esquerda: Título principal */}
                <div className="text-white">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-framer-title leading-tight">
                    Transformando estratégia em resultados
                  </h1>
                </div>

                {/* Coluna direita: Setores animados */}
                <div className="text-white">
                  <p className="text-lg md:text-xl font-framer-subtitle mb-2">para</p>
                  <div className="overflow-hidden h-16 md:h-20 flex items-center">
                    <div
                      className={`text-4xl md:text-5xl lg:text-6xl font-framer-title transition-all duration-300 whitespace-nowrap ${
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

              {/* Linha divisória */}
              <div className="w-full h-px bg-white/20 relative overflow-hidden" />


              {/* Área do Subtítulo - Largura total, usando só metade */}
              <div className="w-full">
                <p className="text-base md:text-lg font-framer-subtitle2 text-gray-200 max-w-[480px] text-justify">
                  Um modelo inovador de consultoria, focado na otimização da cadeia de valor e geração de resultados por meio de Procurement e Supply Chain.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ÁREA 2: Barra Inferior (Logos + Widget de Contato) */}
        <div className="w-full border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-6">
            
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Seção de logos "Excelência Reconhecida" */}
              <div className="flex items-center gap-6 flex-wrap">
                <span className="text-white text-sm font-framer-subtitle">
                  Excelência Reconhecida:
                </span>
                
                {/* Container dos logos - PERSONALIZE DEPOIS */}
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-white text-xs">
                    Logo 1
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-white text-xs">
                    Logo 2
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-white text-xs">
                    Logo 3
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-white text-xs">
                    Logo 4
                  </div>
                </div>
              </div>

              {/* Widget de Contato - PERSONALIZE DEPOIS */}
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-lg">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Alex</div>
                  <div className="text-gray-500 text-xs">Online</div>
                </div>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6">
                  CONTATO
                </Button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );}