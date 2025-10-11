
"use client";

import React from 'react';

export default function LogoCarousel() {
 
  const logos = [
    { name: "IRV", src: "https://framerusercontent.com/images/TH3stoh8NSzng8zzuMO0GYaZZgY.png" },
    { name: "Suzano", src: "https://framerusercontent.com/images/F6rin5be6QHW2S4Ojunxf9H9YI.png" },
    { name: "Lógum", src: "https://framerusercontent.com/images/WfnwJP2B0d341B6zgGnqajO48.png" },
    { name: "ArcelorMittal", src: "https://framerusercontent.com/images/dMf1303iV1oRDFqz0T9Zp3qTO9M.png" },
    { name: "Iguá", src: "https://framerusercontent.com/images/OoGDPAreYexEOMzYAwxVVzs8Y.png" },
    { name: "Veolia", src: "https://framerusercontent.com/images/xW5LLs1ScpD7DbcmsUHceLLMyw.png" },
    { name: "Ci Group", src: "https://framerusercontent.com/images/wC3wWQFs8eVNb2DcNIObx2wL30.png" },
    { name: "Rumo", src: "https://framerusercontent.com/images/bHsOsDlZ4ABUrQk0ytXH9VR6uLg.png" },
  ];
  
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-carousel-container">
      {/* Texto "Excelência Reconhecida" */}
      <span className="logo-carousel-title">
        Excelência Reconhecida:
      </span>

      {/* Container da esteira */}
      <div className="logo-carousel-wrapper">
        <ul className="logo-carousel-track">
          {repeatedLogos.map((logo, index) => (
            <li key={`${logo.name}-${index}`} className="logo-carousel-item">
              <img 
                src={logo.src} 
                alt={logo.name}
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
          gap: 30px;
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
          gap: 0px;
          margin: 0;
          padding: 0;
          list-style-type: none;
          animation: scroll-logos 10s linear infinite;
          will-change: transform;
        }

        .logo-carousel-track:hover {
          animation-play-state: paused;
        }

        .logo-carousel-item {
          flex-shrink: 0;
          opacity: 1;
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}