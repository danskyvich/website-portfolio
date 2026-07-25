'use client'

import Image from "next/image"
import ButtonSlantedBg from "../ui/button-slanted-bg";

export default function TopBar() {

    return (
      <div className="flex w-full h-fit border-b border-(--color-line) px-10 2xl:px-[20%] py-3 bg-(--color-background) items-center justify-between">
        {/* Left side */}
        <div className="flex w-full h-full gap-10 text-[0.9rem] items-center font-">
          <Image src="favicon.svg" alt="alt" width={45} height={45} />
          <a href="" className="line-clamp-1">
            My works
          </a>
          <a href="" className="line-clamp-1">
            About me
          </a>
        </div>

        {/* Right side */}
        <div className="flex w-full h-full items-center justify-end gap-10">
          <ButtonSlantedBg text="Resume" />

          <ButtonSlantedBg text="Contacts" />
        </div>
      </div>
    );
}