"use client";
import Image from "next/image";
import logo from "../public/logo.svg";
import { useDrawer } from "./DrawerProvider";

export default function Navbar() {
  const { toggle } = useDrawer();
  return (
    <nav className="fixed h-16 w-dvw t-0 l-0 z-20 bg-neutral shadow-secondary shadow-sm flex items-center justify-end lg:justify-between">
      <Image
        src={logo}
        alt="My Logo"
        width={150}
        height={150}
        className="w-14 h-14"
      />
      <div
        onClick={toggle}
        className="w-7 ml-auto mr-2 flex flex-col gap-1.25 items-end lg:hidden"
      >
        <div className="h-0.75 bg-primary w-full"></div>
        <div className="h-0.75 bg-primary w-3/4"></div>
        <div className="h-0.75 bg-primary w-2/4"></div>
      </div>

      <div className="hidden lg:flex lg:gap-8 lg:mr-4">
        <a
          href="#about-me"
          className="block font-medium px-2 py-4 text-center text-lg transition-colors duration-200 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.2)]"
        >
          About me
        </a>
        <a
          href="#projects"
          className="block font-medium px-2 py-4 text-center text-lg transition-colors duration-200 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.2)]"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block font-medium px-2 py-4 text-center text-lg transition-colors duration-200 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.2)]"
        >
          Contact
        </a>
        <a
          target="_blank"
          href="/Melos Shabi Resume.pdf"
          className="block font-medium px-2 py-4 text-center text-lg transition-colors duration-200 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.2)]"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
