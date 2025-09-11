"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image"; // Importe o componente Image do Next.js
import { usePathname } from "next/navigation"; // Importe o hook usePathname
import { navItems } from "./MainNav"; // Importa a constante centralizada
import React from "react";

export default function HamburgerMenu({className}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (isOpen) {
      setActiveMenu("main");
    }
  };

  const currentPanel = navItems.find((item) => item.href === `/${activeMenu}`);

  return (
    <div className={className}>
      {/* Botão de abrir o menu */}
      <button onClick={toggleMenu} className="text-arco-blue text-4xl focus:outline-none">
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Conteúdo do menu lateral */}
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black z-50 overflow-y-auto 
                      md:inset-y-0 md:left-0 md:w-1/2 md:shadow-lg md:border-r md:border-gray-200 dark:md:border-gray-800">

          {/* Cabeçalho do menu */}
          <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
            <div className="container px-4 py-4 flex items-center justify-between">
              {activeMenu !== "main" && (
                <button
                  onClick={() => setActiveMenu("main")}
                  className="text-2xl text-arco-blue"
                >
                  <span className="mr-2">←</span>Voltar
                </button>
              )}
              <Image
                src="/logo-arco-header-200x85.png"
                alt="Logo da Arco Consulting Partners"
                width={200}
                height={85}
                className="mx-auto"
              />
              <button
                onClick={toggleMenu}
                className="text-2xl text-arco-blue"
              >
                <AiOutlineClose />
              </button>
            </div>
          </header>

          {/* Conteúdo das opções de navegação */}
          <div className="p-4">
            {activeMenu === "main" ? (
              <ul className="flex flex-col gap-6 text-xl">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.isPanel ? (
                      <button
                        onClick={() => setActiveMenu(item.href.replace("/", ""))}
                        className={`flex items-center  w-full font-heading font-bold ${
                          pathname.startsWith(item.href) ? 'text-arco-detail' : 'text-arco-text'
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="text-3xl ml-2 -translate-y-[6px]">→</span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`font-heading font-bold ${
                          pathname === item.href ? 'text-arco-detail' : 'text-arco-text'
                        }`}
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              currentPanel
              ? React.cloneElement(currentPanel.component, { onItemClick: toggleMenu }) 
              : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}