"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleMenuClick() {
    setMenuIsOpen((prev) => !prev);
  }
  return (
    <div className="p-7 flex justify-between bg-zinc-800/90 backdrop-blur-sm text-white fixed z-50 w-screen">
      <div>
        <Link href="/">
          <p className="font-bold text-xl">CHIHUI&apos;s Website</p>
        </Link>
      </div>

      <div>
        {/* 大螢幕 */}
        <ul className="font-semibold text-lg hidden sm:flex">
          <Link href="/aboutme">
            <li className="mr-16 hover:text-zinc-400 duration-300 ease-in-out">
              About Me
            </li>
          </Link>
          <Link href="/portfolio">
            <li className="mr-16 hover:text-zinc-400 duration-300 ease-in-out">
              Portfolio
            </li>
          </Link>
          <Link href="/contact">
            <li className="mr-5 hover:text-zinc-400 duration-300 ease-in-out">
              Contact
            </li>
          </Link>
        </ul>

        {/* 小螢幕 */}
        <div className="sm:hidden">
          <button onClick={handleMenuClick}>
            <Image
              src="./Hamburger Menu.svg"
              alt="hamburger menu icon on header"
              width={25}
              height={25}
            />
          </button>
        </div>
        {menuIsOpen && <ul className="sm:hidden absolute left-0 flex flex-col items-center w-full bg-zinc-900 text-lg mt-7">
          <Link href="/aboutme">
            <li className="border-b-2 border-white/40 w-screen text-center py-3">
              About Me
            </li>
          </Link>
          <Link href="/portfolio">
          <li className="border-b-2 border-white/40 w-screen text-center py-3">
              Portfolio
            </li>
          </Link>
          <Link href="/contact">
          <li className="w-screen text-center py-3">
              Contact
            </li>
          </Link>
        </ul>}
      </div>
    </div>
  );
}
