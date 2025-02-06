"use client";
import Image from "next/image";

export default function SideProject({ children, image, name, link }) {
  return (
    <div className="flex items-center gap-10 bg-zinc-300 py-10 px-10 w-[1200px] rounded-md border-2 border-zinc-400">
      <div className="overflow-hidden w-[800px]">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt={`${name} picture on portfolio page`}
            width={600}
            height={600}
            className="transform transition-transform hover:scale-110 rounded-md duration-500 ease-in-out"
          />
        </a>
      </div>
      <div>
        <p className="text-4xl font-semibold text-sky-950">{name}</p>
        <div className="h-[2px] bg-gradient-to-r from-cyan-700 via-sky-700 to-gray-800 my-3"></div>
        <p className="text-gray-700">{children}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="bg-sky-700 text-gray-200 hover:bg-sky-900 hover:shadow-lg hover:text-gray-50 duration-300 px-6 py-2 rounded-xl mt-4">
            Demo
          </button>
        </a>
      </div>
    </div>
  );
}
