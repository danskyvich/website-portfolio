import { getCommits } from "@/lib/get-commits";
import DoubleLineBorder from "./double-line-border";
import LoopingText from "./looping-text";

export default async function PortfolioHeader() {
  const commits = await getCommits();
  return (
    <div className="flex relative flex-col w-full h-150 justify-end">
      <div className="flex w-full h-fit items-end">
        <p className="font-mono md:text-start lg:text-xl xl:text-2xl/10 font-extralight w-[70%] ml-5">
          I'm
          <br />
          <span className="text-6xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-(--color-brand-blue) to-(--color-brand-purple)">
            Danilo Pelin
          </span>
          <span className="block md:inline text-xl text-(--color-text-secondary)">
            (aka nilo)
            <br />
          </span>
          A{" "}
          <span className="text-(--color-brand-blue) font-semibold">
            front-end developer
          </span>{" "}
          from the Philippines. I like to build websites for fun. Currently
          exploring the field of backend development, relational database
          management, and new front-end frameworks.
        </p>
        <p className="absolute hidden md:block -left-11 bottom-5 rotate-270 font-mono text-(--color-brand-purple)">
          header
        </p>
      </div>
      {/* border */}
      <DoubleLineBorder className="-bottom-10" />
      <LoopingText className="absolute -bottom-17 text-(--color-brand-blue-accent)" />
      <DoubleLineBorder className="-bottom-25" />
    </div>
  );
}