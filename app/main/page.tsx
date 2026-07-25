'use client'

import TopBar from "@/components/layout/top-bar";
import DoubleLineBorder from "@/components/ui/double-line-border";

export default function MainPortfolioPage() {

    return (
      <div className="flex flex-col w-full h-full">
        <TopBar />
        <div className="grid grid-cols-[10px_1fr_10px] md:grid-cols-[50px_1fr_50px] lg:grid-cols-[150px_1fr_150px] 2xl:grid-cols-[17.5%_1fr_17.5%] w-full h-full">
          <div />
          <div className="flex relative flex-col w-full h-full border-x border-(--color-line)">
            {/* Header */}
            <div className="relative w-full h-135 flex flex-col justify-end">
              <p className="text-2xl font-mono ml-2">
                Im <br />{" "}
                <span className="text-7xl bg-clip-text text-transparent bg-linear-to-l from-(--color-brand-purple) to-(--color-brand-blue)">
                  Danilo Pelin
                </span>
                <span className="text-(--color-text-secondary)">
                  (a.k.a nilo)
                </span>
              </p>
              <p className="w-[70%] ml-2 h-fit text-2xl/10 text-(--color-text-secondary) font-extralight tracking-wide mt-2">
                A{" "}
                <span className="inline-flex font-sans text-(--color-brand-blue-accent) font-bold">
                  front-end developer
                </span>{" "}
                from the Philippines. I Like to build websites for fun.
                Currently exploring the field of backend development, relational
                database management, and new front-end frameworks.
              </p>
              <DoubleLineBorder className="bottom-0" />
            </div>
          </div>
        </div>
        <div />
      </div>
    );
}