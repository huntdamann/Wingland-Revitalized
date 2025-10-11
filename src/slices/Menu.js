import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import Head from "next/head";

import { motion } from "motion/react";
export default function Menu() {


    const descriptions = ['Yearz in the GAME', 'Wingz of the Year'];


  return (
    <>
    
        <section className="bg-black text-white  p-6 gap-8 flex text-center flex-col min-h-[100dvh]">

            <div className="flex flex-col items-center justify-center">
                <Image src='/logo-website.png' width={70} height={150} alt="Logo" />
                <h2>Wingland</h2>
            </div>
            

            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius, sunt quia mollitia fuga libero quaerat neque! Corrupti ad, ea sapiente reiciendis, nemo eaque iure necessitatibus, ut adipisci illum magni!</span>

            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className="relative min-h-[15rem]">
              <Image src='/schedule_2.png'  alt="flex" fill className="object-cover" />
            </motion.div>  


            <div className="flex flex-col gap-1 justify-center items-center">
                <span>Location | 824 Lorem, Texas, 70000</span>
                <span>Phone | 888-888-8888 </span>
                <span>Email | get2thechicken@gmail.com</span>

            </div>

           
           

        </section>
      
    </>
  );
}
