import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxBackground = ({ children, speed = 0.5, className = "" }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ParallaxBackground

