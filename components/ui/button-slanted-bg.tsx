import { motion, Variants } from "framer-motion";

// fix the framer motion
export default function ButtonSlantedBg({ text }: { text: string }) {
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
      width: "200px",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  } as const satisfies Variants;

  return (
    <motion.div className="flex border border-(--color-line) cursor-pointer px-5 py-2 text-[0.9rem] bg-[repeating-linear-gradient(315deg,var(--color-line)_0,var(--color-line)_1px,transparent_1px,transparent_50%)] bg-size-[8px_8px]"
        initial={divToRight}
    >
        <motion.div className=""/>
      <p>{text}</p>
    </motion.div>
  );
}
