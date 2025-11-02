"use client"

import { motion } from "framer-motion"
import { Bot } from "lucide-react"

export function RoboAnimation() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <motion.div
            style={{ position: 'absolute', inset: '-1rem', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '9999px', filter: 'blur(24px)' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <Bot className="w-32 h-32 text-purple-500" />
        </div>
      </motion.div>
    </div>
  )
}