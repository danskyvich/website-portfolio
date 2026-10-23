"use client";

import Image from "next/image";
import ButtonSlantedBg from "../ui/button-slanted-bg";
import { FigmaIcon } from "@/lib/icons";
import { motion } from "framer-motion";

const header_content = [
  { title: "Works", value: "#my-works", id: 1 },
  { title: "About me", value: "#about-me", id: 2 },
  { title: "Contact me", value: "#contact-me", id: 3 },
];

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between gap-3 border-b border-(--color-line) bg-(--color-background)/50 px-3 py-3 backdrop-blur-xl sm:px-5 md:px-7 lg:px-9 xl:px-10 2xl:px-[20%]">
      {/* Left side */}
      <div className="flex min-w-0 flex-1 items-center gap-3 xl:gap-5 2xl:gap-10">
        <Image
          src="/icon.svg"
          alt="Logo"
          width={45}
          height={45}
          className="shrink-0 rounded-xl"
        />

        <nav className="hidden items-center gap-5 md:flex xl:gap-8">
          {header_content.map((header) => (
            <motion.a
              key={header.id}
              href={header.value}
              className="w-fit cursor-pointer"
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <span className="block whitespace-nowrap text-[0.85rem] font-sans transition-colors duration-100 hover:text-brand-purple">
                {header.title}
              </span>
              <motion.div
                className="h-0.5 w-full origin-left bg-brand-purple"
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>
          ))}
        </nav>
      </div>

      {/* Right side */}
      <div className="flex shrink-0 items-center gap-3">
        <a
          className="hidden items-center justify-center rounded-sm bg-linear-0 from-(--color-brand-blue) to-(--color-brand-blue-accent) px-4 py-1.5 transition-all duration-100 sm:flex"
          href="https://www.figma.com/design/ijPZLFAhQYlGP540IzqnOa/Web-Portfolio?node-id=0-1&t=UbPSXlObH6nZubvw-1"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="View Figma design"
        >
          <FigmaIcon className="h-6.5 w-auto rounded-sm" />
        </a>
        <ButtonSlantedBg text="Resume" link="/danilo-pelin-resume.pdf" />
      </div>
    </header>
  );
}
