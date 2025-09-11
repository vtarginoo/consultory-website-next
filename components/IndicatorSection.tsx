import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const indicators = [
  {
    value: "+2,0 BI",
    description: "economia acumulado"
  },
  {
    value: "+1,5 BI",
    description: "Liberação de Caixa"
  },
  {
    value: "+0,5 BI",
    description: "Geração de Receita"
  },
];

export default function IndicatorSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-16">
        {indicators.map((indicator, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* O número grande em arco-blue */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-inter text-arco-blue">
              {indicator.value}
            </h3>
            {/* A descrição menor em arco-blue-light */}
            <p className="text-xl sm:text-2xl font-light text-arco-blue-light mt-2">
              {indicator.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <Link href="/sobre-nos">
          <Button size="lg" className="bg-arco-blue text-white hover:bg-arco-blue-light">
            Conheça mais sobre nós
          </Button>
        </Link>
      </div>
    </section>
  );
}
