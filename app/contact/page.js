import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Contact() {
  return (
    <div className=" min-h-screen">
      <header>
        <Header />
      </header>
      <div className="fixed inset-0 -z-10 brightness-50">
        <Image
          src="./contact-bg.jpg"
          alt="background picture on contact page"
          fill
          className="object-cover"
        />
      </div>
      <div className="pt-32 pb-28">
        <div className="text-center mb-7">
          <span className="text-6xl bg-gradient-to-tl from-blue-200 to-gray-200 bg-clip-text text-transparent font-bold font-serif hover:from-sky-200 hover:to-blue-300 hover:bg-gradient-to-br hover:scale-105 inline-block">
            Contact Me !
          </span>
        </div>
        <div className="flex justify-center fadein-first relative">
          <Image
            src="./profile_5.jpg"
            alt="profile picture on contact page"
            width={350}
            height={350}
            className="transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out rounded-xl border peer"
          />
          <div className="border-4 border-white absolute w-[350px] h-[350px] -z-10 peer-hover:top-10 peer-hover:right-[510px] top-0 right-[545px] duration-500 ease-in-out rounded-xl"></div>
        </div>

        <div className="flex flex-col items-center mt-12">
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <Image
                src="./GitHub Logo.svg"
                alt="github small icon on contact page"
                width={40}
                height={40}
              />
              <a
                href="https://github.com/chihuichien"
                className="hover:underline text-gray-200 hover:text-gray-100 ml-3 text-lg"
              >
                https://github.com/chihuichien
              </a>
            </div>
            <div className="flex items-center">
              <Image
                src="./email.svg"
                alt="email icon on contact page"
                width={40}
                height={40}
              />
              <a
                href="mailto:a918672576@gmail.com"
                className="hover:underline text-gray-200 hover:text-gray-100 ml-3 text-lg"
              >
                a918672576@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-4">
            <a href="./resume.pdf" download>
              <button className="flex items-center bg-white px-5 py-2 rounded-lg hover:bg-zinc-200 hover:shadow-md ">
                <Image
                  src="./File Text.svg"
                  alt="resume icon on the button"
                  width={40}
                  height={40}
                />
                <p className="m-1">Resume</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
