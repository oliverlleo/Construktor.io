import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, ExternalLink, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const VideoShowcase = ({ videoSrc, toolUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [videoEnded, setVideoEnded] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
    }

    const handleEnded = () => {
      setVideoEnded(true)
      setIsPlaying(false)
    }

    video.addEventListener('timeupdate', updateProgress)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('timeupdate', updateProgress)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
      setShowControls(false)
      setVideoEnded(false)
    }
    setIsPlaying(!isPlaying)
  }

  const resetVideo = () => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    setProgress(0)
    setVideoEnded(false)
    setIsPlaying(false)
    setShowControls(true)
  }

  const handleVideoClick = () => {
    if (!isPlaying) {
      togglePlay()
    }
  }

  return (
    <div className="relative">
      {/* Container principal do vídeo */}
      <motion.div 
        className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 rounded-3xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Efeitos de fundo animados */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent animate-pulse" />
        
        {/* Vídeo */}
        <div className="relative aspect-video">
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover cursor-pointer"
            onClick={handleVideoClick}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => !isPlaying || setShowControls(false)}
          />

          {/* Overlay de controles */}
          <AnimatePresence>
            {(showControls || !isPlaying) && (
              <motion.div
                className="absolute inset-0 bg-black/30 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Botão de play central */}
                {!isPlaying && (
                  <motion.button
                    onClick={togglePlay}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Play className="w-8 h-8 text-purple-600 ml-1" />
                  </motion.button>
                )}

                {/* Controles inferiores */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={togglePlay}
                    className="bg-white/90 border-white/50 text-gray-800 hover:bg-white"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetVideo}
                    className="bg-white/90 border-white/50 text-gray-800 hover:bg-white"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>

                  {/* Barra de progresso */}
                  <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay de vídeo finalizado */}
          <AnimatePresence>
            {videoEnded && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-800/70 to-transparent flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center text-white p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                  </motion.div>
                  
                  <motion.h3
                    className="text-2xl font-bold mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Pronto para Construir?
                  </motion.h3>
                  
                  <motion.p
                    className="text-lg mb-6 text-gray-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Agora que você viu como funciona, experimente a ferramenta!
                  </motion.p>

                  <motion.div
                    className="space-y-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-200"
                      onClick={() => window.open(toolUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 w-5 h-5" />
                      Acessar Construktor
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetVideo}
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 ml-4"
                    >
                      <RotateCcw className="mr-2 w-4 h-4" />
                      Ver Novamente
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Seção de call-to-action abaixo do vídeo */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              step: "1",
              title: "Assista",
              description: "Veja como é simples usar o Construktor",
              icon: Play
            },
            {
              step: "2", 
              title: "Entenda",
              description: "Compreenda o poder da construção modular",
              icon: Sparkles
            },
            {
              step: "3",
              title: "Experimente",
              description: "Acesse a ferramenta e comece a construir",
              icon: ExternalLink
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
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Botão principal de acesso */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold px-8 py-4 text-lg hover:from-purple-700 hover:to-purple-800 shadow-lg"
            onClick={() => window.open(toolUrl, '_blank')}
          >
            <ExternalLink className="mr-3 w-6 h-6" />
            Começar a Construir Agora
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default VideoShowcase

