"use client"

import { clientsData } from "@/data/clientsData";
import { useEffect, useState, useRef } from "react";
import styles from '../styles/FloatingLogosWidget.module.css'
import FloatingLogo from "./FloatingLogo";


const clientsWithLogo = clientsData.filter(client => client.logoComum);



export default function FloatingLogosWidget() {
  const [logos, setLogos] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const logosRef = useRef([]);
  useEffect(() => {
    logosRef.current = logos;
  }, [logos]);

  // Rotação circular para cada zona
  const zoneRotationRef = useRef({
    0: { sequence: [], currentIndex: 0 }, // esquerda
    1: { sequence: [], currentIndex: 0 }, // centro
    2: { sequence: [], currentIndex: 0 }  // direita
  });

  const currentZoneRef = useRef(0);
  const logoIdRef = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Define as zonas (esquerda, centro, direita)
    const zones = [
      { min: 5, max: 25 },    // Esquerda
      { min: 40, max: 60 },   // Centro
      { min: 75, max: 95 }    // Direita
    ];

    // Função para embaralhar um array (Fisher-Yates shuffle)
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Inicializa a sequência de uma zona se ainda não existir
    const initializeZoneSequence = (zoneIndex) => {
      if (zoneRotationRef.current[zoneIndex].sequence.length === 0) {
        // Cria uma sequência embaralhada de todos os clientes
        zoneRotationRef.current[zoneIndex].sequence = shuffleArray([...clientsWithLogo]);
        zoneRotationRef.current[zoneIndex].currentIndex = 0;
      }
    };

    // Função para selecionar o próximo cliente na rotação da zona
    const getNextClientForZone = (zoneIndex) => {
      initializeZoneSequence(zoneIndex);
      const zoneData = zoneRotationRef.current[zoneIndex];
      const selectedClient = zoneData.sequence[zoneData.currentIndex];
      zoneData.currentIndex = (zoneData.currentIndex + 1) % zoneData.sequence.length;
      if (zoneData.currentIndex === 0) {
        zoneData.sequence = shuffleArray([...clientsWithLogo]);
      }
      return selectedClient;
    };

    const generateSingleLogo = () => {
      let randomClient;
      let startX;
      let zoneIndex;
      const minDistance = 10; // distância mínima entre logos

      if (isMobile) {
        startX = Math.random() * 70 + 15;
        randomClient = getNextClientForZone(0);
      } else {
        zoneIndex = currentZoneRef.current;
        const zone = zones[zoneIndex];
        startX = Math.random() * (zone.max - zone.min) + zone.min;
        randomClient = getNextClientForZone(zoneIndex);
        currentZoneRef.current = (currentZoneRef.current + 1) % zones.length;
      }

      // Evita que o logo nasça muito próximo de outro
      const maxAttempts = 10;
      let attempts = 0;
      while (logosRef.current.some(l => Math.abs(l.startX - startX) < minDistance) && attempts < maxAttempts) {
        startX = Math.random() * (isMobile ? 70 : (zones[zoneIndex].max - zones[zoneIndex].min)) + (isMobile ? 15 : zones[zoneIndex].min);
        attempts++;
      }

      // Evita startX muito próximo do último logo
      const lastLogo = logosRef.current[logosRef.current.length - 1];
      if (lastLogo && Math.abs(startX - lastLogo.startX) < 10) {
        startX = (startX + 15) % 100; // desloca um pouco
      }

      return {
        id: `logo-${logoIdRef.current++}-${Date.now()}`,
        client: randomClient,
        delay: 0,
        duration: 15 + Math.random() * 10,
        startX,
        moveX: Math.random() * 30 - 15,
        rotate: Math.random() * 15 - 7.5,
        scale: 0.95 + Math.random() * 0.2,
      };
    };

    // Inicializa com logos distribuídos
    const initialLogos = [];
    const initialCount = isMobile ? 5 : 9;

    for (let i = 0; i < initialCount; i++) {
      const logo = generateSingleLogo();
      logo.delay = (i * 2.5);
      initialLogos.push(logo);
    }
    setLogos(initialLogos);

    // Adiciona novos logos continuamente
    const interval = setInterval(() => {
      setLogos(prevLogos => {
        const newLogo = generateSingleLogo();
        newLogo.delay = Math.random() * 3; // espaçamento aleatório entre 0 e 3s
        const maxLogos = isMobile ? 8 : 12;

        const updatedLogos = prevLogos.length > maxLogos
          ? prevLogos.slice(1)
          : prevLogos;

        return [...updatedLogos, newLogo];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // atualiza posição final (quando soltar após drag)
  const handleUpdatePosition = (id, { pinned, pinnedLeftPercent, pinnedTopPx }) => {
    setLogos(prev => prev.map(l => l.id === id ? { ...l, pinned: !!pinned, pinnedLeftPercent, pinnedTopPx } : l));
  };

  return (
    <div ref={containerRef} className="relative h-[140px] md:h-[180px] w-full overflow-hidden">
      {/* Grid de fundo sutil */}
      <div className={styles.gridBackground} />

      {/* Logos flutuantes */}
      {logos.map((logo) => (
        <FloatingLogo
          key={logo.id}
          logo={logo}
        />
      ))}

      {/* Gradiente de fade no topo */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />
    </div>
  );
}