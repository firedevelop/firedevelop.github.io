#!/bin/bash

# Script para optimizar imágenes WebP manteniendo calidad aceptable
# Optimiza tamaño y calidad sin perder demasiada definición

echo "🖼️  Optimizando imágenes WebP..."
echo "=================================="

# Función para optimizar una imagen WebP
optimize_webp() {
    local input="$1"
    local output="$2"
    local quality="$3"
    local width="$4"
    
    if [ -f "$input" ]; then
        # Crear backup si no existe
        if [ ! -f "${input}.backup" ]; then
            cp "$input" "${input}.backup"
        fi
        
        # Optimizar con cwebp
        if [ -n "$width" ]; then
            cwebp -q "$quality" -resize "$width" 0 "$input" -o "$output" 2>/dev/null
        else
            cwebp -q "$quality" "$input" -o "$output" 2>/dev/null
        fi
        
        if [ $? -eq 0 ]; then
            local original_size=$(stat -f%z "${input}.backup" 2>/dev/null || stat -c%s "${input}.backup")
            local new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output")
            local reduction=$(( (original_size - new_size) * 100 / original_size ))
            
            echo "✅ $(basename "$input"): $(( original_size / 1024 ))KB → $(( new_size / 1024 ))KB (-${reduction}%)"
            mv "$output" "$input"
        else
            echo "❌ Error optimizando $(basename "$input")"
        fi
    fi
}

echo "📸 Optimizando imágenes principales..."

# Optimizar logo (pequeño, alta calidad)
optimize_webp "images/logo.webp" "images/logo_temp.webp" 90

# Optimizar imagen de perfil (reducir tamaño considerable)
optimize_webp "images/profile.webp" "images/profile_temp.webp" 85 400

# Optimizar imagen hack del perfil
optimize_webp "images/profile-hack-1.webp" "images/profile-hack-1_temp.webp" 85 400

# Optimizar imagen hack 2 del perfil
optimize_webp "images/profile-hack-2.webp" "images/profile-hack-2_temp.webp" 85 400

echo ""
echo "🎯 Optimizando imágenes de proyectos..."

# Contador para mostrar progreso
count=0
total=$(find images/projects -name "*.webp" | wc -l)

# Optimizar todas las imágenes de proyectos
for image in images/projects/*.webp; do
    if [ -f "$image" ]; then
        count=$((count + 1))
        echo -n "[$count/$total] "
        # Proyectos: calidad media, tamaño reducido para web
        optimize_webp "$image" "${image%.*}_temp.webp" 82 300
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
    echo "🎉 OPTIMIZACIÓN COMPLETADA"
    echo "=================================="
    echo "📦 Tamaño original: $(( original_total / 1024 / 1024 ))MB"
    echo "📦 Tamaño optimizado: $(( new_total / 1024 / 1024 ))MB"
    echo "💾 Reducción total: ${total_reduction}%"
    echo "✨ Todas las imágenes WebP han sido optimizadas sin perder calidad visual"
else
    echo "⚠️  No se pudieron calcular los ahorros"
fi

echo ""
echo "🔄 Para restaurar imágenes originales: find images -name '*.backup' -exec sh -c 'mv \"$1\" \"${1%.backup}\"' _ {} \\;"
