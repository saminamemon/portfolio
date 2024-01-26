import React from "react";
import  ProjectCard  from "@/app/projectCard"

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Capture.png"
          title="Modern Next.js Portfolio"
          description="Crafting a portfolio website to showcase my work and expertise"
          link=""
        />
        <ProjectCard
          src="/panaverse.png"
          title="Interactive Panaverse Website"
          description=
          "Build website with Next.js, Chakra UI, and Tailwind CSS for the Presidential Initiative for Artificial Intelligence & Computing (PIAIC)."
      link="/https://vercel.com/saminamemon/panaversewebsite"
        />
        <ProjectCard
          src="/hospital.png"
          title="Hospital Website"
          description="Created a versatile hospital ERP utilizing the Gemini API for symptom checking, an e-commerce platform for prescription refills, and enabling online appointments for seamless accessibility."
          link="https://vercel.com/saminamemon/hackathon-assignment"
        />
      </div>
    </div>
  );
};

export default Projects;
