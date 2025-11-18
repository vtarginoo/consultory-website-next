"use client";

import React from 'react';
import Image from 'next/image';
import styles from '../styles/ContactWidget.module.css';

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
  avatarUrl = "/avatar-image.avif",
  buttonText = "CONTATO",
  onContactClick
}: ContactWidgetProps) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      console.log("Abrir contato");
    }
  };

  return (
    <div className={styles.contactWidget}>
      <div className={styles.contactAdmin}>
        <div className={styles.contactAvatarWrapper}>
          <div className={styles.contactAvatar}>
            {!imageLoaded && (
              <div className={styles.contactAvatarSpinner}></div>
            )}
            <Image
              src={avatarUrl}
              alt={name}
              className={`${styles.contactAvatarImage} ${imageLoaded ? styles.loaded : ''}`}
              onLoad={() => setImageLoaded(true)}
              width={36}
              height={36}
              priority // Carrega imediatamente
              quality={100}
              unoptimized={avatarUrl.endsWith('.avif')} // Se já for AVIF otimizado
            />
          </div>
          <div className={styles.contactStatus}>
            <div className={styles.contactStatusDot}></div>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <p className={styles.contactName}>{name}</p>
          <p className={styles.contactStatusText}>{status}</p>
        </div>
      </div>

      {/* <button 
        className={styles.contactButton}
        onClick={handleClick}
      >
        {buttonText}
      </button> */}

      <a
        href="/contato"
        className={styles.contactButton}
      >
        {buttonText}
      </a>

    </div>
  );
}