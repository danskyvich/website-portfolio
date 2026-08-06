import { motion } from "framer-motion"

export default function LoopingText({className}:{className: string}) {
    return (
      <motion.div
        className={`${className} text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[0.95rem] absolute left-1/2 -translate-x-1/2 w-dvw h-fit whitespace-nowrap xl:text-[1rem] font-mono`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
        <span>
          font-display text-(--color-text-secondary) text-md whitespace-nowrap
          line-clamp-1 self-end w-full h-fit grid grid-cols-[200px_1fr_1fr]
          grid-rows-1 overflow-y-auto [writing-mode:rl] rotate-180 bg-clip-text
          text-transparent bg-linear-to-r from-[#000000] to-[#ffffff7d]
        </span>
        <span>
          font-display text-(--color-text-secondary) text-md whitespace-nowrap
          line-clamp-1 self-end w-full h-fit grid grid-cols-[200px_1fr_1fr]
          grid-rows-1 overflow-y-auto [writing-mode:rl] rotate-180 bg-clip-text
          text-transparent bg-linear-to-r from-[#000000] to-[#ffffff7d]
        </span>
      </motion.div>
    );
}