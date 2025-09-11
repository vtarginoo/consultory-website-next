import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import MainNav from "./MainNav";
import HamburgerMenu from "./HamburguerMenu";



export default function Header() {
  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container px-4 py-4 flex justify items-center gap-24">
        <div className="flex items-center">
          <HamburgerMenu className="mr-6"/>
          <Image
            src="/logo-arco-header-200x85.png"
            alt="Logo da Arco Consulting Partners"
            width={200}
            height={85}
          />
        </div>
        <div className="hidden md:flex">
          <MainNav />
        </div>
      </div>
    </header>
  );
}
