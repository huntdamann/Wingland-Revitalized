import Image from "next/image";
import Head from "next/head";

import { motion } from 'motion/react'

export default function Stats({number, description}) {
  return (
    <>

        <div className="flex w-[10rem] gap-2  p-3">

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} 
                transition={{delay: 0.2}}
                className="text-amber-400 font-bold text-3xl">
                    
                    
                    {number}
            </motion.div>
            <div className="w-[10rem] font-bold">
                {description}
            </div>
        </div>    

    </>
  );
}
