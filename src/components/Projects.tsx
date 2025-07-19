import React, { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
      github: "https://github.com/firedevelop/ecommerce-platform",
      demo: "https://ecommerce-demo.firedevelop.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
      github: "https://github.com/firedevelop/task-manager",
      demo: "https://tasks.firedevelop.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard meteorológico interactivo con visualizaciones de datos y pronósticos detallados.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      github: "https://github.com/firedevelop/weather-dashboard",
      demo: "https://weather.firedevelop.com",
      featured: true
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Red social con funcionalidades de posts, comentarios, likes y chat en tiempo real.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      github: "https://github.com/firedevelop/social-app",
      demo: "https://social.firedevelop.com",
      featured: false
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Sistema de gestión de aprendizaje con cursos, evaluaciones y seguimiento de progreso.",
      image: "/api/placeholder/400/250",
      technologies: ["Angular", "Django", "MySQL", "Docker"],
      github: "https://github.com/firedevelop/lms",
      demo: "https://lms.firedevelop.com",
      featured: false
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Aplicación de seguimiento fitness con métricas, rutinas y análisis de progreso.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Firebase", "Charts", "Google Fit API"],
      github: "https://github.com/firedevelop/fitness-tracker",
      demo: "https://fitness.firedevelop.com",
      featured: false
    }
  ]

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades técnicas 
            y creatividad en el desarrollo web.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                  <i className="fas fa-code"></i>
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-accent-100 text-accent-800 text-xs font-medium rounded-full">
                      Destacado
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAllProjects && projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(true)}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              Ver Más Proyectos ({projects.length - 3} más)
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAllProjects && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(false)}
              className="btn-secondary inline-flex items-center gap-2"
            >
              Mostrar Menos
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-600 mb-6">
              Me encantaría ayudarte a convertir tus ideas en realidad.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <i className="fas fa-rocket"></i>
              Iniciar Proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
