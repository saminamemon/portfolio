import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link:string
}

const ProjectCard = ({ src, title, description,link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{title}</h1>
        <p className="mt-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{description}</p>
        <button><Link href={link}  className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Click here  for visit website</Link></button>
      </div>
    </div>
  );
};

export default ProjectCard;