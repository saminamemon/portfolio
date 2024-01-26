"use client"

import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
export default function EmailSection(){



  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 my-2">
          Let&apos;s Connect
        </h5>
        <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 max-w-md text-pink-800 text-justify">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
        <Link href= "https://github.com/saminamemon/"className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo className="bg-white"/>
                        <span className="text-[15px] ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Github</span>    
                    </Link>
          
          <Link href= "https://www.linkedin.com/in/saminarasheed/"className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo className="bg-white"/>
                        <span className="text-[15px] ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Linkedin</span>    
                    </Link>
        </div>
      </div>
      <div>
        
        
        
          <form className="flex flex-col" >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white shadow-lg border border-[#2A0E61] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="/saminamohammadrasheed@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-white placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white border border-white placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <Link href ='/www.saminamohammadrasheed@gmail.com'>
            <button
              type="submit"
              className="bg-white hover:bg-white text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-medium py-2.5 px-5 rounded-lg w-full"
            >
              
              Send Message
            </button></Link>
          </form>
        
      </div>
    </section>
  );
};

