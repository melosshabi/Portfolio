import Project from "@/components/Project";
import quranvoc from "@/images/quranvoc.jpg";
import quranvocSite from "@/images/quranvoc-site.png";
import waypicker from "@/images/waypicker.png";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="py-22">
      <main className="min-h-[50dvh] flex items-center justify-center">
        <div className="flex flex-col items-start px-8 gap-1">
          <p className="text-primary font-semibold">Hi, I'm</p>
          <h1 className="text-5xl font-extrabold uppercase">
            Melos <br /> <span className="text-primary">Shabi</span>
          </h1>
          <p>
            I'm a <span className="text-primary">Full Stack Developer</span>{" "}
            specializing in Crafting Digital Experiences with Code. Specializing
            in high-performance architecture and immersive visual interfaces.
          </p>
        </div>
      </main>

      {/*About me*/}
      <section className="px-8">
        <h2 className="text-2xl mb-2 font-semibold text-primary">About Me</h2>
        <p>
          I’m a full-stack developer passionate about creating websites and apps
          that are not only visually appealing but also intuitive and
          user-friendly. With expertise in modern front-end technologies like
          <span className="text-primary font-medium"> React</span> and{" "}
          <span className="text-primary font-medium"> React Native</span>, and
          back-end frameworks such as{" "}
          <span className="text-primary font-medium"> Express</span>,{" "}
          <span className="text-primary font-medium"> Next.js</span> and{" "}
          <span className="text-primary font-medium">ASP.NET Core</span>, I
          build responsive, interactive experiences that work seamlessly across
          all devices. I’m always eager to learn and take on new challenges to
          expand my skill set.
        </p>
      </section>

      {/*Projects*/}
      <section className="px-8 mt-20">
        <p className="text-primary font-semibold uppercase">
          Selected Projects
        </p>
        <h2 className="uppercase mt-2 text-4xl font-bold">
          Engineered <br /> <span className="opacity-40">Experiences.</span>
        </h2>
        <div className="mt-8 flex flex-col gap-12">
          <Project
            image={quranvoc}
            skills={[
              "React Native",
              "TypeScript",
              "C#",
              "ASP.NET Core",
              "Python",
              "MongoDB",
            ]}
            projectName="QuranVoc"
            projectDescription="Freelanced the development of QuranVoc, a cross-platform mobile app helping Muslims understand the Qur'an through data-driven vocabulary learning. Focuses on high-frequency words to maximize comprehension, with features like spaced repetition, Surah reading mode, coverage tracking, and support for 27 languages. Built with React Native."
            exploreUrl="https://play.google.com/store/apps/details?id=com.quranvoc&pcampaignid=web_share"
          />
          <Project
            image={quranvocSite}
            skills={["React", "Tailwind", "TypeScript"]}
            projectName="QuranVoc Website"
            projectDescription="Landing page for a Qur'anic vocabulary learning app. Built with React, TypeScript, and Tailwind CSS. Features scroll animations, device-aware download flows, deep linking, and a clean dark/gold UI. Part of the QuranVoc App Project."
            exploreUrl="https://www.quranvoc.com"
          />
          <Project
            image={waypicker}
            skills={["C", "GTK"]}
            projectName="WayPicker"
            projectDescription="Developed a native color picker application for Wayland desktop environments using GTK and C. This tool addresses the compatibility gap for color selection utilities in modern Linux desktop environments that use the Wayland display protocol."
            exploreUrl="https://github.com/melosshabi/wayland-color-picker"
          />
        </div>
      </section>

      <section className="px-8 mt-24">
        <h2 className="uppercase mt-2 text-3xl font-bold text-center">
          Let's Collaborate
        </h2>
        <a
          href="mailto:melosshabi@protonmail.com"
          className="text-primary text-center mt-6 block font-medium text-lg hover:underline"
        >
          melosshabi@protonmail.com
        </a>

        <div className="mt-8 flex flex-col gap-4">
          <a
            href="https://www.github.com/melosshabi"
            target="_blank"
            className="bg-neutral-third p-4 flex justify-between items-center cursor-pointer transition-all duration-200 hover:bg-neutral-fourth "
          >
            <p className="font-medium text-lg">GitHub</p>
            <ArrowUpRight className="text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/melosshabi/"
            target="_blank"
            className="bg-neutral-third p-4 flex justify-between items-center cursor-pointer transition-all duration-200 hover:bg-neutral-fourth "
          >
            <p className="font-medium text-lg">LinkedIn</p>
            <ArrowUpRight className="text-primary" />
          </a>
        </div>
      </section>
    </div>
  );
}
