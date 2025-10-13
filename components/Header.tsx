'use client';


import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import MainNav from "./MainNav";
import HamburgerMenu from "./HamburguerMenu";
import { useState, useEffect } from 'react';

interface HeaderProps {
  isHomePage?: boolean;
}

export default function Header({ isHomePage = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Se não for home page, sempre tem fundo
  const isTransparent = isHomePage && !isScrolled;



  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800'
      }`}
    >
      <div className="mx-auto max-w-[80%] px-4 py-2 md:py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/logo-arco.avif"
            alt="Logo da Arco Consulting Partners"
            width={200}
            height={85}
            className={`object-contain max-h-20 md:max-h-24 lg:max-h-26 w-auto transition-all duration-300 ${
              isTransparent ? 'brightness-0 invert' : ''
            }`}
            priority
          />
        </div>

        {/* Menu Desktop: aparece a partir de 768px */}
        <div className="hidden md:flex">
          <MainNav isScrolled={!isTransparent} />
        </div>

        {/* Menu Mobile: aparece abaixo de 768px */}
        <div className="flex md:hidden">
          <HamburgerMenu isScrolled={!isTransparent} />
        </div>
      </div>
    </header>
  );
}