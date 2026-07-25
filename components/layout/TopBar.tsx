'use client'

import Image from "next/image"
import { motion, Variants } from "framer-motion"

const Line = ({ className }: { className: string }) => {
  return <div className={`absolute border-0 bg-white ${className}`} />;
};

const divToRight = {
  rest: {
    color: "black",
    width: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    color: "black",
    width: '200px',
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut",
    },
  },
} as const satisfies Variants;

export default function TopBar() {

    const items = [
        {name: "Works", link: "/"},
        {name: "About Me", link: "/"},
    ]

    return (
      /*
      <div className="flex bg-(--color-brand-purple) w-full h-fit justify-between items-center px-5 py-5 mt-5 ">
        <div className="flex gap-2.5 w-[50%] items-center justify-start">
          <Image src="favicon.svg" alt="alt" width={25} height={25} />
          <p className="text-black tracking-tighter whitespace-nowrap font-bold text-xl">
            Danilo Pelin
          </p>
        </div>

        <div className="flex w-[50%] h-full gap-5">
          <div className="flex items-center justify-end w-full text-[0.95rem] font-light flex gap-10">
            {items.map((item, key) => (
              <div className="tracking-tighter whitespace-nowrap" key={key}>
                <a
                  href={item.link}
                  className="hover:text-(--color-text-secondary)"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>

          <motion.div
            className="flex h-full w-fit relative items-center overflow-hidden justify-center text-[0.9rem] font-bold bg-[repeating-linear-gradient(315deg,var(--color-line)_0,var(--color-line)_1px,transparent_1px,transparent_50%)] bg-size-[8px_8px] px-5 py-3 hover:cursor-pointer border border-dashed border-white"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div
              className="rotate-x-30 bg-black z-0 h-20 w-10 absolute -left-10"
              variants={ divToRight }
            />
           
            <a href="" className="text-white font-light z-50">
              <p>Contacts</p>
            </a>
            
          </motion.div>
        </div>
      </div>
      */
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