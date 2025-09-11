
import Hero from "components/Hero";

import { insightsData } from "@/data/insightData";
import InsightsMural from "./InsightsMural";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <main>
        <Hero title={"Nossos Insights"} subtitle={"Nossas Percepções"} imageSrc={"/banners/banner-3.jpg"} />
        
      
           <InsightsMural insights={insightsData} /> 
      </main>
      
    </div>
  );
}
