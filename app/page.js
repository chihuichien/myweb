"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isHomeBtnClick, setIsHomeBtnClick] = useState(false);
  const router = useRouter();

  function handleHomeClick() {
    setIsHomeBtnClick(true);
    router.push("/aboutme");
  }
  return (
    <div className="relative h-screen">
      <header className="relative">
        <Header />
      </header>
      <div className="fixed inset-0 -z-10 brightness-50">
        <Image
          src="./jonathan-bean-sbZU1j31ggE-unsplash.jpg"
          alt="background picture on home page"
          fill
          className="object-cover"
        />
      </div>
      <div id="hp" className="flex flex-col items-center justify-center pt-72">
        <div
          id="hp-text"
          className="text-white italic flex flex-col items-center justify-center mb-8"
        >
          <p className="text-4xl">CHI HUI&apos;s Website</p>
          <p className="text-base">Welcome To My world!</p>
        </div>
        <div id="hp-btn">
          <a href="./resume.pdf" download>
            <Button>
              <Image
                src="./File Text.svg"
                alt="resume icon on the button"
                width={25}
                height={25}
              />
              <p className="m-1">Resume</p>
            </Button>
          </a>
        </div>
      </div>
      <div id="hp-bigbtn" className="flex justify-end mt-28">
        <button
          onClick={handleHomeClick}
          className="flex justify-center items-center italic rounded-l-xl bg-zinc-400/45 text-zinc-400 hover:bg-zinc-400/70 hover:text-zinc-200 px-32 py-8 text-2xl"
        >
          <p className="mr-5">Get to know me </p>
          <Image
            src="./Arrow Right white.svg"
            alt="arrow right icon on the button"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
}
