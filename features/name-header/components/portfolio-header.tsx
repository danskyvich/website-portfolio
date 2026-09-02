import DoubleLineBorder from "../../../components/ui/double-line-border";
import LoopingText from "./looping-text";
import { Commit } from "@/features/name-header/types/user";
import { GitCommitHorizontal } from "lucide-react";

export default function PortfolioHeader({commits}: {commits: Commit | null}) {
  const latestCommit = commits;
  return (
    <div className="flex relative flex-col w-full h-150 justify-end">
      <div className="flex w-full h-fit items-end pb-1">
        <p className="font-mono text-[1rem] md:text-start lg:text-xl xl:text-2xl/10 font-extralight w-full sm:w-[60%] md:w-[70%] px-2 md:px-5">
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
        <div className="flex w-full items-center p-1 gap-2 rounded-2xl text-[0.9rem] font-mono text-(--color-text-secondary) tracking-wide mx-0 lg:mx-5 min-w-0 overflow-hidden">
          <GitCommitHorizontal size={20} className="shrink-0 mt-0.5 min-w-3" />
          <p className="min-w-0 wrap-break-word text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem]">
            {latestCommit.repo}: {latestCommit?.message}
          </p>
        </div>
      )}

      {/* border */}
      <DoubleLineBorder className="-bottom-10" />
      <LoopingText className="absolute -bottom-17 text-(--color-brand-blue-accent)" />
      <DoubleLineBorder className="-bottom-25" />
    </div>
  );
}