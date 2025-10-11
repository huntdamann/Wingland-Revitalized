import Image from "next/image";
import Head from "next/head";

export default function ReviewCard({review}) {
  return (
    <>

        <div className="border p-[3rem] rounded-md text-black flex flex-col w-[20rem] gap-3 relative bg-red-100">


            
            <Image className="border top-0 left-3 absolute" src={review.avatar} width={50} height={100} alt="Mascot" />
            <div className="absolute bottom-3 right-8">
                {review.author}    
            </div>  
            <div className="mb-1">
                {review.text}    
            </div>  
        </div>    

    </>
  );
}
