
import HeroCarousel from "components/HeroCarousel";
import SolutionsHighlight from "components/SolutionsHighlight";
import InsightsMural from "./insights/InsightsMural";
import { insightsData } from "@/data/insightData";
import IndicatorSection from "components/IndicatorSection";
import HeroVideo from "components/HeroVideo";

export default function Page() {

  const subtitle = "Um modelo inovador de consultoria, focado na otimização da cadeia de valor e geração de resultados por meio de Procurement e Supply Chain."

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      
      <main>
        
      {/* <HeroCarousel/> */}

      <HeroVideo /> 

      <SolutionsHighlight/>

      <IndicatorSection/>
      
      </main>
    </div>
  );
}
