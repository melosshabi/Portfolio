import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import DrawerProvider from "@/components/DrawerProvider";
import Script from "next/script";

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
      <head>
        <Script
          src="https://api.pulse.velovix.com/viewsTracker.js"
          data-project-id="18e509ae-cb27-45af-b91d-b70029454d95"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full bg-neutral overflow-hidden">
        <DrawerProvider>{children}</DrawerProvider>
      </body>
    </html>
  );
}
