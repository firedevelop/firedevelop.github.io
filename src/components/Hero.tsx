import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    'Desarrollador Full Stack',
    'Creador de Experiencias Web',
    'Especialista en React',
    'Apasionado por la Tecnología'
  ]

  useEffect(() => {
    const currentText = texts[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Hola, soy{' '}
                <span className="text-gradient">FireDevelop</span>
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 h-12 flex items-center">
                <span className="border-r-2 border-primary-600 pr-2 animate-pulse">
                  {displayText}
                </span>
              </div>
              
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Transformo ideas en experiencias digitales excepcionales. Especializado en 
                desarrollo web moderno con tecnologías como React, Node.js y bases de datos. 
                ¡Construyamos algo increíble juntos!
              </p>
            </div>

            {/* Botones de acción - Con z-index alto para evitar solapamiento */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver Proyectos
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary flex items-center justify-center gap-2 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Contactame
              </button>
            </div>

            {/* Enlaces sociales */}
            <div className="flex gap-4 relative z-20">
              <a
                href="https://github.com/firedevelop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/firedevelop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contacto@firedevelop.com"
                className="p-3 bg-gray-100 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Imagen/Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center relative z-10">
            <div className="w-80 h-80 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-8xl shadow-2xl animate-float">
              <i className="fas fa-user-tie"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  )
}

export default Hero
