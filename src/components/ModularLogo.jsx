import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ModularLogo = ({ size = 60, animated = true, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)

  const moduleVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: [1, 1.1, 1], 
      rotate: [0, 180, 360],
      transition: { duration: 0.6 }
    },
    float: {
      y: [0, -5, 0],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  }

  const containerVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      variants={containerVariants}
      initial="initial"
      animate={animated ? "float" : "initial"}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Container principal com gradiente */}
      <div 
        className="w-full h-full rounded-xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #6A1B9A 0%, #9C27B0 100%)',
        }}
      >
        {/* Módulos internos */}
        <div className="absolute inset-0 p-2">
          <div className="grid grid-cols-2 gap-1 h-full">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="bg-white rounded-sm"
                variants={moduleVariants}
                custom={index}
                animate={isHovered ? "hover" : animated ? "float" : "initial"}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>

        {/* Efeito de brilho */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          animate={{ 
            opacity: isHovered ? 0.2 : 0,
            x: isHovered ? "100%" : "-100%"
          }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  )
}

export default ModularLogo

