"use client"

import { clientsData } from "@/data/clientsData";
import { useEffect, useState, useRef } from "react";
import styles from '../styles/FloatingLogosWidget.module.css'
import  FloatingLogoRow from "./FloatingLogoRow";


const clientsWithLogo = clientsData.filter(client => client.logoComum);



export default function FloatingLogosWidget() {
  const [rows, setRows] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Define quantos logos por linha baseado no tamanho da tela
    const logosPerRow = isMobile ? 3 : 5;
    const clientsWithLogo = clientsData.filter(client => client.logoComum);
    
    // Calcula quantas linhas completas podemos fazer
    const totalRows = Math.floor(clientsWithLogo.length / logosPerRow);
    
    // Cria as linhas com logos diferentes
    const createdRows = [];
    for (let i = 0; i < totalRows; i++) {
      const startIdx = i * logosPerRow;
      const rowClients = clientsWithLogo.slice(startIdx, startIdx + logosPerRow);
      createdRows.push({
        id: i,
        clients: rowClients,
      });
    }
    
    setRows(createdRows);
  }, [isMobile]); // Adiciona isMobile como dependência

  return (
    <div 
      style={{
        position: 'relative',
        height: isMobile ? '300px' : '380px',
        width: '100%',
        overflow: 'hidden',
        background: '#ffffff'
      }}
    >
      {/* Container da esteira vertical */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          animation: 'scrollUpRows 12s linear infinite',
        }}
      >
        {/* Triplicamos as linhas para o loop infinito */}
        {[...rows, ...rows, ...rows].map((row, idx) => (
          <FloatingLogoRow key={idx} clients={row.clients} />
        ))}
      </div>

      {/* Gradiente de fade no topo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8), transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Gradiente de fade embaixo */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8), transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <style>{`
        @keyframes scrollUpRows {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}