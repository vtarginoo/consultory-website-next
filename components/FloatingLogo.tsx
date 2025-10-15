"use client"

import { useEffect, useState, useRef } from "react";
import styles from '../styles/FloatingLogosWidget.module.css'



interface FloatingLogoProps {
  logo: {
    client: {
      nome: string;
      logoComum: string;
    };
    startX: number;
    moveX: number;
    rotate: number;
    delay: number;
    duration: number;
    scale?: number;
  };
}




export default function FloatingLogo({ logo }: FloatingLogoProps) {
  const { client, startX, moveX, rotate, delay, duration, scale } = logo;
  const elRef = useRef<HTMLDivElement | null>(null);

  const transformScale = scale ? { transform: `scale(${scale})` } : {};

   return (
    <div
      ref={elRef}
      className={styles.floatingLogo}
      style={{
        left: `${startX}%`,
        bottom: '-80px',
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        ...transformScale,
        ['--move-x' as any]: `${moveX}px`,
        ['--rotate' as any]: `${rotate}deg`,
      }}
    >
      <div 
        className={styles.logoCard}
        style={{ 
          cursor: 'default',
          userSelect: 'none',
        }}
      >
        <img
          src={`/${client.logoComum}`}
          alt={client.nome}
          className={styles.logoImage}
          draggable={false}
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
}