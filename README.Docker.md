# Despliegue con Docker

Este documento describe cómo construir y desplegar la aplicación del portafolio usando Docker.

## Requisitos previos

- Docker instalado (versión 20.10 o superior)
- Docker Compose instalado (versión 1.29 o superior)

## Construcción de la imagen

### Opción 1: Usando Docker directamente

```bash
# Construir la imagen
docker build -t portfolio-app .

# Ejecutar el contenedor
docker run -d -p 80:80 --name portfolio portfolio-app
```

### Opción 2: Usando Docker Compose (Recomendado)

```bash
# Construir y levantar el contenedor
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener el contenedor
docker-compose down
```

## Acceso a la aplicación

Una vez que el contenedor esté corriendo, accede a la aplicación en:

```
http://localhost
```

## Arquitectura del Dockerfile

El Dockerfile utiliza **multi-stage build** para optimizar el tamaño de la imagen:

### Stage 1: Build
- Base: `node:18-alpine`
- Instala dependencias
- Construye la aplicación con Vite
- Genera archivos estáticos optimizados en `/dist`

### Stage 2: Production
- Base: `nginx:alpine`
- Copia solo los archivos construidos desde el stage anterior
- Usa nginx para servir los archivos estáticos
- Tamaño final de imagen: ~25MB

## Configuración de Nginx

El archivo `nginx.conf` incluye:

- ✅ Compresión gzip para mejorar la velocidad de carga
- ✅ Cache de assets estáticos (1 año)
- ✅ Soporte para SPA (React Router)
- ✅ Cabeceras de seguridad
- ✅ Redirección de errores 404 a index.html

## Comandos útiles

```bash
# Ver contenedores en ejecución
docker ps

# Ver logs en tiempo real
docker logs -f portfolio

# Entrar al contenedor
docker exec -it portfolio sh

# Detener el contenedor
docker stop portfolio

# Eliminar el contenedor
docker rm portfolio

# Eliminar la imagen
docker rmi portfolio-app

# Reconstruir sin cache
docker build --no-cache -t portfolio-app .
```

## Despliegue en producción

### Variables de entorno

Si necesitas configurar variables de entorno, crea un archivo `.env`:

```env
NODE_ENV=production
```

### Puertos personalizados

Para usar un puerto diferente al 80:

```bash
docker run -d -p 3000:80 --name portfolio portfolio-app
```

O modifica el `docker-compose.yml`:

```yaml
ports:
  - "3000:80"
```

## Optimizaciones

La imagen de producción incluye:

- **Tamaño reducido**: Uso de imágenes alpine
- **Build optimizado**: Multi-stage build
- **Seguridad**: Sin dependencias de desarrollo
- **Performance**: Nginx con compresión y cache
- **Rápido inicio**: Solo archivos estáticos

## Troubleshooting

### El contenedor no inicia

```bash
# Ver logs detallados
docker logs portfolio
```

### Puerto 80 ya está en uso

```bash
# Usar otro puerto
docker run -d -p 8080:80 --name portfolio portfolio-app
```

### Cambios no se reflejan

```bash
# Reconstruir la imagen sin cache
docker-compose build --no-cache
docker-compose up -d
```

## Integración CI/CD

### GitHub Actions

```yaml
name: Build and Push Docker Image

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Docker image
        run: docker build -t portfolio-app .
```

### GitLab CI

```yaml
build:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t portfolio-app .
```

## Recursos

- Tamaño de la imagen final: ~25MB
- Tiempo de build: ~2-3 minutos
- Tiempo de inicio: <1 segundo
- Memoria requerida: ~10MB en ejecución
