# Data Architecture - SOLID Principles (Simplified)

Esta carpeta implementa una arquitectura **simple y práctica** basada en principios SOLID con **traducciones embebidas**.

## 🎯 Filosofía: Todo en un Solo Lugar

Cada archivo contiene **tanto los datos como sus traducciones**, eliminando la necesidad de sincronizar múltiples archivos.

## Principios SOLID Aplicados

### S - Single Responsibility Principle
Cada archivo maneja UNA entidad con TODAS sus traducciones:

- **personalInfo.js**: Información personal + traducciones de role/about
- **experience.js**: Experiencias laborales + traducciones
- **projects.js**: Proyectos + traducciones
- **skills.js**: Habilidades técnicas (sin traducciones)
- **certifications.js**: Certificaciones (sin traducciones)
- **education.js**: Educación + traducciones
- **translations.js**: SOLO traducciones de UI (navbar, footer, botones, etc.)

### O - Open/Closed Principle
Añadir nuevos idiomas es fácil: solo añade una nueva clave en cada objeto `translations`.

### D - Dependency Inversion Principle
El hook `useTranslatedData` depende de la estructura `translations[language]`, no de implementaciones específicas.

## Estructura de Archivos

```
src/data/
├── personalInfo.js         # Datos personales + traducciones (role, about)
├── experience.js           # Experiencias + traducciones embebidas
├── projects.js            # Proyectos + traducciones embebidas
├── skills.js              # Habilidades (sin traducciones)
├── certifications.js      # Certificaciones (sin traducciones)
├── education.js           # Educación + traducciones embebidas
├── translations.js        # Solo UI strings (nav, hero, footer, etc.)
└── data.js               # [DEPRECATED] No usar
```

## 📝 Cómo Editar Datos

### Ejemplo: Añadir un Nuevo Proyecto

Edita **solo** `src/data/projects.js`:

```javascript
export const professionalProjects = [
  // ... proyectos existentes
  {
    id: 3,
    company: "Mi Empresa",
    technologies: ["React", "Node.js"],
    featured: true,
    translations: {
      es: {
        name: "Mi Proyecto",
        description: "Descripción en español",
        impact: "Resultados en español"
      },
      en: {
        name: "My Project",
        description: "Description in English",
        impact: "Results in English"
      }
    }
  }
];
```

✅ ¡Listo! No necesitas tocar ningún otro archivo.

### Ejemplo: Añadir una Nueva Experiencia

Edita **solo** `src/data/experience.js`:

```javascript
export const experience = [
  // ... experiencias existentes
  {
    id: 4,
    company: "Nueva Empresa",
    period: "2025",
    current: true,
    translations: {
      es: {
        position: "Desarrollador Senior",
        startDate: "Ene 2025",
        endDate: "Actualidad",
        descriptions: [
          "Tarea 1",
          "Tarea 2"
        ],
        achievement: "Logro principal"
      },
      en: {
        position: "Senior Developer",
        startDate: "Jan 2025",
        endDate: "Present",
        descriptions: [
          "Task 1",
          "Task 2"
        ],
        achievement: "Main achievement"
      }
    }
  }
];
```

## 🌍 Añadir un Nuevo Idioma

Para añadir francés, edita cada archivo de datos:

**projects.js**:
```javascript
translations: {
  es: { ... },
  en: { ... },
  fr: {  // ← Nuevo idioma
    name: "Mon Projet",
    description: "...",
    impact: "..."
  }
}
```

**experience.js**:
```javascript
translations: {
  es: { ... },
  en: { ... },
  fr: {  // ← Nuevo idioma
    position: "...",
    // ...
  }
}
```

Repite para todos los archivos con traducciones.

## Flujo de Datos

1. Componentes usan el hook `useTranslatedData()`
2. El hook detecta el idioma actual (`es` o `en`)
3. Extrae `item.translations[language]` de cada entidad
4. Devuelve datos traducidos listos para usar

## Ejemplo de Uso

```javascript
import { useTranslatedData } from '../hooks/useTranslatedData';

function MyComponent() {
  const { professionalProjects, experience } = useTranslatedData();

  return (
    <div>
      {professionalProjects.map(project => (
        <div key={project.id}>
          <h3>{project.name}</h3> {/* Ya traducido */}
          <p>{project.description}</p> {/* Ya traducido */}
        </div>
      ))}
    </div>
  );
}
```

## ✅ Ventajas de esta Arquitectura

✅ **Súper simple**: Todo en un solo archivo, fácil de encontrar
✅ **Sin errores de sincronización**: Datos y traducciones juntos
✅ **Fácil de editar**: Cambias un proyecto en un solo lugar
✅ **Sin duplicación**: Cada dato existe una sola vez
✅ **SOLID**: Sigue principios profesionales de diseño
✅ **Escalable**: Añadir idiomas es straightforward

## 🚫 Qué NO Hacer

❌ No edites `translations.js` para datos (solo para UI strings)
❌ No crees nuevos archivos de traducciones
❌ No uses `data.js` (está deprecado)
❌ No hardcodees traducciones en componentes
