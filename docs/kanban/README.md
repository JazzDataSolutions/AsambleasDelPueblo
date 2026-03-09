# Asambleas del Pueblo - Kanban

> **Source of Truth**: Este directorio (`docs/kanban/`) es la fuente de verdad para el seguimiento del desarrollo del sitio web.

## Estructura de directorios

```
docs/kanban/
├── BACKLOG/               # Tareas pendientes de iniciar
├── DOING/                 # Tareas en progreso (máx 2)
├── DONE/                  # Tareas completadas
└── TEMPLATE_TASK_FOLDER/  # Plantilla para nuevas tareas
```

---

## Convenciones de nombrado

### Tareas (carpetas con documentación completa)

```
{YYYY-MM-DD}[-HHMM]__{TYPE}__{descripcion-corta}/
├── card.md      # Descripción principal, estado, actualizaciones
├── plan.md      # Plan de implementación (opcional en quick-fix)
├── research.md  # Investigación y hallazgos (opcional en quick-fix)
└── validate.md  # Criterios de validación y resultados
```

> **Justificación**: La fecha al inicio permite ordenamiento cronológico natural al listar directorios (`ls`, exploradores de archivos).

### Tipos de tareas

| Tipo | Uso | Prioridad visual |
|------|-----|------------------|
| `BUG` | Bugs del sitio | Alta |
| `TASK` | Features y mejoras | Normal |
| `CONTENT` | Contenido nuevo (documentos, textos) | Normal |
| `DESIGN` | Cambios de diseño/UI | Normal |
| `REFACTOR` | Refactorizaciones | Normal |

### Ejemplos

```
2026-03-08__TASK__setup-inicial-nextjs/
2026-03-10__DESIGN__paleta-colores-quetzalcoatl/
2026-03-12__CONTENT__manifiesto-texto-oficial/
2026-03-15__BUG__navbar-mobile-scroll/
```

---

## Ciclo de vida de tareas

```
BACKLOG ──────► DOING ──────► DONE
   │              │
   │   máx 2      │   requiere
   │   tareas     │   validación
   └──────────────┘
```

### Reglas

1. **WIP Limit**: Máximo 2 tareas en DOING simultáneamente
2. **Mover tarea**: Mover la carpeta completa de un directorio a otro
3. **Documentación**: Toda tarea debe tener al menos `card.md`
4. **Quick-fix**: Tareas menores pueden tener solo `card.md` (marcar con `(quick-fix)`)

---

## Definición de Terminado (DoD)

Para mover cualquier tarea a **DONE**, se deben cumplir los requisitos según el tipo:

| Tipo | Requisitos para DONE |
|------|----------------------|
| `BUG` | Fix implementado + verificación visual + build passing |
| `TASK` | Feature implementada + build passing |
| `CONTENT` | Contenido integrado en la página correspondiente |
| `DESIGN` | Cambios aplicados + revisión visual en desktop y mobile |
| `REFACTOR` | Código refactorizado + build passing + sin regresiones |

### Validación mínima

```bash
# Build passing (obligatorio para todo cambio de código)
npm run build

# Dev server funcional
npm run dev
```

---

## Fases dentro de DOING

Cada tarea en progreso pasa por fases documentadas en `card.md`:

1. **Research** - Investigación y análisis
2. **Plan** - Definición de la solución
3. **Implement** - Desarrollo
4. **Validate** - Verificación de criterios de aceptación

---

## Guía de documentación

Cada tarea debe incluir documentación completa:

| Sección | Descripción | Obligatorio |
|---------|-------------|-------------|
| **Problema/Objetivo** | Descripción clara del problema u objetivo | Si |
| **Solución** | Descripción de la solución implementada | Si |
| **Verificación** | Checklist de criterios validados | Si |
| **Archivos modificados** | Lista de archivos tocados | Recomendado |

### Tareas Quick-Fix

Tareas con solo `card.md` cuando son:
- Cambios pequeños de configuración
- Fixes de una línea
- Actualizaciones de contenido menores

Se identifican con el sufijo `(quick-fix)` en el card.md.
