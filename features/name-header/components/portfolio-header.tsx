import DoubleLineBorder from "../../../components/ui/double-line-border";
import LoopingText from "./looping-text";
import { Commit } from "@/features/name-header/types/user";
import { GitCommitHorizontal } from "lucide-react";

export default function PortfolioHeader({commits}: {commits: Commit | null}) {
  const latestCommit = commits;
  return (
    <div className="flex relative flex-col w-full h-150 justify-end">
      <div className="flex w-full h-fit items-end pb-1">
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
      {latestCommit && (
        <div className="flex w-fit h-fit items-center p-1 gap-2 rounded-2xl text-[0.675rem] sm:text-[0.725rem] xl:text-[0.825rem] text-(--color-text-secondary) tracking-wide mx-5">
          <GitCommitHorizontal size={20}/>
          <p className="whitespace-nowrap">{latestCommit.repo}:{" "}</p>
          <p className="line-clamp-1">{latestCommit?.message}</p>
        </div>
      )}

      {/* border */}
      <DoubleLineBorder className="-bottom-10" />
      <LoopingText className="absolute -bottom-17 text-(--color-brand-blue-accent)" />
      <DoubleLineBorder className="-bottom-25" />
    </div>
  );
}