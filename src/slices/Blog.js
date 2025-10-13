import Image from "next/image";
import Head from "next/head";
import BlogCard from "@/components/BlogCard";

import { FaUtensils } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";



export default function Blog() {
  
    const descriptions = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quae. Repellendus quis nisi accusantium aut.']

  
    return (

    <>
    
        <section className="flex text-center flex-col items-center gap-4 p-3 mb-[5rem]">


            <h2>Blog</h2>
            <BlogCard image='/stock/stock-chicken-1.jpeg' title={"How To Cook Wings Properly"} description={descriptions[0]} lookNumber={24} commentNumber={8} author={"Webmaster"} />
            <BlogCard image='/wings_rotel.jpeg' title={"Out with 'Marry Me Chicken', In with Wings & Rotel"} description={descriptions[0]} lookNumber={33} commentNumber={33} author={"Webmaster"} />

        </section>
      
    </>
  );
}
