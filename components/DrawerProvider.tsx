"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { X } from "lucide-react";

type TDrawerContext = {
  isOpen: boolean;
  toggle: () => void;
};

const DrawerContext = createContext<TDrawerContext>({
  isOpen: false,
  toggle: () => {},
});

export default function DrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <DrawerContext.Provider value={{ isOpen, toggle }}>
      <Navbar />
      <div
        onClick={toggle}
        className={`fixed top-0 left-0 min-h-dvh min-w-dvw z-30 bg-[rgba(0,0,0,0.6)] transition-all duration-200 ${!isOpen ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`}
      ></div>
      <div
        className={`fixed top-0 right-0 min-h-dvh w-3/4 flex items-center bg-neutral z-40 transition-transform duration-200 ${isOpen ? "translate-x-0" : "translate-x-full"} sm:w-2/4`}
      >
        <button
          onClick={toggle}
          className="absolute top-2 left-2 p-1 rounded-full transition-colors duration-200 active:bg-[rgba(255,255,255,.2)]"
        >
          <X size={40} />
        </button>
        <div className="w-full">
          <a
            onClick={toggle}
            href="#about-me"
            className="block font-medium px-2 py-4 text-center text-lg transition-colors duration-200 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.2)]"
          >
            About me
          </a>
          <a
            onClick={toggle}
            href="#projects"
            className="block font-medium px-2 py-4 text-center text-lg transition-colors duration-200 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.2)]"
          >
            Projects
          </a>
          <a
            onClick={toggle}
            href="#contact"
            className="block font-medium px-2 py-4 text-center text-lg transition-colors duration-200 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.2)]"
          >
            Contact
          </a>
          <a
            target="_blank"
            onClick={toggle}
            href="/Melos Shabi Resume.pdf"
            className="block font-medium px-2 py-4 text-center text-lg transition-colors duration-200 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.2)]"
          >
            Resume
          </a>
        </div>
      </div>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  return useContext(DrawerContext);
}
