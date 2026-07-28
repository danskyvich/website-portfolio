'use client'

import Browser from "@/components/layout/browser";
import SectionHeader from "@/components/layout/section-header";
import TechStack from "@/components/layout/tech-stack";
import TopBar from "@/components/layout/header";
import Button from "@/components/ui/button";
import DoubleLineBorder from "@/components/ui/double-line-border";
import PortfolioHeader from "@/components/ui/portfolio-header";
import TechStackGrid from "@/components/ui/tech-stack-grid";
import { CSSIcon, GithubIcon, HTMLWeb3Icon, NextJSIcon, SupabaseIcon, TailwindCSSIcon, TypescriptIcon, VercelIcon, VSCodeIcon } from "@/lib/icons";
import { ProjectInformation } from "@/lib/types";
import { ArrowUpRight, Section, X } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/layout/footer";

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
        <TopBar />
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
                    <p className="w-full font-mono text-3xl font-light pr-3 border-b border-(--color-line)/30">
                      Money{" "}
                      <span className="font-bold bg-clip-text text-transparent bg-linear-to-r from-(--color-brand-cyan) to-(--color-brand-green)">
                        Tracker
                      </span>
                    </p>

                    {/* Subtitle */}
                    <div className="flex w-full h-fit">
                      <p className="flex h-fit pl-[30%] pr-3 text-(--color-text-secondary)">
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
                <p className="absolute bottom-10 -left-15 rotate-270 [writing-style:lr] text-(--color-brand-purple) font-mono">
                  My works
                </p>
              </div>
            </div>

            {/* Separation-2 */}
            <div className="flex relative w-full h-70 justify-end">
              <DoubleLineBorder className="bottom-0" />
            </div>

            {/* About me */}
            <div className="flex relative flex-col w-full h-fit">
              <SectionHeader
                title="About me"
                subtitle="My current tech stack, the things that I believe in, and the things that define me. (placeholder)"
                id="about-me"
              />

              <div className="grid grid-rows-1 h-fit mt-15 border-t border-(--color-line)">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_30px_400px] border-b border-(--color-line) w-full h-fit">
                  {/* Browser */}
                  <Browser />

                  <div className="border-x border-(--color-line)" />

                  <div className="flex flex-col w-full min-h-full ">
                    <p className="h-fit w-full border-b border-(--color-line)/30 font-[0.9rem] font-sans text-end px-3">
                      <code className="font-mono text-(--color-text-secondary)/30 tracking-wide">
                        &lt;div &gt;
                      </code>
                    </p>
                    <div className="flex w-full h-5 border-b border-(--color-line)/30" />
                    <p className="h-fit w-full border-b border-(--color-line)/30 font-[0.9rem] font-sans text-end px-3">
                      Danilo is a front-end developer 
                    </p>
                  </div>
                </div>

                <div className="flex w-full h-fit border-b border-(--color-line)">
                  <div className="h-fit items-center w-full mt-10">
                    <p id="technical-skills" className="text-2xl font-semibold font-mono px-3 border-y border-(--color-line)/30">
                      Technical skills
                    </p>

                    <TechStack />

                    <p className="absolute -left-15 bottom-10 rotate-270 font-mono text-(--color-brand-purple)">
                      About me
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
                  className="text-4xl font-bold font-mono px-3"
                >
                  Contact me
                </p>
              </div>

              <div className="grid grid-cols-[400px_20px_1fr] grid-rows-1 border-t border-(--color-line)/50 my-10">
                {/* Email */}
                <div className="font-mono border-b border-(--color-line)/50 p-3">
                  <p>Your name</p>
                </div>
                <div className="border-x border-(--color-line)/50" />
                <div className="border-r border-b border-(--color-line)/30 py-0 text-[0.9rem]">
                  <input
                    type="text"
                    placeholder="e.g Juan Dela Cruz"
                    className="bg-(--color-brand-blue-dark) rounded-[40px] w-full h-full flex px-5"
                  />
                </div>

                {/*Subject */}
                <div className="flex row-start-2 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5">
                  <p>Your email</p>
                </div>
                <div className="flex row-start-2 border-x border-(--color-line)/50" />
                <div className="flex row-start-2 border-r border-b border-(--color-line)/30 py-0 text-[0.9rem] mt-5 border-t">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="bg-(--color-brand-blue-dark) rounded-[40px] w-full h-full flex px-5"
                  />
                </div>

                {/*Subject */}
                <div className="flex row-start-3 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5 h-[calc(100%-20px)] items-center">
                  <p>Your message</p>
                </div>
                <div className="flex row-start-3 border-x border-(--color-line)/50" />
                <div className="flex row-start-3 border-r border-b border-(--color-line)/30 py-0 text-[0.9rem] mt-5 border-t">
                  <textarea
                    placeholder="example@gmail.com"
                    className="bg-(--color-brand-blue-dark) rounded-[20px] py-3 w-full h-40 flex px-5 resize-none"
                  />
                </div>

                {/*Submit */}
                <div className="flex row-start-4 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5 h-10 items-center" />
                <div className="flex row-start-4 border-x border-b border-(--color-line)/50" />
                <div className="flex row-start-4 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
                  <button className="bg-(--color-brand-purple) w-full h-full rounded-[20px] hover:bg-(--color-brand-purple-dark) cursor-pointer active:bg-fuchsia-800 transitionall duration-100">
                    <p className="font-normal text-white">Submit</p>
                  </button>
                </div>

                <div className="row-start-5 col-span-3 flex w-full h-5 border-b border-(--color-line)/50" />
              </div>

              <DoubleLineBorder className="-bottom-6" />
              <p className="absolute -left-16 z-50 bottom-13 rotate-270 font-mono text-(--color-brand-purple)">
                Contact me
              </p>
            </div>

            {/* footer */}
            <Footer/>
          </div>
        </div>

        <div />
      </div>
    );
}