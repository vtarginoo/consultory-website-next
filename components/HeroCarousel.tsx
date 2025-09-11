'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { insightsData } from "@/data/insightData";

export default function HeroCarousel() {

  const sortedInsights = [...insightsData].sort((a, b) => b.date.getTime() - a.date.getTime());
  
  const recentInsights = sortedInsights.slice(0, 5);

    const heroSlides = recentInsights.map(insight => ({
    title: insight.shortTitle || insight.title,
    originalTitle: insight.title,
    subtitle: insight.description,
    imageSrc: insight.image,
    imageAlt: insight.title,
    link: insight.link,
  }));

  return (
    <section className="relative w-full text-left overflow-hidden">
      <div className="w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] overflow-hidden">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt || 'Hero Banner Image'}
                    fill
                    objectFit="cover"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  
                  <div className="absolute inset-0 z-10 px-4 md:px-8 lg:px-16 flex flex-col justify-end pb-8 md:pb-12">
                      <div className="text-white dark:text-gray-100 max-w-lg">
                        <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4 line-clamp-3 overflow-hidden">
                          {slide.title}
                        </h1>
                        <p className="text-xl font-light mb-6 line-clamp-3 overflow-hidden">
                          {slide.subtitle}
                        </p>
                        <div className="flex">
                          <Link href={slide.link}>
                            <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-200">
                              Leia Mais
                            </Button>
                          </Link>
                        </div>
                      </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 z-20" />
          <CarouselNext className="absolute right-4 z-20" />
        </Carousel>
      </div>
    </section>
  );
}