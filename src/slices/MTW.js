import Image from "next/image";
import Head from "next/head";

import { motion } from 'motion/react'

export default function MTW() {
  return (
    <>


      <section className="min-h-screen flex flex-col gap-5 mb-[5rem] justify-center items-center text-center p-4">

        <h2>More Than Wings</h2>
        <div className="grid grid-cols-1 gap-2">

            <motion.div initial={{y: 25, opacity: 0}} whileInView={{y:0, opacity: 1}} className="relative min-h-[15rem] w-[30rem]  ">
              <Image src='/stock/stock-burger.jpg'  alt="flex" fill className="object-cover rounded-md" />
            </motion.div>
            <motion.div initial={{y: 25, opacity: 0}} whileInView={{y:0, opacity: 1}} className="relative min-h-[15rem] lg:max-w-[30rem]">
              <Image src='/stock/stock-hotdog.jpg'  alt="flex" fill className="object-cover rounded-md" />
            </motion.div>
            <motion.div initial={{y: 25, opacity: 0}} whileInView={{y:0, opacity: 1}} className="relative min-h-[15rem] lg:max-w-[30rem]">
              <Image src='/stock/stock-rice.jpeg'  alt="flex" fill className="object-cover rounded-md" />
            </motion.div>
            <motion.div initial={{y: 25, opacity: 0}} whileInView={{y:0, opacity: 1}} className="relative min-h-[15rem] lg:max-w-[30rem]">
              <Image src='/stock/stock-salad.jpg'  alt="flex" fill className="object-cover rounded-md"/>
            </motion.div>
        </div>
       
       <motion.div initial={{y:25}} whileInView={{y:0}} className="">
        <button className=" w-[10rem] hover:bg-red-200  p-3 rounded-md bg-red-400"> View Menu </button>


       </motion.div>
      </section>
        

    </>
  );
}
