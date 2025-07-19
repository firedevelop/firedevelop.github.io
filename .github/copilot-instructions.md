<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portafolio Personal - Instrucciones para Copilot

Este es un proyecto de portafolio web moderno desarrollado con HTML, CSS y JavaScript vanilla. 

## Contexto del Proyecto

- **Tipo**: Portafolio personal/profesional
- **Tecnologías**: HTML5, CSS3, JavaScript ES6+
- **Estilo**: Moderno, minimalista, responsivo
- **Audiencia**: Empleadores, clientes, colaboradores

## Estructura del Proyecto

```
portafolio/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── script.js       # Funcionalidad JavaScript
├── README.md           # Documentación
└── .github/
    └── copilot-instructions.md
```

## Pautas de Código

### HTML
- Usar HTML5 semántico con elementos apropiados
- Mantener estructura accesible con ARIA labels cuando sea necesario
- Usar BEM methodology para clases CSS
- Incluir meta tags para SEO y responsive design

### CSS
- Seguir mobile-first approach
- Usar variables CSS para colores y espaciados
- Implementar Grid y Flexbox para layouts
- Mantener consistencia en naming conventions
- Usar transiciones suaves para interacciones

### JavaScript
- Usar ES6+ features (arrow functions, const/let, template literals)
- Implementar event delegation cuando sea apropiado
- Manejar errores apropiadamente
- Usar Intersection Observer para animaciones de scroll
- Mantener código modular y reutilizable

## Mejores Prácticas

1. **Performance**: Optimizar imágenes, minificar código para producción
2. **Accesibilidad**: Contraste adecuado, navegación por teclado
3. **SEO**: Meta tags, estructura semántica, carga rápida
4. **Responsive**: Breakpoints consistentes, imágenes responsivas
5. **UX**: Feedback visual, animaciones suaves, navegación intuitiva

## Convenciones de Naming

- **CSS Classes**: kebab-case (`.hero-section`, `.nav-menu`)
- **JavaScript Variables**: camelCase (`navMenu`, `scrollPosition`)
- **Functions**: camelCase descriptivo (`updateActiveLink`, `showNotification`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_WIDTH`, `ANIMATION_DURATION`)

## Patrones Específicos

- Usar `document.querySelector` para elementos únicos
- Usar `document.querySelectorAll` para múltiples elementos
- Implementar debouncing para eventos de scroll
- Usar localStorage para preferencias del usuario
- Validar inputs del usuario antes de procesarlos

## Colores y Diseño

- Paleta principal: Azules (#3b82f6, #2563eb) y grises
- Usar variables CSS para consistencia
- Mantener contraste WCAG AA
- Implementar modo oscuro/claro opcional

## Consideraciones Especiales

- El sitio debe funcionar sin JavaScript (graceful degradation)
- Optimizar para Core Web Vitals
- Implementar lazy loading para imágenes
- Usar preloader para mejorar percepción de velocidad
- Incluir meta tags para redes sociales (Open Graph)

Cuando generes código para este proyecto, mantén estas pautas y el estilo existente.
