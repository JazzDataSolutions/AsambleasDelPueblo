# Plan

## Objective
- Deployar el sitio Next.js en Vercel con CI/CD automático desde GitHub

## Scope
### In
- Push del código al repositorio remoto en GitHub
- Vincular repo con Vercel
- Deploy a producción
- Verificar rutas y funcionalidad

### Out
- Dominio personalizado
- Variables de entorno (no hay por ahora)

## Phases
### Phase 1 - Preparar repositorio
- [ ] Verificar que el repo tiene remoto en GitHub
- [ ] Commit de todos los cambios pendientes
- [ ] Push al remoto

#### Phase 1 Files
- Todos los archivos del proyecto

### Phase 2 - Deploy en Vercel
- [ ] Instalar Vercel CLI o usar dashboard web
- [ ] Conectar el repositorio de GitHub
- [ ] Configurar framework preset: Next.js
- [ ] Ejecutar deploy inicial

### Phase 3 - Verificación
- [ ] Verificar que la URL de producción carga
- [ ] Navegar por todas las secciones
- [ ] Verificar responsive (mobile/desktop)
- [ ] Verificar dark mode

## Validation Commands
- `npm run build` (debe pasar sin errores)
- Todas las rutas accesibles en la URL de producción

## Success Criteria
- Sitio accesible públicamente en URL de Vercel
- Todas las 11 rutas funcionando
- Build automático en cada push a main
