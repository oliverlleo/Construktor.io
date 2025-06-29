import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  duration = 0.8,
  once = true 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  const controls = useAnimation()

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: direction === "scale" ? 0.8 : 1,
      rotateY: direction === "rotateY" ? 90 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection

