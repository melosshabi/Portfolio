import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DrawerProvider from "@/components/DrawerProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Melos Shabi",
  description: "Melos Shabi's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased text-white overflow-x-hidden scroll-smooth`}
    >
      <body className="min-h-full bg-neutral overflow-hidden">
        <DrawerProvider>{children}</DrawerProvider>
      </body>
    </html>
  );
}
