"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { SparklesIcon } from '@heroicons/react/24/solid'
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-indigo-900 text-center sm:text-left justify-self-start"
        >
          <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Samina",
                5000,
                "Web Developer",
                3000,
                "Mobile Developer",
                3000,
                
              ]}
              wrapper="span"
              speed={90}
              repeat={Infinity}
            />
          </h1>
          <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-lg sm:text-lg mb-6 lg:text-xl">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications.
          </p>
          

          
          <SparklesIcon className=" mr-[10px] h-5 w-5" />
          <Link
            href="www.saminamohammadrasheed@gmail.com"  className="Welcome-text font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[25px]">
            
            Hire Me
              
              </Link>
        
        
          
            <a
              href="/my.pdf"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-white mt-3"
            >
            
                Download CV
              
            </a>
        
        </motion.div>
         <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/hero.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;