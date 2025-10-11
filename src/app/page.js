"use client"


import Image from "next/image";
import Header from "@/slices/Header";
import Hero from "@/slices/Hero"
import Service from "@/slices/Service";
import Welcome from "@/slices/Welcome";
import Preloader from "../slices/Preloader";
import MTW from "@/slices/MTW";
import Blog from "@/slices/Blog";
import Menu from "@/slices/Menu";
import Footer from "@/slices/Footer";
import Testimonials from "@/slices/Testimonials";

import Head from "next/head";
import { useState } from "react";

export default function Home() {

  const [showMain, setShowMain] = useState(false);




  return (
    <>

    {!showMain && <Preloader onFinish={() => setShowMain(true)} />}

    
      <Header />
      <Hero />
      <Service />
      <Welcome />
      <MTW />
      <Blog />
      <Testimonials />
      <Menu />
      <Footer />
      
    </>
  );
}
