"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampTitle({ Title }: { Title: string }) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{ 
          background: 'linear-gradient(to bottom right, rgb(203 213 225), rgba(255, 255, 255, 0.8))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          textAlign: 'center',
          fontSize: '3rem',
          fontWeight: 500,
          letterSpacing: '-0.025em',
          marginTop: '-2rem'
        }}
      >
        {Title}
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-screen flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] w-full rounded-md z-0 -mt-60",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            inset: 'auto',
            right: '50%',
            height: '14rem',
            overflow: 'visible',
            width: '30rem',
            backgroundImage: 'conic-gradient(from 70deg at center top, #854CFF, transparent, transparent)',
            color: 'white',
          }}
        >
          <div className="absolute  w-[100%] left-0 bg-[#0A0A0A] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-[#0A0A0A]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            inset: 'auto',
            left: '50%',
            height: '14rem',
            width: '30rem',
            backgroundImage: 'conic-gradient(from 290deg at center top, transparent, transparent, #854CFF)',
            color: 'white',
          }}
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-[#0A0A0A]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-[#0A0A0A] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#0A0A0A] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#854CFF] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            inset: 'auto',
            zIndex: 30,
            height: '9rem',
            width: '16rem',
            transform: 'translateY(-6rem)',
            borderRadius: '9999px',
            backgroundColor: '#854CFF',
            filter: 'blur(40px)',
          }}
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            inset: 'auto',
            zIndex: 50,
            height: '0.125rem',
            width: '30rem',
            transform: 'translateY(-7rem)',
            backgroundColor: '#854CFF',
          }}
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#0A0A0A] "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
