// Efecto Typewriter optimizado
function initTypewriter() {
    const element = document.getElementById('typewriter');
    const text = "fireDevelop";
    
    if (!element) return;
    
    element.textContent = '';
    let index = 0;
    
    function escribirLetra() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(escribirLetra, 150);
        }
    }
    
    setTimeout(escribirLetra, 1000);
}

// Navegación móvil
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Cerrar menú móvil cuando se hace clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
    });
});

// Navegación suave y activa
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Actualizar enlace activo
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Animaciones de scroll optimizadas
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observar elementos cuando el DOM esté listo
function initScrollAnimations() {
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Contador animado optimizado
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h4');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        if (isNaN(target)) return;
        
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Sistema de partículas optimizado
function createParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    // Reducir número de partículas para mejor rendimiento
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heroSection.appendChild(particle);
    }
}

// Botón "Ver más proyectos" 
function initLoadMoreProjects() {
    const loadMoreBtn = document.getElementById('loadMoreProjects');
    const moreProjects = document.querySelectorAll('.more-projects');
    
    if (loadMoreBtn && moreProjects.length > 0) {
        loadMoreBtn.addEventListener('click', () => {
            moreProjects.forEach(project => {
                project.style.display = 'block';
                project.classList.add('fade-in');
            });
            loadMoreBtn.style.display = 'none';
        });
    }
}

// Año actual en el footer
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Inicialización optimizada
document.addEventListener('DOMContentLoaded', () => {
    // Funciones críticas primero
    initTypewriter();
    updateCurrentYear();
    
    // Funciones no críticas con delay
    setTimeout(() => {
        initScrollAnimations();
        initLoadMoreProjects();
        createParticles();
        
        // Animar contadores solo cuando sean visibles
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
    }, 100);
});
