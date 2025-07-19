import React from 'react'
import { 
  Database, 
  Globe, 
  Smartphone, 
  Palette, 
  Server, 
  GitBranch 
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React", level: 90, icon: "fab fa-react" },
        { name: "JavaScript", level: 95, icon: "fab fa-js" },
        { name: "TypeScript", level: 85, icon: "fab fa-js" },
        { name: "HTML5", level: 98, icon: "fab fa-html5" },
        { name: "CSS3", level: 95, icon: "fab fa-css3-alt" },
        { name: "Tailwind CSS", level: 90, icon: "fas fa-paint-brush" },
        { name: "Vue.js", level: 80, icon: "fab fa-vuejs" },
        { name: "Angular", level: 75, icon: "fab fa-angular" }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 90, icon: "fab fa-node-js" },
        { name: "Express.js", level: 88, icon: "fas fa-server" },
        { name: "Python", level: 85, icon: "fab fa-python" },
        { name: "Django", level: 80, icon: "fas fa-code" },
        { name: "PHP", level: 75, icon: "fab fa-php" },
        { name: "Laravel", level: 70, icon: "fab fa-laravel" }
      ]
    },
    {
      title: "Base de Datos",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 85, icon: "fas fa-database" },
        { name: "PostgreSQL", level: 88, icon: "fas fa-database" },
        { name: "MySQL", level: 90, icon: "fas fa-database" },
        { name: "Redis", level: 75, icon: "fas fa-database" },
        { name: "Firebase", level: 82, icon: "fas fa-fire" }
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React Native", level: 80, icon: "fab fa-react" },
        { name: "Flutter", level: 75, icon: "fas fa-mobile-alt" },
        { name: "Ionic", level: 70, icon: "fas fa-mobile-alt" }
      ]
    },
    {
      title: "Herramientas",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 95, icon: "fab fa-git-alt" },
        { name: "Docker", level: 80, icon: "fab fa-docker" },
        { name: "AWS", level: 75, icon: "fab fa-aws" },
        { name: "Figma", level: 85, icon: "fab fa-figma" },
        { name: "Postman", level: 90, icon: "fas fa-paper-plane" }
      ]
    },
    {
      title: "Diseño",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "UI/UX Design", level: 80, icon: "fas fa-paint-brush" },
        { name: "Responsive Design", level: 95, icon: "fas fa-mobile-alt" },
        { name: "Adobe XD", level: 75, icon: "fab fa-adobe" },
        { name: "Canva", level: 85, icon: "fas fa-palette" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Mis <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Domino una amplia gama de tecnologías y herramientas para crear 
            soluciones web completas y de alto rendimiento.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <i className={`${skill.icon} text-primary-600`}></i>
                        <span className="font-medium text-gray-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas algo específico?
            </h3>
            <p className="text-gray-600 mb-6">
              Siempre estoy aprendiendo nuevas tecnologías y adaptándome a las necesidades del proyecto.
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
              <i className="fas fa-envelope"></i>
              Hablemos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
