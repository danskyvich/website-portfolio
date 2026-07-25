import {motion} from "framer-motion"

export default function ButtonSlantedBg({text}:{text: string}) {
    return (
      <motion.div className="flex relative w-fit h-fit border border-(--color-line) items-center justify-center px-5 py-2 text-[0.9rem] bg-[repeating-linear-gradient(315deg,var(--color-line)_0,var(--color-line)_1px,transparent_1px,transparent_50%)] bg-size-[8px_8px] cursor-pointer">
        <motion.div className="absolute z-50 inset-0 left-0 p-5 bg-(--color-brand=purple)"/>
        <a href="">{text}</a>
      </motion.div>
    );
} 