import { motion } from "framer-motion"

export default function Button({text, link, icon}: {text:string, link:string, icon?: React.ReactNode}) {
    return (
      <motion.a
        className="flex cursor-pointer w-full h-full items-center justify-center text-[0.9rem] bg-(--color-brand-blue-dark) hover:bg-[#31314d] rounded-xl py-2 mx-2 gap-2"
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        href={link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {text}
        {icon}
      </motion.a>
    );
}