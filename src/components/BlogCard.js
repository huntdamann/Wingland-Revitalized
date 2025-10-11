import Image from "next/image";
import Head from "next/head";
import { IoEyeSharp } from "react-icons/io5";
import { FaComments } from "react-icons/fa";



export default function BlogCard({image, title, description, lookNumber, commentNumber, author}) {
  return (
    <>

        <div className="border p-7 rounded-md  text-center  justify-center flex flex-col gap-3 bg-red-100">


            <div className="text-xl font-extrabold">

                {title}
            </div>  
            <div className="relative rounded-2xl min-h-[15rem]">
              <Image src={image}  alt="flex" fill className="object-cover rounded-xl" />
            </div>  
            <div className="flex gap-4  items-center justify-center text-center">
                <div className="border-r-2  flex justify-center items-center gap-1 pr-2">
                    <IoEyeSharp />
                    {lookNumber}
                    

                </div>
                <div className="border-r-2 flex justify-center items-center gap-1 pr-3">
                    
                    <FaComments />
                    {commentNumber}
                </div>
                <div className="text-amber-500">
                    {author}
                </div>
            </div>
            <div>
                {description}    
            </div>  
        </div>    

    </>
  );
}
