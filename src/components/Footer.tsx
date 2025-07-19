import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Navegación",
      links: [
        { name: "Inicio", href: "#hero" },
        { name: "Sobre Mí", href: "#about" },
        { name: "Habilidades", href: "#skills" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" }
      ]
    },
    {
      title: "Proyectos",
      links: [
        { name: "E-commerce Platform", href: "https://ecommerce-demo.firedevelop.com" },
        { name: "Task Management", href: "https://tasks.firedevelop.com" },
        { name: "Weather Dashboard", href: "https://weather.firedevelop.com" },
        { name: "Ver Todos", href: "#projects" }
      ]
    },
    {
      title: "Contacto",
      links: [
        { name: "contacto@firedevelop.com", href: "mailto:contacto@firedevelop.com" },
        { name: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { name: "GitHub", href: "https://github.com/firedevelop" },
        { name: "LinkedIn", href: "https://linkedin.com/in/firedevelop" }
      ]
    }
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Fire<span className="text-primary-400">Develop</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Desarrollador Full Stack apasionado por crear soluciones web 
                innovadoras y experiencias digitales excepcionales.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: "fab fa-github", href: "https://github.com/firedevelop", name: "GitHub" },
                { icon: "fab fa-linkedin", href: "https://linkedin.com/in/firedevelop", name: "LinkedIn" },
                { icon: "fab fa-twitter", href: "https://twitter.com/firedevelop", name: "Twitter" },
                { icon: "fas fa-envelope", href: "mailto:contacto@firedevelop.com", name: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  title={social.name}
                >
                  <i className={`${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} FireDevelop. Hecho con</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>y mucho café ☕</span>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
              >
                Política de Privacidad
              </a>
              <a
                href="/terms"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
              >
                Términos de Uso
              </a>
              <a
                href="/sitemap.xml"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
              >
                Sitemap
              </a>
            </div>
          </div>

          {/* Technical Info */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
              <p>
                Desarrollado con React, TypeScript y TailwindCSS
              </p>
              <p>
                Versión 2.0 • Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 z-50"
        title="Volver al inicio"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  )
}

export default Footer
