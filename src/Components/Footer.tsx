"use client"

import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Community</div>
                    <Link href="https://www.youtube.com/channel/UCQPttxmTPnzshIfkQsW1z1g" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />

                       
                        <span className="text-[15px] ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Youtube</span>    
                  
                    </Link>
                    <Link href= "https://github.com/saminamemon/"className="flex flex-row items-center my-[15px] cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Github</span>    
                    </Link>
                    
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Instagram</span>    
                    </p>
                    <Link href= "https://www.linkedin.com/in/saminarasheed/"className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Github</span>    
                    </Link>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">www.saminamohammadrasheed@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                &copy; Made by SaminMemon All rights reserved
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer