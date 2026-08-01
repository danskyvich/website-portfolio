import { motion } from "framer-motion"

export default function Button({text, link, icon, className, isDisabled}: {text:string, link:string, icon?: React.ReactNode, className?: string, isDisabled?: boolean}) {
    return (
      <motion.a
        className={` ${className} ${isDisabled ? "bg-(--color-brand-blue-super-dark) text-(--color-text-secondary)" : null} flex cursor-pointer w-full h-full items-center justify-center text-[0.9rem] bg-(--color-brand-blue-dark) hover:bg-[#31314d] rounded-xl py-2 mx-2 gap-2`}
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