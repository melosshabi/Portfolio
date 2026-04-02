import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
  return (
    <div className="bg-neutral-second rounded-lg pb-8 overflow-clip flex flex-col">
      <div className="relative w-full hidden md:block md:aspect-video">
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
        className="block md:hidden "
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
  );
}
