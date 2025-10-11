import Image from "next/image";
import Head from "next/head";
import { IoEyeSharp } from "react-icons/io5";
import { FaComments } from "react-icons/fa";

import { motion } from "motion/react";



export default function Bento({photo, photo1, photo2, photo3}) {
  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full">
        <motion.div initial={{y: 25, opacity: 0}} whileInView={{y:0, opacity: 1}} className="relative aspect-square rounded-md overflow-hidden">

        <Image
            src={photo}
             alt="Photo description"
            fill
            className="object-cover object-center"
        />

        </motion.div>
        <motion.div initial={{y: 25, opacity: 0}} whileInView={{y:0, opacity: 1}} className="relative aspect-square rounded-md overflow-hidden">

        <Image
            src={photo1}
            alt="Photo description"
            fill
            className="object-cover object-center"
        />

        </motion.div>
        <motion.div initial={{y: 25, opacity: 0}} whileInView={{y:0, opacity: 1}} className="relative aspect-square rounded-md overflow-hidden">

        <Image
            src={photo2}
            alt="Photo description"
            fill
            className="object-cover object-center"
        />

        </motion.div>
        <motion.div initial={{y: 25, opacity: 0}} whileInView={{y:0, opacity: 1}} className="relative aspect-square rounded-md overflow-hidden">

        <Image
            src={photo3}
            alt="Photo description"
            fill
            className="object-cover object-center"
        />

        </motion.div>
      </div>
    </>
  );
}
