import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contacto@firedevelop.com",
      href: "mailto:contacto@firedevelop.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      value: "Ciudad, País",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      href: "https://github.com/firedevelop",
      color: "hover:bg-gray-700"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/firedevelop",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      href: "https://twitter.com/firedevelop",
      color: "hover:bg-blue-400"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: "Discord",
      href: "https://discord.gg/firedevelop",
      color: "hover:bg-indigo-600"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            ¿Hablamos<span className="text-gradient">?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
            ¡No dudes en contactarme!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-600 mb-8">
                Puedes contactarme a través de cualquiera de estos medios. 
                Respondo rápidamente a todos los mensajes.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Sígueme en redes
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-full text-gray-600 transition-all duration-300 ${social.color} hover:text-white hover:-translate-y-1 hover:shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-green-800">
                  Disponible para proyectos
                </h4>
              </div>
              <p className="text-green-700 text-sm">
                Actualmente acepto nuevos proyectos freelance y oportunidades de trabajo.
              </p>
            </div>
          </div>

          {/* Contact Form - Google Forms Embed */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíame un mensaje
            </h3>
            <p className="text-gray-600 mb-6">
              Completa este formulario y me pondré en contacto contigo lo antes posible.
            </p>
            
            {/* Google Form Container */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="Formulario de Contacto"
              >
                Cargando…
              </iframe>
            </div>

            {/* Alternative Contact Message */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>¿Prefieres email directo?</strong> También puedes escribirme directamente a{' '}
                <a 
                  href="mailto:contacto@firedevelop.com" 
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  contacto@firedevelop.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para empezar?
            </h3>
            <p className="text-gray-600 mb-6">
              Convertir tus ideas en realidad digital. Hablemos sobre tu próximo proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contacto@firedevelop.com"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Enviar Email
              </a>
              <a
                href="https://calendly.com/firedevelop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <i className="fas fa-calendar-alt"></i>
                Agendar Llamada
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
