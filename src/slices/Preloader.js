"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function Preloader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (like waiting for assets)
    const timer = setTimeout(() => {
      setLoading(false);
      onFinish?.(); // optional callback for parent
    }, 3000); // adjust to match your animation length
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="preloader-content">
            
            <Image  className="preloader-image" src="/logo-website.png" width={120} height={100} alt="Logo" /> 

            <h1 className="logo-text">Wingland</h1>
            <div className="loading-bar"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}