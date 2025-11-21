# Portafolio - Tomás Mauricio Rodríguez Sogamoso (@unatasitaconte)

Portfolio profesional bilingüe (Español/Inglés) desarrollado con React, Vite y TailwindCSS por **unatasitaconte**.

## Características

- ✅ Bilingüe (Español/Inglés) con selector de idioma
- ✅ Diseño minimalista y elegante
- ✅ Modo oscuro/claro
- ✅ Totalmente responsive
- ✅ Animaciones suaves con Framer Motion
- ✅ Navegación fluida entre secciones
- ✅ Formulario de contacto funcional
- ✅ Deploy automático con GitHub Actions
- ✅ Descarga de CV en PDF

## Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework de CSS utility-first
- **Framer Motion** - Biblioteca de animaciones
- **React Icons** - Iconos
- **Context API** - Gestión de estado (idioma y tema)

## Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/tu-username/tu-username.github.io.git
cd tu-username.github.io
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## Build para Producción

```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

Para previsualizar el build:
```bash
npm run preview
```

## Despliegue en GitHub Pages

### Configuración Inicial

1. **Crear repositorio en GitHub**:
   - El repositorio debe llamarse: `tu-username.github.io`
   - Debe ser público

2. **Configurar GitHub Pages**:
   - Ve a: `Settings > Pages`
   - En "Source", selecciona: **GitHub Actions**

3. **Subir el código**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-username/tu-username.github.io.git
   git push -u origin main
   ```

4. **Deploy automático**:
   - El workflow de GitHub Actions (`.github/workflows/deploy.yml`) se ejecutará automáticamente
   - Una vez completado, tu sitio estará disponible en: `https://tu-username.github.io`

### Actualizaciones

Cada vez que hagas push a la rama `main`, el sitio se actualizará automáticamente:

```bash
git add .
git commit -m "Descripción de cambios"
git push
```

Puedes ver el progreso del deploy en la pestaña "Actions" de tu repositorio.

## Estructura del Proyecto

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── cv.pdf                  # Tu CV para descargar
│   └── Logo.png                # Logo del sitio
├── src/
│   ├── components/             # Componentes de React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/                # Context API
│   │   ├── ThemeContext.jsx    # Tema oscuro/claro
│   │   └── LanguageContext.jsx # Español/Inglés
│   ├── data/
│   │   └── translations.js     # Traducciones y datos
│   ├── hooks/                  # Custom hooks
│   │   ├── useTranslation.js
│   │   └── useTranslatedData.js
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── Dockerfile                  # Para deployment con Docker
├── docker-compose.yml          # Docker Compose config
├── nginx.conf                  # Configuración de Nginx
├── tailwind.config.js          # Configuración de Tailwind
├── vite.config.js              # Configuración de Vite
└── package.json
```

## Personalización

### Actualizar Información Personal

Edita el archivo `src/data/translations.js` para actualizar en ambos idiomas:
- Información personal (nombre, rol, descripción)
- Experiencia laboral
- Proyectos profesionales y personales
- Habilidades técnicas
- Certificaciones

### Cambiar CV

Reemplaza el archivo `public/cv.pdf` con tu CV actualizado. El nombre del archivo descargado se configura en `src/components/Hero.jsx` (línea 16).

### Modificar Colores

Los colores principales se pueden modificar en `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#3B82F6', // Azul
    dark: '#1E40AF',
  },
  secondary: {
    DEFAULT: '#8B5CF6', // Morado
    dark: '#6D28D9',
  },
}
```

### Cambiar Logo

Reemplaza el archivo `public/Logo.png` con tu logo y actualiza la referencia en `src/components/Navbar.jsx`.

## Docker (Alternativa a GitHub Pages)

Si prefieres usar Docker para deployment:

```bash
# Construir imagen
docker build -t portfolio-app .

# Ejecutar contenedor
docker run -d -p 80:80 --name portfolio portfolio-app

# O usar Docker Compose
docker-compose up -d
```

Ver `README.Docker.md` para más detalles sobre deployment con Docker.

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea el build de producción
- `npm run preview` - Preview del build de producción
- `npm run lint` - Ejecuta el linter

## Soporte de Idiomas

El portafolio soporta:
- 🇪🇸 Español (por defecto)
- 🇬🇧 English

La preferencia de idioma se guarda en localStorage y persiste entre sesiones.

## Contacto

- **Nickname:** @unatasitaconte
- **Email:** thomasmauricio521@gmail.com
- **Teléfono:** +57 3213159582
- **LinkedIn:** [Tomás Rodríguez](https://www.linkedin.com/in/unatasitaconte/)
- **GitHub:** [UnaTasitaConTe](https://github.com/UnaTasitaConTe)

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

Desarrollado con ❤️ por **Tomás Mauricio Rodríguez Sogamoso** ([@unatasitaconte](https://github.com/UnaTasitaConTe))
