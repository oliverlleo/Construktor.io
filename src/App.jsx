import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, 
  Download, 
  Blocks, 
  Zap, 
  Shield, 
  Layers, 
  Sparkles,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'
import AnimatedSection from './components/AnimatedSection.jsx'
import ParallaxBackground from './components/ParallaxBackground.jsx'
import InteractiveCard from './components/InteractiveCard.jsx'
import FloatingElements from './components/FloatingElements.jsx'
import TypewriterText from './components/TypewriterText.jsx'
import ModularLogo from './components/ModularLogo.jsx'
import ProductGallery from './components/ProductGallery.jsx'
import InterfaceShowcase from './components/InterfaceShowcase.jsx'
import VideoShowcase from './components/VideoShowcase.jsx'
import ToolAccessSection from './components/ToolAccessSection.jsx'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  // Smooth spring animation for scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Navegação suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Textos para o efeito typewriter
  const typewriterTexts = [
    "Onde sua gestão ganha forma",
    "Construindo eficiência",
    "Modularidade e controle",
    "Inovação em processos"
  ]

  // Dados dos produtos
  const products = [
    { name: 'tshirt_purple_full_logo_discreet_right_chest_v3', src: '/src/assets/images/products/tshirt_purple_full_logo_discreet_right_chest_v3.webp', alt: 'Camiseta Roxa Construktor' },
    { name: 'tshirt_design_white_v2', src: '/src/assets/images/products/tshirt_design_white_v2.webp', alt: 'Camiseta Branca Design' },
    { name: 'social_shirt_purple_full_logo_discreet_right_chest', src: '/src/assets/images/products/social_shirt_purple_full_logo_discreet_right_chest.webp', alt: 'Camisa Social Roxa' },
    { name: 'tshirt_white_full_logo_discreet_right_chest', src: '/src/assets/images/products/tshirt_white_full_logo_discreet_right_chest.webp', alt: 'Camiseta Branca Logo' },
    { name: 'tshirt_design_purple_v2', src: '/src/assets/images/products/tshirt_design_purple_v2.webp', alt: 'Camiseta Roxa Design' },
    { name: 'mousepad_design', src: '/src/assets/images/products/mousepad_design.webp', alt: 'Mousepad Construktor' },
    { name: 'tshirt_gray_full_logo_discreet_right_chest', src: '/src/assets/images/products/tshirt_gray_full_logo_discreet_right_chest.webp', alt: 'Camiseta Cinza' },
    { name: 'business_card_front_final_v3', src: '/src/assets/images/products/business_card_front_final_v3(1).webp', alt: 'Cartão de Visita' },
    { name: 'social_shirt_white_full_logo_discreet_right_chest', src: '/src/assets/images/products/social_shirt_white_full_logo_discreet_right_chest.webp', alt: 'Camisa Social Branca' },
    { name: 'tshirt_design_gray_v2', src: '/src/assets/images/products/tshirt_design_gray_v2.webp', alt: 'Camiseta Cinza Design' },
    { name: 'water_bottle_design', src: '/src/assets/images/products/water_bottle_design.webp', alt: 'Garrafa de Água' },
    { name: 'hoodie_black_full_logo_discreet_right_chest_v2', src: '/src/assets/images/products/hoodie_black_full_logo_discreet_right_chest_v2.webp', alt: 'Moletom Preto' },
    { name: 'mug_design', src: '/src/assets/images/products/mug_design.webp', alt: 'Caneca Construktor' },
    { name: 'business_card_front_black_premium', src: '/src/assets/images/products/business_card_front_black_premium.png', alt: 'Cartão Premium Preto' },
    { name: 'social_media_post_construktor', src: '/src/assets/images/products/social_media_post_construktor.webp', alt: 'Post Redes Sociais' },
    { name: 'presentation_title_slide', src: '/src/assets/images/products/presentation_title_slide.webp', alt: 'Slide de Apresentação' },
    { name: 'linkedin_banner', src: '/src/assets/images/products/linkedin_banner.webp', alt: 'Banner LinkedIn' },
    { name: 'mug_design_creative_purple', src: '/src/assets/images/products/mug_design_creative_purple.png', alt: 'Caneca Criativa Roxa' }
  ]

  // URL da ferramenta Construktor
  const toolUrl = 'https://oliverlleo.github.io/Construktor/'
  const videoSrc = '/src/assets/videos/Designsemnome.mp4'

  return (
    <div className="min-h-screen bg-white parallax-container">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 transform-origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header/Navigation */}
      <motion.header 
        className="fixed top-0 w-full z-40 glass-effect"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <ModularLogo size={50} />
              <span className="text-2xl font-bold construktor-text-gradient">Construktor</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: "Início", id: "home" },
                { label: "Sistema", id: "sistema" },
                { label: "Benefícios", id: "beneficios" },
                { label: "Produtos", id: "produtos" },
                { label: "Contato", id: "contato" }
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-purple-600 transition-colors relative"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  { label: "Início", id: "home" },
                  { label: "Sistema", id: "sistema" },
                  { label: "Benefícios", id: "beneficios" },
                  { label: "Produtos", id: "produtos" },
                  { label: "Contato", id: "contato" }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-purple-600 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Parallax Background */}
        <ParallaxBackground speed={0.5} className="absolute inset-0">
          <div className="construktor-gradient opacity-10" />
        </ParallaxBackground>
        
        {/* Floating Elements */}
        <FloatingElements />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            style={{ opacity, scale }}
          >
            <AnimatedSection delay={0.2}>
              <Badge className="mb-6 construktor-gradient text-white border-0">
                <Sparkles className="w-4 h-4 mr-2" />
                Inovação em Gestão de Processos
              </Badge>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} direction="scale">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <TypewriterText 
                  texts={typewriterTexts}
                  className="construktor-text-gradient"
                  speed={80}
                  deleteSpeed={40}
                  pauseTime={3000}
                />
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                O Construktor é um sistema inovador que empodera gestores e empresas a construir 
                e otimizar seus processos de forma visual e intuitiva. Transforme complexidade em resultados sólidos.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.8} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="construktor-gradient text-white border-0 shadow-lg"
                    onClick={() => scrollToSection('sistema')}
                  >
                    Explore o Construktor
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50"
                    onClick={() => scrollToSection('produtos')}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Manual da Marca
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('sistema')}
          >
            <ChevronDown className="w-6 h-6 text-purple-600" />
          </motion.div>
        </motion.div>
      </section>

      {/* Sistema Section - Agora com Vídeo */}
      <section id="sistema" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 construktor-text-gradient">
                Veja o Construktor em Ação
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubra como é simples e intuitivo construir sistemas com nossa ferramenta. 
                Assista ao vídeo e depois experimente você mesmo!
              </p>
            </div>
          </AnimatedSection>

          {/* Video Showcase */}
          <AnimatedSection delay={0.3}>
            <VideoShowcase 
              videoSrc={videoSrc}
              toolUrl={toolUrl}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Seção de Acesso à Ferramenta */}
      <ToolAccessSection toolUrl={toolUrl} />

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 construktor-text-gradient">
              Controle, Eficiência e Inovação ao Seu Alcance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido para gestores de operações, líderes de equipes e donos de PMEs que buscam 
              otimizar tempo e recursos, ter clareza nos processos e escalar o negócio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Eficiência",
                description: "Otimização de tempo e recursos para máxima produtividade.",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Controle",
                description: "Domínio completo sobre os processos e resultados.",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Modularidade",
                description: "Flexibilidade e adaptabilidade para diferentes necessidades.",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Poder",
                description: "Capacidade de transformar e otimizar a gestão.",
                color: "from-red-500 to-red-600"
              },
              {
                title: "Inovação",
                description: "Soluções modernas e à frente do mercado.",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                title: "Clareza",
                description: "Visibilidade total dos processos e métricas importantes.",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full construktor-hover-scale border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 construktor-text-gradient">
              A Essência Construktor em Cada Detalhe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa identidade visual reflete a modernidade, modularidade e eficiência do Construktor. 
              Explore a aplicação da nossa marca em diversos materiais.
            </p>
          </motion.div>

          {/* Paleta de Cores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Paleta de Cores</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Roxo Escuro", color: "#6A1B9A", description: "Base" },
                { name: "Roxo Claro", color: "#9C27B0", description: "Destaque" },
                { name: "Cinza Escuro", color: "#333333", description: "Texto" },
                { name: "Branco", color: "#FFFFFF", description: "Fundo" }
              ].map((colorItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white"
                    style={{ backgroundColor: colorItem.color }}
                  ></div>
                  <p className="font-semibold">{colorItem.name}</p>
                  <p className="text-sm text-gray-600">{colorItem.description}</p>
                  <p className="text-xs text-gray-500 font-mono">{colorItem.color}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download do Manual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-2xl mx-auto construktor-hover-scale border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Manual da Marca Construktor</CardTitle>
                <CardDescription className="text-lg">
                  Para uma compreensão completa da nossa identidade, baixe o Manual da Marca Construktor. 
                  Este documento detalha nossos fundamentos estratégicos, diretrizes visuais e verbais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  size="lg" 
                  className="construktor-gradient text-white border-0"
                  onClick={() => {
                    // Aqui será implementado o download do PDF
                    const link = document.createElement('a')
                    link.href = '/src/assets/documents/manual_da_marca_construktor.pdf'
                    link.download = 'Manual_da_Marca_Construktor.pdf'
                    link.click()
                  }}
                >
                  <Download className="mr-2 w-5 h-5" />
                  Baixar Manual da Marca (PDF)
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 construktor-text-gradient">
                A Essência Construktor em Cada Detalhe
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nossa identidade visual reflete a modernidade, modularidade e eficiência do Construktor. 
                Explore a aplicação da nossa marca em diversos materiais.
              </p>
            </div>
          </AnimatedSection>

          {/* Interface da Ferramenta */}
          <AnimatedSection delay={0.2}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Interface do Sistema</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Veja como é simples e intuitivo trabalhar com o Construktor
                </p>
              </div>
              <InterfaceShowcase interfaceImage="/src/assets/images/products/Designsemnome(37).png" />
            </div>
          </AnimatedSection>

          {/* Galeria de Produtos */}
          <AnimatedSection delay={0.4}>
            <ProductGallery products={products} />
          </AnimatedSection>

          {/* Paleta de Cores */}
          <AnimatedSection delay={0.6}>
            <div className="mt-20 text-center">
              <h3 className="text-3xl font-bold mb-8">Paleta de Cores</h3>
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[
                  { name: "Roxo Escuro", color: "#6A1B9A", code: "#6A1B9A", role: "Base" },
                  { name: "Roxo Claro", color: "#9C27B0", code: "#9C27B0", role: "Destaque" },
                  { name: "Cinza Escuro", color: "#333333", code: "#333333", role: "Texto" },
                  { name: "Branco", color: "#FFFFFF", code: "#FFFFFF", role: "Fundo" }
                ].map((colorItem, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white"
                      style={{ backgroundColor: colorItem.color }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <h4 className="font-semibold text-sm">{colorItem.name}</h4>
                    <p className="text-xs text-gray-500">{colorItem.role}</p>
                    <p className="text-xs font-mono text-gray-400">{colorItem.code}</p>
                  </motion.div>
                ))}
              </div>

              {/* Download do Manual */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-4">Manual da Marca Construktor</h4>
                <p className="text-gray-600 mb-6">
                  Para uma compreensão completa da nossa identidade, baixe o Manual da Marca Construktor. 
                  Este documento detalha nossos fundamentos estratégicos, diretrizes visuais e verbais.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="construktor-gradient text-white border-0"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = '/src/assets/documents/manual_da_marca_construktor.pdf'
                      link.download = 'Manual_da_Marca_Construktor.pdf'
                      link.click()
                    }}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Baixar Manual da Marca (PDF)
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 construktor-text-gradient">
              Fale Conosco
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Tem dúvidas ou quer saber mais sobre como o Construktor pode transformar a gestão do seu negócio? 
              Entre em contato conosco. Nossa equipe está pronta para ajudar você a construir o futuro da sua eficiência.
            </p>
            
            <Button 
              size="lg" 
              className="construktor-gradient text-white border-0 construktor-hover-scale"
            >
              Entre em Contato
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="construktor-logo"></div>
              <span className="text-2xl font-bold">Construktor</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Sua gestão, seus blocos.</p>
              <p className="text-sm text-gray-500">
                © 2025 Construktor. Construindo a eficiência do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

