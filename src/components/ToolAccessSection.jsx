import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Zap, Target, Rocket, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const ToolAccessSection = ({ toolUrl }) => {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    {
      icon: Zap,
      title: "Construção Visual",
      description: "Interface drag-and-drop intuitiva"
    },
    {
      icon: Target,
      title: "Precisão Modular",
      description: "Componentes organizados e reutilizáveis"
    },
    {
      icon: Rocket,
      title: "Deploy Rápido",
      description: "Do conceito à implementação em minutos"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-300 rounded-full opacity-30 animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400 rounded-full opacity-10 animate-ping" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
              Hora de Construir
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transforme suas ideias em realidade com a ferramenta mais intuitiva 
            para construção de sistemas. Acesse agora e comece a criar!
          </p>
        </motion.div>

        {/* Grid de features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-action principal */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
              onClick={() => window.open(toolUrl, '_blank')}
            >
              {/* Efeito de brilho animado */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: isHovered ? '100%' : '-100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <span className="relative z-10 flex items-center">
                <ExternalLink className="mr-3 w-6 h-6" />
                Acessar Construktor
                <motion.div
                  className="ml-3"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
            </Button>
          </motion.div>

          <motion.p
            className="mt-6 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Gratuito para começar • Sem necessidade de cartão de crédito
          </motion.p>
        </motion.div>

        {/* Seção de benefícios rápidos */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Por que escolher o Construktor?
              </h3>
              <ul className="space-y-4">
                {[
                  "Interface intuitiva e visual",
                  "Componentes pré-construídos",
                  "Integração com sistemas existentes",
                  "Suporte completo e documentação"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <motion.div
                className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Zap className="w-16 h-16 text-yellow-400" />
              </motion.div>
              <p className="text-xl font-semibold">
                Comece a construir em segundos!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ToolAccessSection

