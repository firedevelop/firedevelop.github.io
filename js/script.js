// Efecto Typewriter - Versión corregida con protección contra múltiples ejecuciones
let typewriterExecuted = false; // Bandera para evitar múltiples ejecuciones

function initTypewriter() {
    // Prevenir múltiples ejecuciones
    if (typewriterExecuted) {
        console.log('⚠️ Typewriter ya ejecutado, saltando...');
        return;
    }
    
    console.log('=== INICIANDO TYPEWRITER ===');
    
    const element = document.getElementById('typewriter');
    const text = "FireDevelop";
    let index = 0;
    let isWriting = false; // Bandera para controlar el estado de escritura
    
    console.log('Elemento encontrado:', element);
    
    if (!element) {
        console.error('❌ Elemento typewriter no encontrado');
        return;
    }
    
    // Marcar como ejecutado
    typewriterExecuted = true;
    
    // Limpiar cualquier contenido existente
    element.innerHTML = '';
    element.textContent = '';
    element.classList.add('typing');
    
    console.log('✅ Iniciando escritura del texto:', text);
    
    function escribirLetra() {
        // Verificar que no se esté ejecutando otra escritura
        if (isWriting) {
            console.log('⚠️ Ya hay una escritura en progreso');
            return;
        }
        
        isWriting = true;
        
        if (index < text.length) {
            const letra = text.charAt(index);
            element.textContent += letra;
            console.log(`📝 Letra ${index + 1}/${text.length}: "${letra}" - Texto actual: "${element.textContent}"`);
            index++;
            
            // Continuar con la siguiente letra
            setTimeout(() => {
                isWriting = false;
                escribirLetra();
            }, 200);
        } else {
            console.log('✅ Escritura completada:', element.textContent);
            isWriting = false;
            
            // Finalizar el efecto
            setTimeout(() => {
                element.classList.remove('typing');
                element.classList.add('finished');
                console.log('🎉 Efecto typewriter finalizado');
            }, 1000);
        }
    }
    
    // Iniciar escritura después de un delay
    setTimeout(() => {
        console.log('🚀 Comenzando escritura...');
        escribirLetra();
    }, 1000);
}

// Solo ejecutar una vez cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM cargado');
    // Pequeño delay para asegurar que todo esté listo
    setTimeout(initTypewriter, 100);
});

// Respaldo SOLO si no se ha ejecutado
window.addEventListener('load', () => {
    if (!typewriterExecuted) {
        console.log('� Respaldo: ejecutando typewriter desde window load');
        setTimeout(initTypewriter, 200);
    }
});

// Navegación móvil
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Cerrar menú móvil cuando se hace clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Sistema "Ver Más Proyectos"
const loadMoreBtn = document.getElementById('loadMoreProjects');
const moreProjects = document.querySelectorAll('.more-projects');
let projectsShown = false;

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        if (!projectsShown) {
            // Mostrar proyectos ocultos
            moreProjects.forEach((project, index) => {
                setTimeout(() => {
                    project.style.display = 'block';
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
            });
            
            loadMoreBtn.innerHTML = '<i class="fas fa-minus"></i> Ver Menos Proyectos';
            projectsShown = true;
        } else {
            // Ocultar proyectos adicionales
            moreProjects.forEach((project, index) => {
                setTimeout(() => {
                    project.style.opacity = '0';
                    project.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 300);
                }, index * 50);
            });
            
            loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Ver Más Proyectos';
            projectsShown = false;
            
            // Scroll suave a la sección de proyectos
            document.getElementById('proyectos').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Configuración inicial de proyectos ocultos
moreProjects.forEach(project => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(30px)';
    project.style.transition = 'all 0.5s ease';
});

// Navegación suave y resaltado del enlace activo
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Detección de dispositivos móviles
function isMobile() {
    return window.innerWidth <= 768 || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           ('ontouchstart' in window) || 
           (navigator.maxTouchPoints > 0);
}

// Efecto parallax optimizado para móvil y desktop
function handleParallaxEffects() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const aboutPlaceholder = document.querySelector('.about-placeholder');
    
    // Parallax del hero - más sutil en móvil
    if (hero) {
        if (isMobile()) {
            // En móvil: efecto más sutil y mejor rendimiento
            hero.style.transform = `translateY(${scrolled * 0.1}px)`;
        } else {
            // En desktop: efecto completo
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
    
    // Manejo especial del elemento about-placeholder para evitar superposiciones
    if (aboutPlaceholder && !isMobile()) {
        // Solo aplicar transformaciones en desktop
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            const aboutRect = aboutSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Solo aplicar el efecto cuando la sección esté visible
            if (aboutRect.top < windowHeight && aboutRect.bottom > 0) {
                const scrollProgress = Math.max(0, Math.min(1, (windowHeight - aboutRect.top) / windowHeight));
                aboutPlaceholder.style.transform = `rotate(${scrollProgress * 360}deg)`;
            }
        }
    } else if (aboutPlaceholder && isMobile()) {
        // En móvil: resetear transformaciones para evitar conflictos
        aboutPlaceholder.style.transform = 'none';
    }
}

// Usar requestAnimationFrame para mejor rendimiento
let ticking = false;

function handleScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleParallaxEffects();
            ticking = false;
        });
        ticking = true;
    }
}

