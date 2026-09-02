"use client";

import SectionHeader from "@/components/ui/section-header";
import TechStack from "@/features/about-me/components/tech-stack";
import DoubleLineBorder from "@/components/ui/double-line-border";
import PortfolioHeader from "@/features/name-header/components/portfolio-header";
import {
  CSSIcon,
  GithubIcon,
  HTMLWeb3Icon,
  NextJSIcon,
  SupabaseIcon,
  TailwindCSSIcon,
  TypescriptIcon,
  VercelIcon,
  VSCodeIcon,
} from "@/lib/icons";
import { Commit } from "@/features/name-header/types/user";
import Footer from "@/components/layout/footer";
import Browser from "@/features/about-me/components/browser";
import MyWorkItem from "@/features/my-works/components/my-work-item";
import ContactMeForm from "@/features/contact-me/components/contact-me-form";

const firstProjectIcons = [
  {
    icon: <TypescriptIcon className="w-full max-w-[51px] h-auto" />,
    link: "https://www.typescriptlang.org",
  },
  {
    icon: <TailwindCSSIcon className="w-full max-w-[136px] h-auto" />,
    link: "https://www.tailwindcss.com",
  },
  {
    icon: <SupabaseIcon className="w-full max-w-[122px] h-auto" />,
    link: "https://www.supabase.com",
  },
  {
    icon: <HTMLWeb3Icon className="w-[40px] max-w-[115px] h-auto" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <CSSIcon className="w-full max-w-[51px] h-auto" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <NextJSIcon className="w-full max-w-[107px] h-auto" />,
    link: "https://www.nextjs.org",
  },
  {
    icon: <VercelIcon className="w-full max-w-[113px] h-auto" />,
    link: "https://www.vercel.com",
  },
  {
    icon: <VSCodeIcon className="w-full max-w-[48px] h-auto" />,
    link: "https://code.visualstudio.com",
  },
];

