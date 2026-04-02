"use client";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  image: any;
  skills: string[];
  projectName: string;
  projectDescription: string;
  exploreUrl?: string;
  status?: string;
};
export default function Project({
  image,
  skills,
  projectName,
  projectDescription,
  exploreUrl,
  status,
}: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  return (
    <>
      <div className="bg-neutral-second rounded-lg pb-8 overflow-clip flex flex-col">
        <div
          className="relative w-full hidden md:block md:aspect-video cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={image}
            alt={projectName}
            fill
            quality={90}
            className="object-cover object-center md:object-top"
          />
        </div>
        <Image
          src={image}
          alt={projectName}
          quality={90}
          className="block md:hidden cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        />
        <div className="px-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-3 mt-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="uppercase p-2 rounded-full bg-neutral-third text-sm"
                >
                  <p>{skill}</p>
                </div>
              ))}
            </div>

            <h3 className="text-3xl mt-4 font-bold px-2">{projectName}</h3>
            <p className=" leading-7 mt-4 px-2">{projectDescription}</p>
          </div>
          {status && (
            <p className="text-sm mt-2 px-2 font-bold">Status: {status}</p>
          )}
          {exploreUrl && (
            <a
              target="_blank"
              href={exploreUrl}
              className="uppercase text-primary mt-5 flex text-base font-semibold tracking-widest items-center px-2 cursor-pointer transition-all duration-200 hover:drop-shadow-primary hover:drop-shadow-[0_0_10px_var(--color-primary)] "
            >
              Explore project
              <ArrowRight size={22} />
            </a>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 transition-opacity duration-300 ${
          lightboxOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setLightboxOpen(false)}
      >
        <button
          className="absolute top-4 right-4 text-white cursor-pointer"
          onClick={() => setLightboxOpen(false)}
        >
          <X size={32} />
        </button>
        <div
          className={`relative transition-transform duration-300 ${
            lightboxOpen ? "scale-100" : "scale-90"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image}
            alt={projectName}
            quality={90}
            className="max-h-[90dvh] max-w-[90dvw] w-auto h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
}
