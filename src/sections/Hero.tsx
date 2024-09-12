"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png"
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from '@/assets/noodle.png';
import Image from "next/image";
import { easeInOut, motion, useScroll, useTransform,useMotionValueEvent } from "framer-motion";
import { useRef } from "react";


export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
  <section ref={heroRef} className="pt-8 pb-20 md:pd-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#2A8C82,#EAEEFE_100%)] overflow-x-clip">
    <div className="container">
      <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div className="tag">Version 1.0 is here</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-[#275950] to-[#2A8C82] text-transparent bg-clip-text mt-6 lg:left-0">
            Nexsys Platform
          </h1>
          <p className="text-xl text-[#260101] tracking-tight mt-6">
            Streamline your business with our all-in-one platform—powerful tools, 
            seamless integrations, and real-time insights to boost productivity and drive growth.
          </p>
          <div className="flex gap-1 item-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <motion.img 
          src={cogImage.src} 
          alt="cog Img" 
          className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6"
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 3,
            ease: "easeInOut",
          }}
          />
          <motion.img 
          src={cylinderImage.src} 
          width={230} 
          height={230} 
          alt="cylinder img"
          className="hidden md:block -top-8 -left-32 md:absolute"
          style={{
            translateY: translateY,
          }}
          />
          <motion.img 
          src={noodleImage.src} 
          width={220} 
          alt="Noodle Image"
          className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
          style={{
            rotate: 5,
            translateY: translateY,
          }}
          />
          
        </div>
     </div>
    </div>
  </section>
  );
};
