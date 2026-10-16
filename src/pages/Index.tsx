import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";
import Services from "@/components/Services";
import type { ProjectType } from "@/lib/project-types";

const Index = () => {
  const [projectType, setProjectType] = useState<ProjectType>("Autre");
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services onSelectProject={setProjectType} />
      <Work />
      <Contact projectType={projectType} onProjectTypeChange={setProjectType} />
      <Footer />
    </main>
  );
};

export default Index;
