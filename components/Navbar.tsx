import Image from "next/image";
import logo from "../public/logo.svg";

export default function Navbar() {
  return (
    <nav className="fixed h-16 w-full t-0 l-0 z-20 bg-neutral shadow-secondary shadow-sm flex items-center justify-end">
      <Image
        src={logo}
        alt="My Logo"
        width={150}
        height={150}
        className="w-14 h-14"
      />
      <div className="w-7 ml-auto mr-2 flex flex-col gap-1 items-end">
        <div className="h-1 bg-primary w-full"></div>
        <div className="h-1 bg-primary w-3/4"></div>
        <div className="h-1 bg-primary w-2/4"></div>
      </div>
    </nav>
  );
}
