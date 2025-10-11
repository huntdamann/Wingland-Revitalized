import Image from "next/image";
import Head from "next/head";
import { motion } from 'motion/react'

export default function Hero() {


  return (
    <>
    
      <section className="mt-[4.5rem] bg-black text-white border p-4 flex flex-col gap-[3rem]">
        <h1>
            Enjoy The <span className="text-red-500"> Savory </span>  Side of Southern Charm
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, excepturi debitis! Possimus laudantium, sapiente quam aliquam animi nam iure reiciendis sit explicabo! Delectus dolorem commodi corrupti fugiat ducimus voluptatibus. Quisquam.
        Ullam quam impedit sit animi aut nostrum obcaecati. Eius aliquam aperiam culpa molestiae obcaecati quo dolore accusamus adipisci. Veritatis molestias adipisci dicta omnis minima quasi pariatur distinctio atque? Maiores, quaerat.</p>

        <button className="border w-[8rem] border-red-600 p-1 font-bold rounded-md">Order Now</button>

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: .5}} >

            <Image src='/hero.png' width={300} height={100} alt="Chicken Basket" />


        </motion.div>
      
      
      </section>

    </>
  );
}
