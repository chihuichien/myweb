"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import scrollDownGif from "@/gifs/scroll_down.gif";
import { useState } from "react";

export default function About() {
  const profiles = [
    "./profile_1.JPG",
    "./profile_2.jpg",
    "./profile_3.jpg",
    "./profile_4.JPG",
  ];
  const [imageNum, setImageNum] = useState(0);

  function handleNextClick() {
    setImageNum((prevNum) => {
      if (prevNum >= profiles.length - 1) {
        return profiles.length - 1;
      } else {
        return (prevNum + 1) % profiles.length;
      }
    });
  }
  function handlePrevClick() {
    setImageNum((prevNum) => {
      if (prevNum <= 0) {
        return 0;
      } else {
        return (prevNum - 1) % profiles.length;
      }
    });
  }
  return (
    <div className="bg-gray-300">
      <header>
        <Header />
      </header>
      <div className="pt-32 pb-24 px-16 xs:px-6">
        <div>
          <div className="flex">
            <div className="w-1/2 flex flex-col items-center pr-16">
              <div className="relative">
                <p className="sm:text-3xl sm:pl-0 text-2xl pl-12 animate-slide-in shadow-text font-mono">
                  Hi ! I&apos;m{" "}
                </p>
                <div className="border-t-4 border-white absolute top-[60px] left-2 w-5/6"></div>
                <p className="text-6xl font-semibold animate-slide-in-name ml-16 mt-8 xs:ml-10 italic text-sky-800">
                  CHI-HUI, CHIEN
                </p>
                <div className="border-b-4 border-white absolute -bottom-[12px] -right-12 xs:-right-2 w-5/6"></div>
              </div>
              <div className="mt-12 px-14 sm:flex flex-col text-zinc-700 hidden">
                <p className="mb-5">
                  目前擔任軟體測試助理工程師，主要負責手動測試以及撰寫測試計畫，確保軟體功能的正確性與穩定性。在這段工作經歷中，我累積了對產品細節的高度敏感度，並培養了分析與解決問題的能力。
                </p>
                <p className="mb-5">
                  在工作過程中，我發現自己對前端開發充滿興趣，尤其對於設計直覺化且吸引人的使用者介面感到著迷。因此，我開始自學
                  HTML、CSS、JavaScript 和
                  React，並將這些技術運用到實際的專案中。透過參與新專案的前端切版工作，我進一步提升了自己的技能，也對前端開發的流程有了更深的理解。
                </p>
                <p className="mb-5">
                  我的性格細心，做事時非常注重細節，對於確保工作成果的精準與品質有高度要求。同時，我也樂於接受挑戰，願意不斷學習新的知識與技能，以完善自己在專業上的能力。
                </p>
                <p>
                  我希望能將目前累積的前端技能與測試經驗相結合，投入到前端工程師的職位中。不僅是完成工作，我更期待能參與創造出讓使用者感到驚喜的產品，並在這條職涯路上持續成長！
                </p>
              </div>
            </div>
            <div className="w-1/2 pt-20 xs:pt-12">
              <div className="flex justify-center items-center">
                <div className="-mr-3 z-10">
                  <button
                    onClick={handlePrevClick}
                    className="bg-gray-400/50 backdrop-blur-md hover:bg-stone-800/50 transition-colors duration-200 px-1 py-3 rounded-md"
                  >
                    <Image
                      src="./left_img.svg"
                      alt="left small icon to change image"
                      width={45}
                      height={45}
                    />
                  </button>
                </div>
                <Image
                  src={profiles[imageNum]}
                  alt="profile picture on about page"
                  width={450}
                  height={380}
                  layout="intrinsic"
                  className="transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out rounded-xl"
                />
                <div className="-ml-3 z-10">
                  <button
                    onClick={handleNextClick}
                    className="bg-gray-400/50 backdrop-blur-md hover:bg-stone-800/50 transition-colors duration-200 px-1 py-3 rounded-md"
                  >
                    <Image
                      src="./right_img.svg"
                      alt="right small icon to change image"
                      width={45}
                      height={45}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Image
              src={scrollDownGif}
              alt="scroll down gif on about me page"
              width={50}
            />
          </div>
          <div className="mt-12 px-14 flex flex-col text-zinc-700 sm:hidden">
                <p className="mb-5">
                  目前擔任軟體測試助理工程師，主要負責手動測試以及撰寫測試計畫，確保軟體功能的正確性與穩定性。在這段工作經歷中，我累積了對產品細節的高度敏感度，並培養了分析與解決問題的能力。
                </p>
                <p className="mb-5">
                  在工作過程中，我發現自己對前端開發充滿興趣，尤其對於設計直覺化且吸引人的使用者介面感到著迷。因此，我開始自學
                  HTML、CSS、JavaScript 和
                  React，並將這些技術運用到實際的專案中。透過參與新專案的前端切版工作，我進一步提升了自己的技能，也對前端開發的流程有了更深的理解。
                </p>
                <p className="mb-5">
                  我的性格細心，做事時非常注重細節，對於確保工作成果的精準與品質有高度要求。同時，我也樂於接受挑戰，願意不斷學習新的知識與技能，以完善自己在專業上的能力。
                </p>
                <p>
                  我希望能將目前累積的前端技能與測試經驗相結合，投入到前端工程師的職位中。不僅是完成工作，我更期待能參與創造出讓使用者感到驚喜的產品，並在這條職涯路上持續成長！
                </p>
              </div>
        </div>

        <div className="flex flex-col items-center mt-24">
          <div className="flex flex-col items-center w-full">
            <div className="mb-10">
              <p className="text-4xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
                EXPERIENCE
              </p>
            </div>
            <div className="flex flex-col items-center gap-9">
              <div className="w-full bg-zinc-200 sm:px-36 sm:py-16 px-10 py-10 rounded-xl hover:scale-105 hover:shadow-lg">
                <p className="text-xl font-semibold text-zinc-800">
                  TVBS 聯利媒體股份有限公司 - <br />軟體測試工程師助理
                </p>
                <p className="text-sm text-zinc-600">2023 - Present</p>
                <ul className="mt-3 text-sky-900 text-lg">
                  <li>--- 測試計畫、測試項目撰寫</li>
                  <li>--- 執行手動測試，確保功能符合產品需求</li>
                  <li>--- 參與 Regression 與 Sanity Testing</li>
                  <li>--- 前端相關：負責新專案前端切版工作</li>
                </ul>
              </div>
              <div className="w-1 h-[90px] bg-gray-500"></div>
              <div className="w-full bg-zinc-200 sm:px-36 sm:py-16 px-10 py-10 rounded-xl hover:scale-105 hover:shadow-lg">
                <p className="text-xl font-semibold text-zinc-800">
                  國立台灣大學 - 地理環境資源學系
                </p>
                <p className="text-sm text-zinc-600">2019 - 2023</p>
                <ul className="mt-3 text-sky-900 text-lg">
                  <li>--- 學士畢業</li>
                  <li>--- 擔任台大小海豚MV舞蹈社副社長</li>
                  <li>--- 接待國際學生</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="mb-10 mt-28">
              <p className="text-4xl font-bold bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-transparent">
                SKILLS
              </p>
            </div>
            <div className="flex gap-12 flex-col sm:flex-row">
              <div className="bg-neutral-500 text-neutral-100 px-10 py-9 w-64 rounded-lg hover:scale-110 hover:shadow-xl duration-300 ease-in-out group fadein-first">
                <Image src="./fe_icon.svg" alt="front-end icon on about me page" width={60} height={60} className="mx-auto mb-4" />
                <p className="text-center text-2xl font-semibold mb-4 group-hover:underline underline-offset-4">FRONT-END</p>
                <ul className="text-center text-lg text-gray-300 group-hover:text-gray-50">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>Git / GitHub</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="bg-neutral-500 text-neutral-100 px-10 py-9 w-64 rounded-lg hover:scale-110 hover:shadow-xl duration-300 ease-in-out group fadein-second">
                <Image src="./doc_icon.svg" alt="document icon on about me page" width={60} height={60} className="mx-auto mb-4" />
                <p className="text-center text-2xl font-semibold mb-4 group-hover:underline underline-offset-4">OFFICE TOOLS </p>
                <ul className="text-center text-lg text-gray-300 group-hover:text-gray-50">
                  <li>Word</li>
                  <li>Excel</li>
                  <li>PowerPoint</li>
                  <li>Google Docs</li>
                  <li>Google Sheets</li>
                  <li>Jira</li>
                  <li>Slack</li>
                </ul>
              </div>
              <div className="bg-neutral-500 text-neutral-100 px-10 py-9 w-64 rounded-lg hover:scale-110 hover:shadow-xl duration-300 ease-in-out group fadein-third">
                <Image src="./language.svg" alt="language icon on about me page" width={60} height={60} className="mx-auto mb-4" />
                <p className="text-center text-2xl font-semibold mb-4 group-hover:underline underline-offset-4">LANGUAGE</p>
                <ul className="text-center text-lg text-gray-300 group-hover:text-gray-50">
                  <li>Chinese</li>
                  <li>English</li>
                  <li>Korean</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
