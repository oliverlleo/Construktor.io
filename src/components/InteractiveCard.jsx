import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'

const InteractiveCard = ({ 
  icon, 
  title, 
  description, 
  color = "from-purple-500 to-purple-600",
  delay = 0,
  children 
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <Card className="h-full border-0 shadow-lg overflow-hidden relative">
        <motion.div 
          className={`h-2 bg-gradient-to-r ${color}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          viewport={{ once: true }}
        />
        
        <CardHeader className="relative">
          <motion.div 
            className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${color} rounded-full flex items-center justify-center text-white`}
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 360 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          
          <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-gray-600">{description}</p>
          {children}
        </CardContent>

        {/* Efeito de brilho no hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          animate={{ 
            opacity: isHovered ? 0.1 : 0,
            x: isHovered ? "100%" : "-100%"
          }}
          transition={{ duration: 0.6 }}
        />
      </Card>
    </motion.div>
  )
}

export default InteractiveCard

