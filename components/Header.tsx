import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import MainNav from "./MainNav";
import HamburgerMenu from "./HamburguerMenu";


export default function Header() {
  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="mx-auto max-w-[80%] px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo-arco-header-200x85.png"
            alt="Logo da Arco Consulting Partners"
            width={200}
            height={85}
            className="object-contain"
          />
        </div>

        {/* Menu Desktop: aparece a partir de 768px */}
        <div className="hidden md:flex">
          <MainNav />
        </div>

        {/* Menu Mobile: aparece abaixo de 768px */}
        <div className="flex md:hidden">
          <HamburgerMenu className="" />
        </div>
      </div>
    </header>
  );
}




