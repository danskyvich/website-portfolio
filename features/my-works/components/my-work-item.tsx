import Button from "@/components/ui/button-animated";
import TechStackGrid from "./tech-stack-grid";
import DoubleLineBorder from "@/components/ui/double-line-border";
import { GithubIcon } from "@/lib/icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ProjectInformation } from "../types/types";

interface MyWorkItemProps {
    image: string,
    title: string,
    description: string,
    techStack: ProjectInformation[]
}

export default function MyWorkItem({image, title, description, techStack}: MyWorkItemProps) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 xl:grid-cols-[1fr_1fr] w-full border-t border-(--color-line) mt-15">
      {/* left side */}
      <div className="flex w-full h-fit justify-center">
        <div className="bg-(--color-brand-blue-dark) w-full h-fit p-2">
          <Image
            src={image}
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
            {title}
          </p>

          {/* Subtitle */}
          <div className="flex w-full h-fit">
            <p className="flex h-fit text-center xl:text-end px-[20%] xl:px-[30%_5] text-(--color-text-secondary) py-3 xl:py-0">
              {description}
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
            <Button text="View the demo" icon={<ArrowUpRight />} link="/" />
          </div>
          <div className="flex w-full border-y h-4 border-(--color-line) items-center justify-center" />

          <TechStackGrid icons={techStack} />

          <DoubleLineBorder className="-bottom-6" />
        </div>
      </div>
      <p className="absolute bottom-10 -left-13 rotate-270 [writing-style:lr] text-(--color-brand-purple) font-mono">
        my works
      </p>
    </div>
  );
}
