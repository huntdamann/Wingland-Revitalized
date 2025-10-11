import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import Head from "next/head";

import { reviews }  from "../data/reviewData";


import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import ReviewCard from "@/components/ReviewCard";
export default function Testimonials() {


    const descriptions = ['Yearz in the GAME', 'Wingz of the Year'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextReview = reviews[(currentIndex + 1) % reviews.length];



    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 4000);
        return () => clearInterval(interval);
      }, []);
      

  return (
    <>
    
        <section className="bg-black text-white  p-6 gap-8 flex text-center flex-col min-h-[100dvh]">

           
           <h2>Word On The Street</h2>

           <div className="testimonial-wrapper">
            <AnimatePresence mode="wait">
            <motion.div className="testimonial-track">
                <motion.div key={reviews[currentIndex].id}  initial={{opacity: 0, x: 30}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x:-30}} className="testimonial-active">
                    <ReviewCard review={reviews[currentIndex]} />
                </motion.div>
                <motion.div animate={{filter: "blur(3px)", scale: 0.5, x: 10}}  className="testimonial-next">
                    <ReviewCard review={nextReview} />
                </motion.div>

            </motion.div>
            </AnimatePresence>
            
           </div>
           

        </section>
      
    </>
  );
}