// Aplicar el event listener con mejor rendimiento
window.addEventListener('scroll', handleScroll, { passive: true });

// Animaciones de entrada
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observar elementos para animar
document.querySelectorAll('.skill-category, .project-card, .contact-item').forEach(el => {
    observer.observe(el);
});

// Contador animado para estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h4');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Activar contadores cuando la sección sea visible
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Formulario de contacto - Google Form integrado
// El formulario ahora usa Google Forms, no se necesita JavaScript adicional
// El formulario está completamente manejado por Google

// Validación de email (mantener por si se necesita en el futuro)
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Colores según el tipo
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Efecto de partículas en el fondo (opcional)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    `;
    
    hero.appendChild(particlesContainer);
    
    // Crear partículas
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(59, 130, 246, 0.3);
            border-radius: 50%;
            animation: float-particle ${Math.random() * 3 + 2}s infinite ease-in-out;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particlesContainer.appendChild(particle);
    }
    
    // Agregar animación CSS para partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
    `;
    document.head.appendChild(style);
}

// Inicializar partículas
window.addEventListener('load', createParticles);

// Cambio de tema (modo oscuro/claro)
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Cargar tema guardado
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Agregar botón de cambio de tema (opcional)
function addThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--primary-color);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('mouseover', () => {
        themeToggle.style.transform = 'scale(1.1)';
    });
    themeToggle.addEventListener('mouseout', () => {
        themeToggle.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(themeToggle);
}

// Inicializar botón de tema
window.addEventListener('load', addThemeToggle);

// Lazy loading para imágenes
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading
window.addEventListener('load', lazyLoadImages);

// Efecto de cursor personalizado
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(59, 130, 246, 0.5);
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.1s ease;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Efecto hover en elementos interactivos
    document.querySelectorAll('a, button, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'rgba(59, 130, 246, 0.8)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'rgba(59, 130, 246, 0.5)';
        });
    });
}

// Inicializar cursor personalizado (solo en desktop)
if (window.innerWidth > 768) {
    window.addEventListener('load', createCustomCursor);
}

// Preloader
function showPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="spinner"></div>
            <p>Cargando...</p>
        </div>
    `;
    
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    document.body.appendChild(preloader);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 500);
    });
}

// Inicializar preloader
showPreloader();

// Smooth reveal para elementos
function revealElements() {
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Agregar clase reveal a elementos que queremos animar
    document.querySelectorAll('.skill-category, .project-card, .about-text').forEach(el => {
        el.classList.add('reveal');
    });
    
    // Inicializar revelado
    revealElements();
    
    // Establecer el año actual automáticamente
    setCurrentYear();
});

// Función para establecer el año actual
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    const yearCreditsElement = document.getElementById('currentYearCredits');
    
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    if (yearCreditsElement) {
        yearCreditsElement.textContent = currentYear;
    }
}
