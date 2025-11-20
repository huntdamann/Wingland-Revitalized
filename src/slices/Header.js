"use client"

import Image from "next/image";
import { useState, useEffect } from "react";


//Icons 
import { FiAlignJustify, FiSearch, FiShoppingCart } from "react-icons/fi";


export default function Header({  setOpen }) {


    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);



  const handleScroll = () => {

    if (window.scrollY > lastScrollY) {

      setShowNav(false)
    }
    else {
      setShowNav(true)
    }

    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
    <header className={`fixed top-0 left-0 w-screen transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } bg-red-600 z-50 flex justify-between gap-7 p-7  items-center `}>
        <FiAlignJustify onClick={() => setOpen(true)} className="text-3xl" />
        <div className="absolute left-1/2 transform -translate-x-1/2">

        <Image className="border" src="/logo-website.png" width={80} height={100} alt="Logo" /> 

        </div>

        <nav>

            <ul className="hidden">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>

            </ul>
        </nav>
        <div className="flex gap-6">
        <FiSearch className="text-2xl" />
        <FiShoppingCart className="text-2xl" />
        </div>
       
    </header>
    
    </>
  );
}
