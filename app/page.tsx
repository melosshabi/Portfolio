import Project from "@/components/Project";
import quranvoc from "@/images/quranvoc.jpg";
import quranvocSite from "@/images/quranvoc-site.png";
import waypicker from "@/images/waypicker.png";
import buff from "@/images/buff-finder.png";
import buffApp from "@/images/buff-app.jpg";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="py-22">
      <main className="min-h-[50dvh] flex items-center justify-center">
        <div className="flex flex-col items-start px-8 gap-1 lg:w-140">
          <p className="text-primary font-semibold 2xl:text-3xl">Hi, I'm</p>
          <h1 className="text-5xl font-extrabold uppercase 2xl:text-6xl">
            Melos <br /> <span className="text-primary">Shabi</span>
          </h1>
          <p className="sm:w-3/5 lg:w-full 2xl:text-lg">
            I'm a <span className="text-primary">Full Stack Developer</span>{" "}
            specializing in Crafting Digital Experiences with Code. Specializing
            in high-performance architecture and immersive visual interfaces.
          </p>
        </div>
      </main>

      {/*About me*/}
      <section
        className="px-8 scroll-mt-18 md:w-3/4 lg:w-140 lg:m-auto 2xl:my-10"
        id="about-me"
      >
        <h2 className="text-2xl mb-2 font-semibold text-primary 2xl:text-4xl 2xl:mb-4 2xl:text-center">
          About Me
        </h2>
        <p className="2xl:text-lg 2xl:text-center">
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
      <section className="px-8 mt-20 scroll-mt-18" id="projects">
        <p className="text-primary font-semibold uppercase lg:w-140 lg:m-auto lg:px-8 xl:text-center">
          Selected Projects
        </p>
        <h2 className="uppercase mt-2 text-4xl font-bold lg:w-140 lg:m-auto lg:px-8 xl:text-center">
          Engineered <br />
          <span className="opacity-40">Experiences</span>
        </h2>
        <div className="mt-8 flex flex-col gap-12 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
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
          <Project
            image={buff}
            skills={[
              "Next.JS",
              "Tailwind CSS",
              "TypeScript",
              "Express",
              "ASP.NET Core",
              "WebSockets",
            ]}
            projectName="Buff Finder"
            projectDescription="A full-stack platform where local businesses post geo-tagged offers and customers discover and contact them in real time. Built with Next.js, TypeScript, Express, MongoDB, and WebSockets. Features include a real-time direct messaging system, dynamic offer feeds, and a clean business-facing dashboard for managing listings."
            status="Discontinued"
          />
          <Project
            image={buffApp}
            skills={[
              "React Native",
              "TypeScript",
              "WebSockets",
              "Reanimated",
              "ASP.NET Core",
            ]}
            projectName="Buff Finder (Mobile)"
            projectDescription="The React Native companion to the Buff Finder web platform, extending the same geo-tagged offers experience to iOS and Android. Integrated Google Maps for location-aware offer discovery and WebSockets for live messaging. Built with React Native, TypeScript, ASP.NET Core, and MongoDB."
            status="Discontinued"
          />
        </div>
      </section>
      {/*Contact*/}
      <section className="px-8 mt-24 scroll-mt-18" id="contact">
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
            className="bg-neutral-third p-4 flex justify-between items-center cursor-pointer transition-all duration-200 hover:bg-neutral-fourth lg:w-2/5 lg:m-auto"
          >
            <p className="font-medium text-lg">GitHub</p>
            <ArrowUpRight className="text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/melosshabi/"
            target="_blank"
            className="bg-neutral-third p-4 flex justify-between items-center cursor-pointer transition-all duration-200 hover:bg-neutral-fourth lg:w-2/5 lg:m-auto"
          >
            <p className="font-medium text-lg">LinkedIn</p>
            <ArrowUpRight className="text-primary" />
          </a>
        </div>
      </section>
    </div>
  );
}
