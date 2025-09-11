
import HeroCarousel from "components/HeroCarousel";
import SolutionsHighlight from "components/SolutionsHighlight";
import InsightsMural from "./insights/InsightsMural";
import { insightsData } from "@/data/insightData";
import IndicatorSection from "components/IndicatorSection";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      
      <main>
        
      <HeroCarousel/>

      <SolutionsHighlight/>

      <IndicatorSection/>
      
      </main>
    </div>
  );
}
