"use client";

import React from 'react';

interface ContactWidgetProps {
  name?: string;
  status?: string;
  avatarUrl?: string;
  buttonText?: string;
  onContactClick?: () => void;
}

export default function ContactWidget({
  name = "Alex",
  status = "Online",
  avatarUrl = "https://framerusercontent.com/images/bDvDgEaVy00w3X0ljBanayDVis.png",
  buttonText = "CONTATO",
  onContactClick
}: ContactWidgetProps) {
  
  const handleClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      // Comportamento padrão: abrir WhatsApp ou email
      console.log("Abrir contato");
    }
  };

  return (
    <div className="contact-widget">
      {/* Admin Info */}
      <div className="contact-admin">
        {/* Avatar com status */}
        <div className="contact-avatar-wrapper">
          <div className="contact-avatar">
            <img 
              src={avatarUrl} 
              alt={name}
              className="contact-avatar-image"
            />
          </div>
          {/* Status indicator */}
          <div className="contact-status">
            <div className="contact-status-dot"></div>
          </div>
        </div>

        {/* Name & Status */}
        <div className="contact-info">
          <p className="contact-name">{name}</p>
          <p className="contact-status-text">{status}</p>
        </div>
      </div>

      {/* Contact Button */}
      <button 
        className="contact-button"
        onClick={handleClick}
      >
        {buttonText}
      </button>

      <style jsx>{`
        .contact-widget {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: white;
          border-radius: 10px;
          padding: 8px 16px 8px 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }

        .contact-admin {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-avatar-wrapper {
          position: relative;
          width: 36px;
          height: 36px;
        }

        .contact-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #f0f0f0;
        }

        .contact-avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .contact-status {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 12px;
          height: 12px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
        }

        .contact-status-dot {
          width: 8px;
          height: 8px;
          background-color: #22c55e;
          border-radius: 50%;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-name {
          font-family: "DM Sans", "DM Sans Placeholder", sans-serif;
          font-weight: 600;
          font-size: 13px;
          line-height: 1.1em;
          letter-spacing: 0.04em;
          color: rgba(34, 34, 34, 1);
          margin: 0;
        }

        .contact-status-text {
          font-family: "DM Sans", "DM Sans Placeholder", sans-serif;
          font-weight: 400;
          font-size: 11px;
          line-height: 1.2em;
          color: rgba(34, 34, 34, 0.8);
          margin: 0;
        }

        .contact-button {
          background-color: rgb(206, 156, 93);
          color: white;
          border: none;
          border-radius: 100px;
          padding: 10px 24px;
          font-family: "DM Sans", "DM Sans Placeholder", sans-serif;
          font-weight: 600;
          font-size: 13px;
          line-height: 1.1em;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .contact-button:hover {
          background-color: rgb(34, 34, 34);
          transform: scale(1.02);
        }

        .contact-button:active {
          transform: scale(0.98);
        }

        /* Responsivo */
        @media (max-width: 640px) {
          .contact-info {
            display: none;
          }
          
          .contact-widget {
            gap: 8px;
            padding: 8px;
          }
        }
      `}</style>
    </div>
  );
}