export default function MainPortfolioPage({commits}: {commits: Commit | null}) {
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden overflow-y-auto">
      <div className="grid grid-cols-[0px_1fr_0px] md:grid-cols-[50px_1fr_50px] lg:grid-cols-[150px_1fr_150px] 2xl:grid-cols-[17.5%_1fr_17.5%] w-full h-full">
        <div />

        {/* Content goes here */}
        <div className="flex flex-col w-full h-full border-x border-(--color-line) min-w-0">
          {/* header */}
          <PortfolioHeader commits={commits} />

          {/* Separation-1 */}
          <div className="flex relative w-full h-80 justify-end">
            <DoubleLineBorder className="bottom-0" />
          </div>

          {/* My works */}
          <div className="flex relative flex-col w-full h-fit">
            <SectionHeader
              title="My works"
              subtitle="My dynamic, ever-changing list of projects and works"
              id="my-works"
            />

            <MyWorkItem
              title="Money Tracker"
              description="A web application that monitors your monthly finances by recording your transactions and analyzing inflows and outflows"
              image="/first-project.png"
              techStack={firstProjectIcons}
              isDemoButtonDisabled={false}
              demoButtonLink={"https://money-tracker-ct9a.onrender.com/"}
              githubButtonLink="https://github.com/danskyvich/money-tracker"
              tag1="Fullstack"
              tag2="UI/UX"
              tag3="Render"
            />

            <p className="hidden md:block absolute bottom-10 -left-13 rotate-270 [writing-style:lr] text-(--color-brand-purple) font-mono">
              my works
            </p>
          </div>

          {/* Separation-2 */}
          <div className="flex relative w-full h-70 justify-end">
            <DoubleLineBorder className="bottom-0" />
          </div>

          {/* About me */}
          <div className="flex relative flex-col w-full h-fit">
            <SectionHeader
              title="About me"
              subtitle="A short description about me and my technical skills"
              id="about-me"
            />

            <div className="grid grid-rows-1 h-fit mt-15 border-t border-(--color-line)">
              <div className="grid grid-cols-1 xl:grid-cols-[32%_20px_1fr] border-b border-(--color-line)">
                <Browser />

                <div className="border-x border-(--color-line)/50" />

                <article className="flex flex-col w-full h-full justify-between">
                  <div className="flex flex-col border-b border-(--color-line)/50 w-full justify-end">
                    <p className="text-slate-700 font-mono line-clamp-1 text-[0.95rem] w-full h-fit text-end border-b border-(--color-line)/50">
                      &lt;div className="flex w-full h-fit text-[0.9rem]
                      font-sans text-white"&gt;
                    </p>
                    <p className="flex items-center border-y text-[0.95rem] text-center xl:text-end w-full px-3 xl:px-0 xl:pl-[10%] py-3 xl:py-0 xl:pr-1 border-(--color-line)/50 mt-2 md:mt-5">
                      Hi! I'm{" "}
                      <span className="text-(--color-brand-blue-accent) font-mono contents">
                        nilo
                      </span>
                      , and I like creating websites! My journey started at a
                      local IT solutions company in Makati where I got my first
                      taste of cloud operations and full-stack development. As
                      of now, you'll usually find me working on personal
                      projects, taking on occasional side quests, and building
                      cool things as a developer at a local startup{" "}
                      <span className="text-[0.8rem] text-slate-400 contents">
                        (of which I founded with four other people)
                      </span>
                      .
                    </p>
                    <p className="flex items-center border-y text-[0.95rem] text-center xl:text-end w-full px-3 xl:px-0 xl:pl-[10%] py-3 xl:py-0 xl:pr-1 border-(--color-line)/50 mt-2 md:mt-5">
                      When I'm away from my laptop, you'll usually find me
                      café-hopping around Manila, checking out museums,
                      exploring new simulation games on Steam, or keeping up
                      with the latest tech events and framework releases through
                      forums and social media.
                    </p>
                    <p className="flex items-center border-y mb-5 text-[0.95rem] text-center xl:text-end w-full px-3 xl:px-0 xl:pl-[10%] py-3 xl:py-0 xl:pr-1 border-(--color-line)/50 mt-2 md:mt-5">
                      I believe that{" "}
                      <span className="font-mono text-(--color-brand-purple) contents">
                        continuous learning
                      </span>
                      ,{" "}
                      <span className="font-mono text-(--color-brand-blue-accent) contents">
                        open-mindedness
                      </span>
                      , and{" "}
                      <span className="text-[#00D9FF] font-mono contents">
                        curiousity
                      </span>{" "}
                      is not just crucial as a professional, but in general as
                      well. I believe good software should be simple,
                      accessible, and built with the people using it in mind,
                      and that's the kind of work I hope to keep creating.
                    </p>
                  </div>

                  <p className="w-full h-fit font-mono text-end text-slate-700 line-clamp-1 text-[0.75rem] sm:text-[0.825rem] md:text-[0.875rem] lg:text-[0.9rem] xl:text-[0.95rem] border-t border-(--color-line)/50">
                    &lt;/div&gt;
                  </p>
                </article>
              </div>

              <div className="flex w-full h-fit border-b border-(--color-line)">
                <div className="h-fit items-center w-full mt-10">
                  <p
                    id="technical-skills"
                    className="text-2xl font-semibold font-mono px-3 border-y border-(--color-line)/30"
                  >
                    Technical skills
                  </p>

                  <TechStack />

                  <p className="hidden md:block absolute -left-13 bottom-10 rotate-270 font-mono text-(--color-brand-purple)">
                    about me
                  </p>

                  <DoubleLineBorder />
                </div>
              </div>
            </div>
          </div>

          {/* Separation-3 */}
          <div className="flex relative w-full h-70 justify-end">
            <DoubleLineBorder className="bottom-0" />
          </div>

          <div className="flex relative flex-col w-full h-fit">
            <div className="h-10 items-center w-full border-y border-(--color-line)/30 mt-10">
              <p
                id="contact-me"
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-mono px-3"
              >
                Contact me
              </p>
            </div>

            <ContactMeForm />

            <DoubleLineBorder className="-bottom-6" />
            <p className="hidden md:block absolute -left-16 z-50 bottom-13 rotate-270 font-mono text-(--color-brand-purple)">
              contact me
            </p>
          </div>

          <Footer />
        </div>
      </div>

      <div />
    </div>
  );
}
