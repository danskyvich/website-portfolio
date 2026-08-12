'use client'

import Image from "next/image"
import ButtonSlantedBg from "../ui/button-slanted-bg";
import { File } from "lucide-react";
import Link from "next/link";

export default function TopBar() {

    return (
      <div className="fixed flex z-50 w-full h-fit border-b border-(--color-line) px-3 sm:px-5 md:px-7 lg:px-9 xl:px-10 2xl:px-[20%] py-3 bg-(--color-background)/50 backdrop-blur-xl items-center justify-between">
        {/* Left side */}
        <div className="flex w-full h-full gap-3 xl:gap-5 2xl:gap-10 text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] lg:text-[0.875rem] xl:text-[0.9rem] items-center">
          <Image
            src="icon.svg"
            alt="alt"
            width={45}
            height={45}
            className="rounded-xl"
          />
          <a href="#my-works" className="line-clamp-1">
            My works
          </a>
          <a href="#about-me" className="line-clamp-1">
            About me
          </a>
          <a href="#contact-me" className="line-clamp-1">
            Contact me
          </a>
        </div>

        {/* Right side */}
        <div className="flex w-full h-full items-center justify-end gap-3 xl:gap-5 2xl:gap-10">

          <ButtonSlantedBg text="Resume" link="/resume.pdf"/>
        </div>
      </div>
    );
}