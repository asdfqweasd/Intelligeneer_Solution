"use client"
import Intro from "@/pages/intro";
import { useActiveSectionContext } from "../context/active-section-context";
import Training from "@/components/training/trainingPage";
import Contact from "@/components/contact";
import AdapayTraining from "@/components/training/adaPay";


export default function Home() {
  const { activeSection } = useActiveSectionContext();

  return (
    <main className="flex flex-col items-center">
    {activeSection === "Home" && <Intro />}
    {activeSection === "Pospal" && <Training />}
    {activeSection === "Contact" && <Contact />}
    {activeSection === "AdaPay" && <AdapayTraining />}
  </main>
  
  );
}
