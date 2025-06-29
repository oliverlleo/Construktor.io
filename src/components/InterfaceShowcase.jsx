import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const InterfaceShowcase = ({ interfaceImage }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const features = [
    {
      title: "Biblioteca de Componentes",
      description: "Arraste os componentes para criar seu sistema",
      position: { x: "15%", y: "25%" }
    },
    {
      title: "Módulos do Sistema", 
      description: "Organize funcionalidades em categorias lógicas",
      position: { x: "50%", y: "20%" }
    },
    {
      title: "Área de Trabalho",
      description: "Construa e configure seus fluxos",
      position: { x: "15%", y: "45%" }
    },
    {
      title: "Entidades",
      description: "Crie e gerencie entidades do sistema",
      position: { x: "15%", y: "60%" }
    }
  ]

  return (
    <div className="relative">
      {/* Interface Principal */}
      <motion.div 
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={interfaceImage}
          alt="Interface do Sistema Construktor"
          className="w-full h-auto"
        />

        {/* Pontos interativos */}
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 bg-purple-600 rounded-full cursor-pointer group"
            style={{ 
              left: feature.position.x, 
              top: feature.position.y,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 0 0 rgba(147, 51, 234, 0.7)',
                '0 0 0 10px rgba(147, 51, 234, 0)',
                '0 0 0 0 rgba(147, 51, 234, 0)'
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: index * 0.5
            }}
            whileHover={{ scale: 1.3 }}
          >
            {/* Tooltip */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
              <div className="font-semibold text-sm">{feature.title}</div>
              <div className="text-xs text-gray-300">{feature.description}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </motion.div>
        ))}

        {/* Overlay de demonstração */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isPlaying ? "100%" : "-100%" }}
          transition={{ duration: 3, repeat: isPlaying ? Infinity : 0 }}
        />
      </motion.div>

      {/* Controles */}
      <div className="flex justify-center mt-6 space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsPlaying(!isPlaying)}
          className="border-purple-600 text-purple-600 hover:bg-purple-50"
        >
          {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
          {isPlaying ? 'Pausar' : 'Demonstração'}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsPlaying(false)}
          className="border-gray-400 text-gray-600 hover:bg-gray-50"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reiniciar
        </Button>
      </div>

      {/* Descrição dos passos */}
      <motion.div
        className="mt-8 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {[
          {
            step: "1",
            title: "Crie módulos",
            description: "Organize as funcionalidades do seu sistema em módulos lógicos"
          },
          {
            step: "2", 
            title: "Arraste entidades",
            description: "Adicione entidades aos módulos e configure seus campos"
          },
          {
            step: "3",
            title: "Configure campos",
            description: "Defina tipos, validações e relacionamentos entre entidades"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
              {item.step}
            </div>
            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default InterfaceShowcase

