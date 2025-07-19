# Carpeta de Imágenes

Esta carpeta contiene todas las imágenes utilizadas en el portafolio.

## Estructura recomendada:

```
images/
├── hero/
│   └── profile-photo.jpg        # Foto de perfil para la sección hero
├── about/
│   └── about-image.jpg          # Imagen para la sección sobre mí
├── projects/
│   ├── project1.jpg             # Captura del proyecto 1
│   ├── project2.jpg             # Captura del proyecto 2
│   └── project3.jpg             # Captura del proyecto 3
├── skills/
│   └── skills-background.jpg    # Imagen de fondo para habilidades
└── favicon/
    ├── favicon.ico              # Icono del sitio
    ├── favicon-16x16.png        # Favicon 16x16
    └── favicon-32x32.png        # Favicon 32x32
```

## Especificaciones de Imágenes:

### Foto de Perfil
- **Tamaño**: 400x400px mínimo
- **Formato**: JPG o PNG
- **Resolución**: 72-150 DPI
- **Peso**: Menos de 200KB

### Imágenes de Proyectos
- **Tamaño**: 600x400px (aspect ratio 3:2)
- **Formato**: JPG, PNG o WebP
- **Resolución**: 72-150 DPI
- **Peso**: Menos de 300KB cada una

### Favicon
- **Tamaño**: 16x16, 32x32, 64x64px
- **Formato**: ICO o PNG
- **Fondo**: Transparente preferiblemente

## Optimización

Para optimizar las imágenes:

1. **Compresión**: Usa herramientas como TinyPNG o ImageOptim
2. **Formato**: WebP para mejor compresión (con fallback)
3. **Responsive**: Considera múltiples tamaños para diferentes pantallas
4. **Lazy Loading**: Ya implementado en el JavaScript

## Uso en el Código

Para usar las imágenes, actualiza las siguientes secciones en `index.html`:

```html
<!-- Reemplazar el placeholder del hero -->
<div class="hero-image">
    <img src="images/hero/profile-photo.jpg" alt="Tu Nombre" class="hero-photo">
</div>

<!-- Reemplazar placeholders de proyectos -->
<div class="project-image">
    <img src="images/projects/project1.jpg" alt="Nombre del Proyecto">
</div>
```

## Notas

- Todas las imágenes deben tener texto alternativo (alt) descriptivo
- Usa nombres de archivo descriptivos en minúsculas
- Evita espacios en los nombres de archivo (usa guiones)
- Mantén una nomenclatura consistente
