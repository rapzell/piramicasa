# Migracion de contenido Ditto -> WordPress

## Fuente actual capturada
- Home: `src/app/page.tsx`
- Menu: `src/app/index2-menu.html/page.tsx`
- Joyas: `src/app/JOYAS/joyas.htm/page.tsx`

## Destino WordPress recomendado

### 1) Pagina Inicio (template `front-page`)
- Patron `hero-piramicasa`:
  - Titulo principal
  - Subtitulo tecnico
  - CTA de contacto/menu
- Patron `menu-cientifico`:
  - Enlaces de secciones cientificas
- Patron `contacto-directo`:
  - Email
  - Telefonos
  - Horario resumido

### 2) Pagina Menu principal (template `page-menu-principal`)
- Patron `enlaces-principales`:
  - Lista ampliada de accesos
- Patron `horario-llamadas`:
  - Tabla semanal
- Patron `contacto-directo` y `aviso-legal-resumen`

### 3) Pagina Joyas (template `page-joyas`)
- Patron `joyas-destacadas`
- Cuerpo editable en `post-content` para textos largos
- Patron `contacto-directo`
- Patron `aviso-legal-resumen`

## Reglas de carga en WordPress
1. Subir imagenes desde `public/assets/cloned/images` a Biblioteca de medios.
2. Reemplazar placeholders de imagen en los patrones por archivos finales.
3. Mantener enlaces externos en nueva pestana si apuntan a dominios fuera del sitio.
4. Revisar acentos y caracteres especiales al pegar contenido legado.

## Pendientes para clon completo
1. Recapturar URLs validas que en la captura actual devolvieron 404.
2. Crear plantillas adicionales para esas nuevas paginas.
3. Completar menu de navegacion global con enlaces internos finales.
