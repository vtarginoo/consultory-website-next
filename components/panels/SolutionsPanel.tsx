import Link from 'next/link';
import { MainNavListItem } from "../MainNavListItem";
import { solutionsCatalog } from '@/data/solutionsCatalog';



export default function SolutionsContent({ onItemClick }: { onItemClick?: () => void }) {
  

 return (
    <div className="grid gap-3 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-[2fr_2fr_1fr]">
      {/* Primeira Coluna */}
      <ul className="grid gap-3">
        <li className="row-span-3">
          {solutionsCatalog.slice(0, 4).map((component) => (
            <MainNavListItem
              key={component.title}
              title={component.title}
              href={component.href}
              onItemClick={onItemClick}
            >
              {component.description}
            </MainNavListItem>
          ))}
        </li>
      </ul>

      {/* Segunda Coluna */}
      <ul className="grid gap-3">
        <li className="row-span-3">
          {solutionsCatalog.slice(4).map((component) => (
            <MainNavListItem
              key={component.title}
              title={component.title}
              href={component.href}
              onItemClick={onItemClick}
            >
              {component.description}
            </MainNavListItem>
          ))}
        </li>
      </ul>
      
      
    </div>
  );
}