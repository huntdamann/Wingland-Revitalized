import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import Head from "next/head";

import {motion } from 'motion/react'

export default function Footer() {


    const descriptions = ['Yearz in the GAME', 'Wingz of the Year'];


  return (
    <>
    
        
    <motion.footer
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs text-gray-500 py-4"
        >
          © Wingland 2025. All Rights Reserved — Crafted by 
          <a href="https://humann.design" target="_blank" className="font-semibold hover:underline ml-1">
            HUMANNDESIGN
          </a>
      </motion.footer>

    </>
  );
}
