---
id: "TASK-2026-03-08__deploy-vercel"
title: "Deploy del sitio en Vercel"
status: "BACKLOG"
phase: "Research"
scope_in:
  - "Configurar proyecto en Vercel"
  - "Conectar repositorio de GitHub"
  - "Deploy inicial a producción"
  - "Verificar que todas las rutas funcionan"
scope_out:
  - "Dominio personalizado (requiere compra/configuración DNS)"
  - "Analytics avanzados"
artifacts:
  card: card.md
  plan: plan.md
  validate: validate.md
plan_phase: 1
validation_commands:
  - "npm run build"
  - "vercel --prod"
pr_files: []
test_status: ""
---

# Summary
- Objective: Deployar el sitio Asambleas del Pueblo en Vercel para que esté accesible públicamente
- Constraints: Repositorio debe estar en GitHub (remoto) antes del deploy

# Updates
- 2026-03-08 - Created.
