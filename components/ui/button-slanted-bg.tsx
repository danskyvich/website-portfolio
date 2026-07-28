"use client";

import { motion, Variants } from "framer-motion";

export default function ButtonSlantedBg({
  text,
  link,
  isDownload,
}: {
  text: string;
  link: string;
  isDownload?: boolean;
}) {
  const divToRight = {
    rest: {
      width: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      width: "200px",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  } as const satisfies Variants;

  return (
    <motion.a
      className="relative flex overflow-hidden border border-(--color-line) cursor-pointer px-5 py-2 text-[0.9rem] bg-[repeating-linear-gradient(315deg,var(--color-line)_0,var(--color-line)_1px,transparent_1px,transparent_50%)] bg-size-[8px_8px]"
      href={link}
      download={isDownload ? "" : undefined}
      initial="rest"
      whileHover="hover"
      whileTap="hover"
    >
      <motion.div
        className="absolute inset-y-0 left-0 bg-linear-to-r from-(--color-brand-blue) to-(--color-brand-purple)"
        variants={divToRight}
      />
      <p className="relative z-10">{text}</p>
    </motion.a>
  );
}
