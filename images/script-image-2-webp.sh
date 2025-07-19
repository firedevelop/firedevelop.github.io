#!/bin/bash

echo "Convirtiendo imágenes PNG y JPG a WebP..."

# Función para convertir imágenes
convert_to_webp() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"
    
    if [ ! -f "$output_file" ]; then
        echo "Convirtiendo: $input_file -> $output_file"
        cwebp -q 80 "$input_file" -o "$output_file"
    else
        echo "Ya existe: $output_file"
    fi
}

# Instalar cwebp si no está disponible
if ! command -v cwebp &> /dev/null; then
    echo "Instalando webp tools..."
    sudo apt-get update
    sudo apt-get install -y webp
fi

# Convertir imágenes en el directorio actual
for file in *.png *.jpg *.jpeg; do
    if [ -f "$file" ]; then
        convert_to_webp "$file"
    fi
done

# Convertir imágenes en subdirectorios
find . -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | while read -r file; do
    convert_to_webp "$file"
done

echo "Conversión completada!"
echo ""
echo "Comparación de tamaños:"
echo "====================="

# Mostrar comparación de tamaños
for original in *.png *.jpg *.jpeg; do
    if [ -f "$original" ]; then
        webp_file="${original%.*}.webp"
        if [ -f "$webp_file" ]; then
            original_size=$(du -h "$original" | cut -f1)
            webp_size=$(du -h "$webp_file" | cut -f1)
            echo "$original ($original_size) -> $webp_file ($webp_size)"
        fi
    fi
done

echo ""
echo "¡Listo! Las imágenes WebP están optimizadas para web."