import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import Bento from "@/components/Bento";
import Head from "next/head";

export default function Welcome() {


    const descriptions = ['Yearz in the GAME', 'Wingz of the Year'];


  return (
    <>
    
        <section className="bg-black text-white text-center p-6 lg:p-12 gap-5 flex items-center flex-col min-h-[100dvh]">

            <Bento photo={"/stock/stock-chicken-main.jpeg"} photo1={"/stock/stock-chicken.jpeg"} photo2={"/stock/stock-chicken-1.jpeg"} photo3={"/stock/stock-chicken-2.jpeg"} /> 
            
            <div className="flex flex-col text-center items-center gap-[2rem] p-5">

              <h2>Welcome To Wingland</h2>


              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero mollitia eius necessitatibus? </span>
              <span className="lg:max-w-[30rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius, sunt quia mollitia fuga libero quaerat neque! Corrupti ad, ea sapiente reiciendis, nemo eaque iure necessitatibus, ut adipisci illum magni!</span>


            </div>
            
           

            <Stats number={10} description={descriptions[0]} />
            <Stats number={'3x'} description={descriptions[1]} />

           

        </section>
      
    </>
  );
}
