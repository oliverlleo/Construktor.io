import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements = () => {
  const elements = [
    { size: 60, x: "10%", y: "20%", delay: 0 },
    { size: 40, x: "80%", y: "10%", delay: 1 },
    { size: 80, x: "15%", y: "70%", delay: 2 },
    { size: 50, x: "85%", y: "60%", delay: 1.5 },
    { size: 30, x: "50%", y: "15%", delay: 0.5 },
    { size: 70, x: "70%", y: "80%", delay: 2.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-lg opacity-10"
          style={{
            width: element.size,
            height: element.size,
            left: element.x,
            top: element.y,
            background: 'linear-gradient(135deg, #6A1B9A 0%, #9C27B0 100%)',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements

