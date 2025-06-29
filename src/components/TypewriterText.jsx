import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypewriterText = ({ 
  texts = [], 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = "" 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex]
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex(prev => (prev + 1) % texts.length)
        }
      } else {
        setCurrentText(fullText.slice(0, currentText.length + 1))
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime])

  return (
    <div className={className}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </div>
  )
}

export default TypewriterText

