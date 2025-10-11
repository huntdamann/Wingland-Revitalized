import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import Head from "next/head";

import { FaUtensils } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";



export default function Service() {
  
    const descriptions = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quae. Repellendus quis nisi accusantium aut.']

  
    return (

    <>
    
        <section className="flex flex-col gap-4 p-3">

            <ServiceCard icon={<FaUtensils />} title={"Quality Food"} description={descriptions}  />
            <ServiceCard icon={<FaShippingFast />} title={"Fast Delivery"} description={descriptions}  />

            <ServiceCard icon={<TbWorld />} title={"Online Order"} description={descriptions}  />


        </section>
      
    </>
  );
}
