"use client";

import { clientsData } from '@/data/clientsData';
import React from 'react';
import Image from 'next/image';

export default function ClientsCarousel() {

  const logosBrancas = clientsData.filter(client => client.logoBranca);
  const repeatedLogos = [...logosBrancas, ...logosBrancas, ...logosBrancas];

    return (
    <div className="logo-carousel-container">
      {/* Texto "Excelência Reconhecida" */}
      <span className="logo-carousel-title">
        Excelência Reconhecida:
      </span>

      {/* Container da esteira */}
      <div className="logo-carousel-wrapper">
        <ul className="logo-carousel-track">
          {repeatedLogos.map((client, index) => (
            <li key={`${client.nome}-${index}`} className="logo-carousel-item">
              <Image 
              src={client.logoBranca} 
              alt={client.nome}
              width={150}   
              height={50}   
              className="logo-carousel-image"
              />
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .logo-carousel-container {
          backdrop-filter: blur(8px);
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          padding: 10px 30px;
          overflow: hidden;
          flex: 1;
          position: relative;
          will-change: transform;
        }

        .logo-carousel-title {
          font-family: "DM Sans", "DM Sans Placeholder", sans-serif;
          font-weight: 400;
          font-style: normal;
          font-size: 16px;
          line-height: 1.1em;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.7);
          
        }

        .logo-carousel-wrapper {
          flex: 1;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .logo-carousel-track {
          display: flex;
          flex-direction: row;
          gap: 5px;
          margin: 0;
          padding: 0;
          list-style-type: none;
          animation: scroll-logos 80s linear infinite;
          will-change: transform;
        }

        .logo-carousel-track:hover {
          animation-play-state: paused;
        }

        .logo-carousel-item {
          flex-shrink: 0;
          opacity: 1;
          width: clamp(60px, 8vw, 100px);
        }

        .logo-carousel-image {
          display: block;
          width: clamp(60px, 8vw, 100px);
          height: clamp(20px, 2.5vw, 32px);
          object-fit: contain;
          object-position: center;
          filter: grayscale(100%) brightness(0) invert(1) opacity(0.6);
          transition: filter 0.3s ease;
        }

        .logo-carousel-item:hover .logo-carousel-image {
          filter: grayscale(0%) brightness(1) invert(0) opacity(1);
        }

        @keyframes scroll-logos {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-1 * (100px + 5px) * 14));
          }
        }
      `}</style>
    </div>
  );
}