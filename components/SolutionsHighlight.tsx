import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { solutionsCatalog } from '../data/solutionsCatalog';


export default function SolutionsHighlight() {
    const selectedIndexes = [5, 4, 2, 1];

    
    const featuredSolutions = selectedIndexes.map(index => solutionsCatalog[index]);

    return ( 
        <section className="bg-arco-blue text-white min-h-[400px] py-16 px-4 md:px-8 lg:px-16 flex flex-col justify-center">
            
            {/* Contêiner principal para alinhamento e largura máxima */}
            <div className="max-w-5xl mx-auto w-full"> 
                
                {/* Contêiner do texto - agora alinhado pela div pai */}
                <div className="mb-12 text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-bold leading-tight">
                        Exceder as expectativas é o que nos diferencia no mercado. Combinamos nossas experiências globais à nossa profunda expertise local para desenvolver planos personalizados e agregar valor aos negócios.
                    </h2>
                </div>
                
                {/* Contêiner dos cards - alinhado pela div pai */}
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    {featuredSolutions.map((solution, index) => (
                        <Link key={index} href={solution.href} className="w-full md:w-1/3">
                            <Card className="bg-transparent border-0 shadow-none">
                                <CardContent className="p-0 flex flex-col items-start space-y-4">
                                    <div className="p-2 rounded-full bg-arco-blue-light">
                                        <ArrowRight className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl text-white">{solution.title}</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}