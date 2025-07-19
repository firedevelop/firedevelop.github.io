import React from 'react'
import { Code2, Users, Clock, Award } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Sobre <span className="text-gradient">Mí</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Soy un desarrollador Full Stack apasionado por crear soluciones web 
                  innovadoras y funcionales. Con experiencia en tecnologías modernas, 
                  me especializo en construir aplicaciones escalables y de alto rendimiento.
                </p>
                
                <p>
                  Mi enfoque se centra en la experiencia del usuario y las mejores prácticas 
                  de desarrollo. Disfruto trabajar en equipo y siempre estoy buscando nuevos 
                  desafíos que me permitan crecer profesionalmente.
                </p>
                
                <p>
                  Cuando no estoy programando, me gusta explorar nuevas tecnologías, 
                  contribuir a proyectos de código abierto y compartir conocimientos 
                  con la comunidad de desarrolladores.
                </p>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">25+</div>
                <div className="text-sm text-gray-600">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">3+</div>
                <div className="text-sm text-gray-600">Años Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">Tecnologías</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Imagen/Ícono - Con z-index controlado para evitar solapamiento */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative z-10">
              {/* Círculo principal con ícono rotatorio - Aislado del resto del contenido */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 relative isolate">
                <div className="text-6xl sm:text-7xl animate-rotate-icon">
                  <Code2 className="w-24 h-24 sm:w-32 sm:h-32" />
                </div>
                
                {/* Elementos decorativos de fondo */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-400 rounded-full opacity-70"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary-300 rounded-full opacity-50"></div>
                <div className="absolute top-1/4 -right-8 w-6 h-6 bg-white rounded-full opacity-40"></div>
              </div>
              
              {/* Círculos decorativos adicionales - Con z-index más bajo */}
              <div className="absolute -z-10 -top-8 -left-8 w-16 h-16 bg-primary-200 rounded-full animate-pulse"></div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-12 h-12 bg-accent-200 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Sección de fortalezas */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué trabajar conmigo?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Código Limpio",
                description: "Escribo código mantenible y bien documentado siguiendo las mejores prácticas."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Trabajo en Equipo",
                description: "Excelente comunicación y colaboración en equipos multidisciplinarios."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Entrega a Tiempo",
                description: "Cumplo con los plazos establecidos sin comprometer la calidad del trabajo."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Mejora Continua",
                description: "Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="text-primary-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
