"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ModalProps {
  toggle: string | undefined;
  header: string;
  message: string | undefined;
  icon: React.ReactNode;
}

export default function Modal({ toggle, message, header, icon }: ModalProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!toggle) return
    setIsVisible(true)
    const timer = setTimeout(() => setIsVisible(false), 4000);
    return () => clearTimeout(timer);
  }, [toggle]);

  return (
    <AnimatePresence>
      {toggle && isVisible && (
        <motion.div 
        className="fixed flex flex-col z-50 bottom-5 right-10 bg-(--color-background) border-(--color-line) border-2 rounded-xl"
        initial={{ opacity: 0, x: 20}}
        animate={{ opacity: 1, x: 0}}
        exit={{ opacity: 0, x: 20}}
        >
          <div className="flex w-full h-fit gap-2 items-center border-b border-(--color-line) px-5 py-3">
            {icon}
            <p className="text-[1rem] font-mono">{header}</p>
          </div>
          <p className="text-[0.9rem] px-5 py-2">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
