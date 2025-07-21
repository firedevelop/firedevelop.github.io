#!/bin/bash

# Script mejorado para optimizar imágenes WebP con MEJOR CALIDAD
# Mantiene calidad visual alta mientras reduce tamaño moderadamente

echo "🎨 Optimizando imágenes WebP con ALTA CALIDAD..."
echo "================================================="

# Función mejorada para optimizar con mejor calidad
optimize_webp_quality() {
    local input="$1"
    local output="$2"
    local quality="$3"
    local width="$4"
    
    if [ -f "$input" ]; then
        # Restaurar desde backup si existe
        if [ -f "${input}.backup" ]; then
            cp "${input}.backup" "$input"
        fi
        
        # Optimizar con mejor calidad
        if [ -n "$width" ]; then
            # Con redimensionado pero manteniendo calidad
            cwebp -q "$quality" -m 6 -resize "$width" 0 -mt "$input" -o "$output" 2>/dev/null
        else
            # Solo compresión sin redimensionar
            cwebp -q "$quality" -m 6 -mt "$input" -o "$output" 2>/dev/null
        fi
        
        if [ $? -eq 0 ]; then
            local original_size=$(stat -f%z "${input}.backup" 2>/dev/null || stat -c%s "${input}.backup" 2>/dev/null || stat -f%z "$input" 2>/dev/null || stat -c%s "$input")
            local new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output")
            local reduction=$(( (original_size - new_size) * 100 / original_size ))
            
            echo "✅ $(basename "$input"): $(( original_size / 1024 ))KB → $(( new_size / 1024 ))KB (-${reduction}%)"
            mv "$output" "$input"
        else
            echo "❌ Error optimizando $(basename "$input")"
        fi
    fi
}

echo "📸 Restaurando y optimizando imágenes principales con ALTA CALIDAD..."

# Optimizar logo (alta calidad, sin redimensionar)
optimize_webp_quality "images/logo.webp" "images/logo_temp.webp" 95

# Optimizar imagen de perfil (alta calidad, tamaño moderado)
optimize_webp_quality "images/profile.webp" "images/profile_temp.webp" 90 500

# Optimizar imagen hack del perfil (alta calidad)
optimize_webp_quality "images/profile-hack-1.webp" "images/profile-hack-1_temp.webp" 90 500

# Optimizar imagen hack 2 del perfil (alta calidad)
optimize_webp_quality "images/profile-hack-2.webp" "images/profile-hack-2_temp.webp" 90 500

echo ""
echo "🎯 Optimizando imágenes de proyectos con CALIDAD MEJORADA..."

# Contador para mostrar progreso
count=0
total=$(find images/projects -name "*.webp" | wc -l)

# Optimizar todas las imágenes de proyectos con mejor calidad
for image in images/projects/*.webp; do
    if [ -f "$image" ]; then
        count=$((count + 1))
        echo -n "[$count/$total] "
        # Proyectos: calidad alta, tamaño optimizado para web
        optimize_webp_quality "$image" "${image%.*}_temp.webp" 88 400
    fi
done

echo ""
echo "📊 Calculando ahorro total..."

# Calcular tamaños totales
original_total=0
new_total=0

for backup in images/*.webp.backup images/projects/*.webp.backup; do
    if [ -f "$backup" ]; then
        original_file="${backup%.backup}"
        if [ -f "$original_file" ]; then
            orig_size=$(stat -f%z "$backup" 2>/dev/null || stat -c%s "$backup")
            new_size=$(stat -f%z "$original_file" 2>/dev/null || stat -c%s "$original_file")
            original_total=$((original_total + orig_size))
            new_total=$((new_total + new_size))
        fi
    fi
done

if [ $original_total -gt 0 ]; then
    total_reduction=$(( (original_total - new_total) * 100 / original_total ))
    echo "🎉 OPTIMIZACIÓN DE ALTA CALIDAD COMPLETADA"
    echo "=============================================="
    echo "📦 Tamaño original: $(( original_total / 1024 / 1024 ))MB"
    echo "📦 Tamaño optimizado: $(( new_total / 1024 / 1024 ))MB"
    echo "💾 Reducción total: ${total_reduction}%"
    echo "✨ Imágenes optimizadas manteniendo EXCELENTE calidad visual"
    echo "🎨 Configuración: Calidad 88-95%, método 6, multithreading"
else
    echo "⚠️  No se pudieron calcular los ahorros"
fi

echo ""
echo "🔄 Para restaurar originales: find images -name '*.backup' -exec sh -c 'mv \"$1\" \"${1%.backup}\"' _ {} \\;"
