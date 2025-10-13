import Image from "next/image";
import Head from "next/head";

export default function ServiceCard({icon, title, description}) {
  return (
    <>

        <div className="border dark:text-black p-7 rounded-md flex flex-col max-w-[25rem] gap-3 bg-red-100">


            <div className="text-2xl">

                {icon}
            </div>  
            <div>
                {title}    
            </div>  
            <div>
                {description}    
            </div>  
        </div>    

    </>
  );
}
