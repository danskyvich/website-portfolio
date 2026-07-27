'use client'

import SectionHeader from "@/components/layout/section-header";
import TechStack from "@/components/layout/tech-stack";
import TopBar from "@/components/layout/top-bar";
import Button from "@/components/ui/button";
import DoubleLineBorder from "@/components/ui/double-line-border";
import LoopingText from "@/components/ui/looping-text";
import TechStackGrid from "@/components/ui/tech-stack-grid";
import { CSSIcon, GithubIcon, HTMLWeb3Icon, NextJSIcon, SupabaseIcon, TailwindCSSIcon, TypescriptIcon, VercelIcon, VSCodeIcon } from "@/lib/icons";
import { ProjectInformation } from "@/lib/types";
import { ArrowUpRight, Section, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <div className="flex relative flex-col w-full h-150 justify-end">
              <div className="flex w-full h-fit items-end">
                <p className="font-mono text-2xl/10 font-extralight w-[70%] ml-5">
                  I'm
                  <br />
                  <span className="text-6xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-(--color-brand-blue) to-(--color-brand-purple)">
                    Danilo Pelin
                  </span>
                  <span className="text-xl text-(--color-text-secondary)">
                    (aka nilo)
                    <br />
                  </span>
                  A{" "}
                  <span className="text-(--color-brand-blue) font-semibold">
                    front-end developer
                  </span>{" "}
                  from the Philippines. I like to build websites for fun.
                  Currently exploring the field of backend development,
                  relational database management, and new front-end frameworks.
                </p>
                <p className="absolute -left-12 bottom-5 rotate-270 font-mono text-(--color-brand-purple)">
                  header
                </p>
              </div>
              {/* border */}
              <DoubleLineBorder className="-bottom-10" />
              <LoopingText className="absolute -bottom-17 text-(--color-brand-blue-accent)" />
              <DoubleLineBorder className="-bottom-25" />
            </div>

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
                <div className="grid grid-cols-[1fr_30px_400px] border-b border-(--color-line) w-full h-fit">
                  {/* Browser */}
                  <div className="flex flex-col w-full h-125">
                    {/* tab */}
                    <div className="flex w-full h-[7%] rounded-t-4xl bg-(--color-brand-blue-dark) px-20 gap-5 py-2">
                      <div className="flex flex-1 w-full h-full items-center justify-center gap-3">
                        <div className="rounded-[50%] w-3 h-3 bg-red-400" />
                        <div className="rounded-[50%] w-3 h-3 bg-amber-200" />
                        <div className="rounded-[50%] w-3 h-3 bg-green-300" />
                      </div>

                      <div className="flex flex-auto px-3 w-full h-full rounded-2xl bg-(--color-brand-blue-soft) items-center">
                        <p className="text-white text-[0.7rem]">
                          http://localhost:3000
                        </p>
                      </div>

                      <div className="flex w-auto h-full items-center justify-end">
                        <X size={20} />
                      </div>
                    </div>

                    <div className="flex w-full h-[93%] rounded-b-4xl bg-(--color-brand-blue-super-dark)"></div>
                  </div>

                  <div className="border-x border-(--color-line)" />

                  <div className="flex flex-col w-full min-h-full">
                    <p className="h-fit w-full border-b border-(--color-line)/30 text-(--color-text-secondary) font-[0.9rem] font-sans text-end px-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam ullamcorper facilisis erat, et bibendum erat
                      vestibulum vitae. Sed in euismod neque. Nam a elit a
                      turpis rhoncus pharetra dapibus sit amet turpis. Morbi
                      magna purus, accumsan et hendrerit at, congue eu massa.
                      .{" "}
                    </p>
                    <div className="flex w-full h-5 border-b border-(--color-line)/30" />
                    <p className="h-fit w-full border-b border-(--color-line)/30 text-(--color-text-secondary) font-[0.9rem] font-sans text-end px-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam ullamcorper facilisis erat, et bibendum erat
                      vestibulum vitae. Sed in euismod neque. Nam a elit a
                      turpis rhoncus pharetra dapibus sit amet turpis. Morbi
                      magna purus, accumsan et hendrerit at, congue eu massa.
                      .{" "}
                    </p>
                  </div>
                </div>

                <div className="flex w-full h-fit border-b border-(--color-line)">
                  <div className="h-fit items-center w-full mt-10">
                    <p className="text-2xl font-semibold font-mono px-3 border-y border-(--color-line)/30">
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
                <p id="about-me" className="text-4xl font-bold font-mono px-3">
                  Contact me
                </p>
              </div>

              <div className="grid grid-cols-[400px_20px_1fr] grid-rows-1 border-t border-(--color-line) my-10">
                {/* Email */}
                <div className="font-mono border-b border-(--color-line)/30 p-3">
                  <p>Your name</p>
                </div>
                <div className="border-x border-(--color-line)/30" />
                <div className="border-r border-b border-(--color-line)/30 py-0 text-[0.9rem]">
                  <input
                    type="text"
                    placeholder="e.g Juan Dela Cruz"
                    className="bg-(--color-brand-blue-dark) rounded-[40px] w-full h-full flex px-5"
                  />
                </div>

                {/*Subject */}
                <div className="row-start-2 font-mono border-b border-t border-(--color-line)/30 p-3 mt-5">
                  <p>Your email</p>
                </div>
                <div className="row-start-2 border-x border-(--color-line)/30" />
                <div className="row-start-2 border-r border-b border-(--color-line)/30 py-0 text-[0.9rem] mt-5 border-t">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="bg-(--color-brand-blue-dark) rounded-[40px] w-full h-full flex px-5"
                  />
                </div>

                {/*Subject */}
                <div className="row-start-3 flex items-center w-full h-full font-mono border-b border-t border-(--color-line)/30 p-3 mt-5">
                  <p>Your message</p>
                </div>
                <div className="row-start-3 border-x border-(--color-line)/30" />
                <div className="row=start-3 border-r border-(--color-line)/30 py-0 text-[0.9rem] mt-5">
                  <textarea
                    placeholder="Hi! I would like to inquire..."
                    className="bg-(--color-brand-blue-dark) rounded-t-[20px] rounded-b-[20px] w-full flex px-5 py-3 h-full resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className=" row-start-4 flex items-center w-full h-full font-mono border-b border-(--color-line)/30 p-3" />
                <div className="row-start-4 border-x border-(--color-line)/30" />
                <div className="row=start-4 border-r border-b border-t border-(--color-line)/30 py-0 text-[0.9rem] mt-5">
                  <Link
                    href="/"
                    className="row-start-4 flex w-full h-fit text-[0.9rem] bg-(--color-brand-purple)/40 rounded-[20px] items-center justify-center py-2"
                  >
                    <p>Submit</p>
                  </Link>
                </div>
              </div>

              <DoubleLineBorder className="-bottom-6" />
              <p className="absolute -left-16 z-50 bottom-13 rotate-270 font-mono text-(--color-brand-purple)">Contact me</p>
            </div>

            {/* Separation-4 */}
            <div className="flex relative w-full h-60 justify-end">

            </div>
          </div>
        </div>

        <div />
      </div>
    );
}