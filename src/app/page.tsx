"use client"
import Intro from "@/pages/intro";
import { useActiveSectionContext } from "../context/active-section-context";
import Training from "@/components/training/trainingPage";


export default function Home() {
  const { activeSection } = useActiveSectionContext();

  return (
    <main className="flex flex-col items-center">
    {activeSection === "Home" && <Intro />}
    {activeSection === "Training" && <Training />}


  </main>
  
  );
}
