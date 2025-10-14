"use client"

import { clientsData } from "@/data/clientsData";
import { useEffect, useState } from "react";
import styles from '../styles/FloatingLogosWidget.module.css'



const clientsWithLogo = clientsData.filter(client => client.logoComum);

const FloatingLogo = ({ client, delay, duration, startX, moveX, rotate }) => {
  return (
    <div
      className={styles.floatingLogo}
      style={{
        left: `${startX}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        ['--move-x' as any]: `${moveX}px`,
        ['--rotate' as any]: `${rotate}deg`,
      }}
    >
      <div className={styles.logoCard}>
        <img 
          src={`/${client.logoComum}`} 
          alt={client.nome}
          className={styles.logoImage}
        />
      </div>
    </div>
  );
};

export default function FloatingLogosWidget() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    let logoId = 0;
    let lastUsedClient = null;

    // Função para gerar um único logo (sem repetir o último)
    const generateSingleLogo = () => {
      let randomClient;
      
      // Se há mais de um cliente disponível, evita repetir o último
      if (clientsWithLogo.length > 1) {
        do {
          randomClient = clientsWithLogo[Math.floor(Math.random() * clientsWithLogo.length)];
        } while (lastUsedClient && randomClient.nome === lastUsedClient.nome);
      } else {
        randomClient = clientsWithLogo[0];
      }
      
      lastUsedClient = randomClient;
      
      return {
        id: `logo-${logoId++}-${Date.now()}`,
        client: randomClient,
        delay: 0, // Sem delay inicial, começa imediatamente
        duration: 15 + Math.random() * 10,
        startX: Math.random() * 80 + 10,
        moveX: Math.random() * 100 - 50,
        rotate: Math.random() * 20 - 10,
      };
    };

    // Inicializa com vários logos distribuídos
    const initialLogos = [];
    for (let i = 0; i < 8; i++) {
      const logo = generateSingleLogo();
      // Distribui os logos iniciais ao longo da animação
      logo.delay = (i * 2.5); // Espaçamento de 2.5s entre cada logo
      initialLogos.push(logo);
    }
    setLogos(initialLogos);

    // Adiciona novos logos continuamente
    const interval = setInterval(() => {
      setLogos(prevLogos => {
        const newLogo = generateSingleLogo();
        
        // Remove logos antigos (mantém no máximo 12 logos na tela)
        const updatedLogos = prevLogos.length > 10 
          ? prevLogos.slice(1) 
          : prevLogos;
        
        return [...updatedLogos, newLogo];
      });
    }, 2500); // Adiciona um novo logo a cada 2.5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      {/* Grid de fundo sutil */}
      <div className={styles.gridBackground} />

      {/* Logos flutuantes */}
      {logos.map((logo) => (
        <FloatingLogo 
          key={logo.id} 
          client={logo.client} 
          delay={logo.delay} 
          duration={logo.duration} 
          startX={logo.startX}
          moveX={logo.moveX}
          rotate={logo.rotate}
        />
      ))}

      {/* Gradiente de fade no topo (opcional - remova se não quiser) */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />
    </div>
  );
}