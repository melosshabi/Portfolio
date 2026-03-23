import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Props = {
  image: any;
  skills: string[];
  projectName: string;
  projectDescription: string;
  exploreUrl?: string;
};
export default function Project({
  image,
  skills,
  projectName,
  projectDescription,
  exploreUrl,
}: Props) {
  return (
    <div className="bg-neutral-second rounded-lg overflow-clip pb-8">
      <Image src={image} alt={projectName} />
      <div className="px-4">
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
        {exploreUrl && (
          <a
            target="_blank"
            href={exploreUrl}
            className="uppercase text-primary flex text-base font-semibold mt-5 tracking-widest items-center px-2 cursor-pointer transition-all duration-200 hover:drop-shadow-primary hover:drop-shadow-[0_0_10px_var(--color-primary)]"
          >
            Explore project
            <ArrowRight size={22} />
          </a>
        )}
      </div>
    </div>
  );
}
