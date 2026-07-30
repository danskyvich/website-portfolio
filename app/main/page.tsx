"use client";

import SectionHeader from "@/components/layout/section-header";
import TechStack from "@/components/layout/tech-stack";
import TopBar from "@/components/layout/header";
import Button from "@/components/ui/button";
import DoubleLineBorder from "@/components/ui/double-line-border";
import PortfolioHeader from "@/components/ui/portfolio-header";
import TechStackGrid from "@/components/ui/tech-stack-grid";
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
import { ProjectInformation } from "@/lib/types";
import { ArrowUpRight, Section, X } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/layout/footer";
import Browser from "@/components/ui/browser";

const firstProjectIcons: ProjectInformation[] = [
  { icon: <TypescriptIcon />, link: "https://www.typescriptlang.org" },
  { icon: <TailwindCSSIcon />, link: "https://www.tailwindcss.com" },
  { icon: <SupabaseIcon />, link: "https://www.supabase.com" },
  {
    icon: <HTMLWeb3Icon />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <CSSIcon />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { icon: <NextJSIcon />, link: "https://www.nextjs.org" },
  { icon: <VercelIcon />, link: "https://www.vercel.com" },
  { icon: <VSCodeIcon />, link: "https://code.visualstudio.com" },
];

export default function MainPortfolioPage() {
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden overflow-y-auto">
      <div className="grid grid-cols-[10px_1fr_10px] md:grid-cols-[50px_1fr_50px] lg:grid-cols-[150px_1fr_150px] 2xl:grid-cols-[17.5%_1fr_17.5%] w-full h-full">
        <div />

        {/* Content goes here */}
        <div className="flex flex-col w-full h-full border-x border-(--color-line)">
          {/* header */}
          <PortfolioHeader />

          {/* Separation-1 */}
          <div className="flex relative w-full h-80 justify-end">
            <DoubleLineBorder className="bottom-0" />
          </div>

          {/* My works */}
          <div className="flex flex-col relative w-full h-fit">
            <SectionHeader
              title="My works"
              subtitle="My finished projects, either academic or personal, that I compiled for the last four years."
              id="my-works"
            />

            {/* 1st project */}
            <div className="grid grid-cols-1 grid-rows-1 xl:grid-cols-[1fr_1fr] w-full border-y border-(--color-line) mt-15">
              {/* left side */}
              <div className="flex w-full h-fit justify-center">
                <div className="bg-(--color-brand-blue-dark) w-full h-fit p-2">
                  <Image
                    src="/first-project.png"
                    alt="alt"
                    width={900}
                    height={130}
                    className="rounded-[10%]"
                  />
                </div>
              </div>

              {/* Right side */}
              <div className="flex flex-col w-full border-l border-(--color-line) h-full text-end">
                <div className="flex flex-col w-full">
                  {/* Title */}
                  <p className="w-full font-bold py-3 xl:py-0 text-center xl:text-end font-mono text-3xl pr-3 border-b border-(--color-line)/30">
                    Money{" "}
                    <span className="font-bold bg-clip-text text-transparent bg-linear-to-r from-(--color-brand-cyan) to-(--color-brand-green)">
                      Tracker
                    </span>
                  </p>

                  {/* Subtitle */}
                  <div className="flex w-full h-fit">
                    <p className="flex h-fit text-center xl:text-end px-[20%] xl:px-[30%_5] text-(--color-text-secondary) py-3 xl:py-0">
                      A web application that monitors your monthly finances by
                      recording your transactions and analyzing inflows and
                      outflows
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-full h-full">
                  <div className="flex w-full border-y h-4 border-(--color-line)" />
                  <div className="flex w-full h-fit py-2">
                    <Button
                      text="View on Github"
                      icon={<GithubIcon />}
                      link="https://github.com/danskyvich/money-tracker"
                    />
                    <Button
                      text="View the demo"
                      icon={<ArrowUpRight />}
                      link="/"
                    />
                  </div>
                  <div className="flex w-full border-y h-4 border-(--color-line) items-center justify-center" />

                  {/* Used tech stack 
                      make this a component
                    */}
                  <TechStackGrid icons={firstProjectIcons} />

                  <DoubleLineBorder className="-bottom-6" />
                </div>
              </div>
              <p className="absolute bottom-10 -left-13 rotate-270 [writing-style:lr] text-(--color-brand-purple) font-mono">
                my works
              </p>
            </div>
          </div>

          {/* Separation-2 */}
          <div className="flex relative w-full h-70 justify-end">
            <DoubleLineBorder className="bottom-0" />
          </div>

          {/* About me */}
          <div className="flex relative flex-col w-full h-fit">
            <SectionHeader title="About me" id="about-me" />

            <div className="grid grid-rows-1 h-fit mt-15 border-t border-(--color-line)">
              <div className="grid grid-cols-1 xl:grid-cols-[32%_20px_1fr] border-b border-(--color-line)">
                <Browser />

                <div className="border-x border-(--color-line)/50" />

                <article className="flex flex-col w-full h-full justify-between">
                  <div className="flex flex-col border-b border-(--color-line)/50 w-full justify-end">
                    <p className="text-slate-700 font-mono line-clamp-1 text-[0.9rem] w-full h-fit text-end border-b border-(--color-line)/50">
                      &lt;div className="flex w-full h-fit text-[0.9rem]
                      font-sans text-white"&gt;
                    </p>
                    <p className="border-y text-center xl:text-end xl:pl-[10%] py-5 xl:py-0 pr-1 border-(--color-line)/50 mt-5">
                      Hi! I'm{" "}
                      <span className="text-(--color-brand-blue-accent) font-mono">
                        nilo
                      </span>
                      , and I like creating websites! My journey started at a
                      local IT solutions company in Makati where I got my first
                      taste of cloud operations and full-stack development. As
                      of now, you'll usually find me working on personal
                      projects, taking on occasional side quests, and building
                      cool things as a developer at a local startup{" "}
                      <span className="text-[0.8rem] text-(--color-text-secondary)">
                        (of which I also founded with four other people)
                      </span>
                      .
                    </p>
                    <p className="h-fit w-full border-y border-(--color-line)/50 mt-5 justify-end text-center xl:text-end pr-1 py-5 xl:py-0 xl:pl-[10%]">
                      When I'm away from my laptop, you'll usually find me
                      café-hopping around Manila, running around UP Diliman,
                      exploring new simulation games on Steam, or keeping up
                      with the latest tech events and framework releases through
                      forums and social media.
                    </p>
                    <p className="h-fit w-full border-t border-(--color-line)/50 mt-5 justify-end text-center xl:text-end pr-1 py-5 xl:py-0 xl:pl-[10%]">
                      I believe that{" "}
                      <span className="font-mono text-(--color-brand-purple)">
                        continuous learning
                      </span>
                      ,{" "}
                      <span className="font-mono text-(--color-brand-blue-accent)">
                        open-mindedness
                      </span>
                      , and{" "}
                      <span className="text-[#00D9FF] font-mono">
                        curiousity
                      </span>{" "}
                      is not just crucial as a professional, but in general as
                      well. I also believe that technology should always serve
                      people, and that making it more accessible is essential in
                      today's digital world.
                    </p>
                  </div>

                  <p className="w-full h-fit font-mono text-end text-slate-700 line-clamp-1 text-[0.9rem] border-t border-(--color-line)/50">
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

                  <p className="absolute -left-13 bottom-10 rotate-270 font-mono text-(--color-brand-purple)">
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
              <p id="contact-me" className="text-4xl font-bold font-mono px-3">
                Contact me
              </p>
            </div>

            <div className="grid grid-cols-[32.25%_20px_1fr] grid-rows-1 border-t border-(--color-line)/50 my-10">
              {/* Your name */}
              <div className="flex font-mono border-b border-(--color-line)/50 p-3">
                <p>Your name</p>
              </div>
              <div className="flex border-x border-(--color-line)/50" />
              <div className="flex border-r border-b border-(--color-line)/50 py-0 text-[0.9rem]">
                <input
                  type="text"
                  placeholder="e.g Juan Dela Cruz"
                  className="bg-(--color-brand-blue-dark) rounded-[40px] w-full h-full flex px-5"
                />
              </div>

              {/* Your email */}
              <div className="flex row-start-2 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5">
                <p>Your email</p>
              </div>
              <div className="flex row-start-2 border-x border-(--color-line)/50" />
              <div className="flex row-start-2 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="bg-(--color-brand-blue-dark) rounded-[40px] w-full h-full flex px-5"
                />
              </div>

              {/* Your message */}
              <div className="flex row-start-3 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5 h-[calc(100%-20px)] items-center">
                <p>Your message</p>
              </div>
              <div className="flex row-start-3 border-x border-(--color-line)/50" />
              <div className="flex row-start-3 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
                <textarea
                  placeholder="Hi! I would like to..."
                  className="bg-(--color-brand-blue-dark) rounded-[20px] py-3 w-full h-40 flex px-5 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex row-start-4 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5 h-10 items-center" />
              <div className="flex row-start-4 border-x border-b border-(--color-line)/50" />
              <div className="flex row-start-4 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
                <button className="bg-(--color-brand-purple) w-full h-full rounded-[20px] hover:bg-(--color-brand-purple-dark) cursor-pointer active:bg-fuchsia-800 transitionall duration-100">
                  <p className="font-normal text-white">Submit</p>
                </button>
              </div>

              <div className="flex row-start-5 col-span-3 w-full h-5 border-b border-(--color-line)/50" />
            </div>

            <DoubleLineBorder className="-bottom-6" />
            <p className="absolute -left-16 z-50 bottom-13 rotate-270 font-mono text-(--color-brand-purple)">
              contact me
            </p>
          </div>

          {/* footer */}
          <Footer />
        </div>
      </div>

      <div />
    </div>
  );
}
