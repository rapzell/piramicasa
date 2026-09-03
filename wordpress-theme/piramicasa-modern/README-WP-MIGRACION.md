# Piramicasa Modern - WP migration notes

## Estado actual
- Base lista de tema WordPress Full Site Editing.
- Plantillas iniciales: `front-page`, `page`, `page-joyas`, `page-menu-principal`.
- Header y footer editables desde Site Editor.
- Patrones reutilizables para hero, contacto, horarios, menu tecnico y joyeria.
- Rutas internas ampliadas en el clon Next.js para evitar salidas externas.
- Secciones ya desarrolladas con contenido interno: `PIRAMIDES`, `CONSTRUCCION`, `GEOBIOLOGIA`, `LIBROS`, `JOYAS` y varias rutas `/es/*`.

## Instalacion del tema
1. Copiar `wordpress-theme/piramicasa-modern` dentro de `wp-content/themes/`.
2. Activar el tema desde el panel de WordPress.
3. Ir a **Apariencia > Editor** para ajustar header, footer y estilos globales.

## Mapeo recomendado del clon Ditto a WordPress
1. Crear paginas en WordPress:
   - Inicio
   - Menu principal
   - Joyas
   - Anillos
   - Joyas exclusivas
   - Viaje a Egipto
   - Bloques de contenido tecnico: Construccion, Geobiologia, Libros, Piramides
2. Pegar contenido por bloques en cada pagina.
3. Subir imagenes desde `public/assets/cloned/images` al Media Library.
4. Configurar menu principal con enlaces internos.

## Asignacion de plantillas sugerida
1. Pagina **Inicio**
   - Definir como portada estatica en Ajustes > Lectura.
   - Usar plantilla `front-page`.
2. Pagina **Menu principal**
   - Usar plantilla `page-menu-principal`.
3. Pagina **Joyas**
   - Usar plantilla `page-joyas`.
4. Resto de paginas de contenido
   - Usar plantilla `page`.

## Patrones disponibles
- `piramicasa-modern/hero-piramicasa`
- `piramicasa-modern/menu-cientifico`
- `piramicasa-modern/contacto-directo`
- `piramicasa-modern/joyas-destacadas`
- `piramicasa-modern/aviso-legal-resumen`
- `piramicasa-modern/enlaces-principales`
- `piramicasa-modern/horario-llamadas`
- `piramicasa-modern/intro-cientifica`
- `piramicasa-modern/joyas-texto-base`

## Siguiente fase (recomendada)
1. Volcar en WordPress las paginas ya mapeadas en `MAPEO-PAGINAS-TEMPLATES.csv`.
2. Transformar las paginas con mayor trafico en patrones Gutenberg reutilizables.
3. Definir campos de negocio (telefono, horario, links PDF) en opciones globales.
4. Revisar SEO tecnico (titles, descriptions, sitemap, robots) en WordPress.
5. Hacer QA funcional final: enlaces internos, responsive, formularios y contacto.

## Operativa de entrega
- Checklist paso a paso: `CHECKLIST-PUBLICACION-WP.md`
- Mapeo de paginas/plantillas: `MAPEO-PAGINAS-TEMPLATES.csv`
