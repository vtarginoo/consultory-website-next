"use client";

// Importe os componentes de navegação do Shadcn UI
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,


} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import SolutionsPanel from "./panels/SolutionsPanel";

export const navItems = [
  // {
  //   label: "Home",
  //   href: "/",
  //   isPanel: false,
  // },
  {
    label: "Insights",
    href: "/insights",
    isPanel: false,
    disabled: true,
  },
  {
    label: "Quem Somos",
    href: "/quem-somos",
    isPanel: false,
  },
  {
    label: "Contato",
    href: "/contato",
    isPanel: false,
  },
  // {
  //   label: "Soluções",
  //   href: "/solucoes",
  //   isPanel: true,
  //   component: <SolutionsPanel />,
  // },
  // {
  //   label: "Conheça Nossos Líderes",
  //   href: "/conhece-nossos-lideres",
  //   isPanel: false,
  // },
];


export default function MainNav({ isScrolled }: { isScrolled: boolean }) {
  const pathname = usePathname();

  const baseClasses = isScrolled ? "font-dm-sans-scrolled px-0" : "font-dm-sans px-0";
  const activeClasses = "text-arco-detail";
  const inactiveClasses = "text-arco-text hover:text-arco-detail";



  return (
    <nav className="flex items-center space-x-2 pr-4 sm:pr-8 md:pr-16 lg:pr-24">
      <NavigationMenu>
        <NavigationMenuList className="space-x-4">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              {item.isPanel ? (
                // Renderiza o item com NavigationMenuTrigger para o painel
                <NavigationMenuTrigger
                  className={`${baseClasses} ${pathname.startsWith(item.href) ? activeClasses : inactiveClasses
                    } data-[state=open]:text-arco-detail`}
                >
                  {item.label}
                </NavigationMenuTrigger>
              ) : (
                // Renderiza o item com NavigationMenuLink para links simples
                <NavigationMenuLink
                  href={item.href}
                  className={`
                    ${baseClasses}
                    ${pathname === item.href ? activeClasses : inactiveClasses}
                    ${item.disabled ? "pointer-events-none" : ""}
                  `}
                >
                  {item.label}
                </NavigationMenuLink>
              )}
              {/* {item.isPanel && (
                <NavigationMenuContent  className="z-[9999]" >{item.component}</NavigationMenuContent>
              )} */}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}