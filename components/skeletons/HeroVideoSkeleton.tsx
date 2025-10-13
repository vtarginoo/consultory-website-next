'use client';

import { useState, useEffect, useRef } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import HeroVideo from '@/components/HeroVideo';

export default function HeroVideoSkeleton() {
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Verifica se as fontes customizadas carregaram
    const checkFonts = async () => {
      if ('fonts' in document) {
        try {
          await document.fonts.ready;
          setFontsLoaded(true);
        } catch (error) {
          // Fallback: assume que carregou após 500ms
          setTimeout(() => setFontsLoaded(true), 500);
        }
      } else {
        // Browser não suporta Font Loading API
        setTimeout(() => setFontsLoaded(true), 500);
      }
    };

    checkFonts();
  }, []);

  useEffect(() => {
    // Pré-carrega o vídeo
    const video = document.createElement('video');
    video.src = '/videos/video-home.mp4';
    video.preload = 'auto';
    
    const handleCanPlay = () => {
      if (fontsLoaded) {
        // Pequeno delay para garantir que tudo está renderizado
        setTimeout(() => setIsReady(true), 100);
      }
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.load();

    // Se demorar muito, mostra de qualquer jeito
    const fallbackTimer = setTimeout(() => {
      setIsReady(true);
    }, 3000);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      clearTimeout(fallbackTimer);
    };
  }, [fontsLoaded]);

  // Fade in suave quando carregar
  const containerClass = isReady 
    ? "animate-in fade-in duration-300" 
    : "";

  if (!isReady) {
    return (
      <section className="relative w-full h-screen overflow-hidden bg-gray-900">
        {/* Skeleton do vídeo */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Conteúdo skeleton */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex-1 flex items-end">
            <div className="w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
              <div className="space-y-4">
                {/* Grid de título e setores */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
                  {/* Título */}
                  <div className="space-y-3">
                    <Skeleton className="h-12 md:h-16 w-full bg-gray-700/50" />
                    <Skeleton className="h-12 md:h-16 w-4/5 bg-gray-700/50" />
                  </div>
                  
                  {/* Setor animado */}
                  <div className="space-y-2">
                    <Skeleton className="h-8 w-20 bg-gray-700/50" />
                    <Skeleton className="h-16 md:h-20 w-3/4 bg-gray-700/50" />
                  </div>
                </div>

                {/* Linha divisória */}
                <div className="w-full space-y-1">
                  <div className="w-full h-px bg-white/20 mb-4" />
                  
                  {/* Subtítulo */}
                  <div className="space-y-2 max-w-[480px]">
                    <Skeleton className="h-4 w-full bg-gray-700/50" />
                    <Skeleton className="h-4 w-11/12 bg-gray-700/50" />
                    <Skeleton className="h-4 w-4/5 bg-gray-700/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barra inferior */}
          <div className="w-full">
            <div className="w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-6">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                {/* Logo carousel skeleton */}
                <div className="flex gap-4">
                  <Skeleton className="h-12 w-32 bg-gray-700/50" />
                  <Skeleton className="h-12 w-32 bg-gray-700/50 hidden md:block" />
                  <Skeleton className="h-12 w-32 bg-gray-700/50 hidden lg:block" />
                </div>
                
                {/* Contact widget skeleton */}
                <Skeleton className="h-12 w-48 bg-gray-700/50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <HeroVideo />;
}