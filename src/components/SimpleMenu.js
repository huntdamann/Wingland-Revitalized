"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import { RemoveScroll } from "react-remove-scroll";

export default function SimpleMenu({ open, setOpen }) {
  const [loading, setLoading] = useState(true);

 

  return (



    <AnimatePresence>
      { open  && (
        <RemoveScroll>
        <motion.div
          className="bg-red-800 z-50 left-0 top-0 flex text-white justify-center fixed items-center  w-screen h-screen"
          initial={{ opacity: 0, y: 300 }}
          animate={{opacity: 1, y: 0}}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
        < IoCloseCircle onClick={() => setOpen(false)} className="absolute text-2xl top-8 right-8" />


          <ul className="flex flex-col justify-center gap-10 items-center text-center  p-4 ">
            <li>
                Home
            </li>
            <li>
                Home
            </li>
            <li>
                Home
            </li>
            <li>
                Home
            </li>
          </ul>
          <Image className="border bottom-8 right-8 absolute" src='/avatars/chicken.png' width={70} height={100} alt="Mascot" />


        </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>

    
  );
}