import EmailSection from "@/Components/EmailSection";
import Footer from "@/Components/Footer";

import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";

export default function Home() {




    return (
        <main className="flex min-h-screen flex-col bg-black">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <Skills />
    
    
         <Projects /> 
          <EmailSection />
        </div>
        <Footer />
      </main>
    )
  }