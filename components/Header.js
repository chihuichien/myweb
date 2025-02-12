import Link from "next/link";

export default function Header() {
  return (
    <div className="p-7 flex justify-between bg-zinc-800/90 backdrop-blur-sm text-white fixed z-50 w-screen ">
      <div>
        <Link href="/"><p className="font-bold text-xl">CHIHUI&apos;s Website</p></Link>
      </div>
      <div>
        <ul className="font-semibold text-lg hidden sm:flex">
          <Link href="/aboutme">
            <li className="mr-16 hover:text-zinc-400 duration-300 ease-in-out">About Me</li>
          </Link>
          <Link href="/portfolio">
            <li className="mr-16 hover:text-zinc-400 duration-300 ease-in-out">Portfolio</li>
          </Link>
          <Link href="/contact">
            <li className="mr-5 hover:text-zinc-400 duration-300 ease-in-out">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
