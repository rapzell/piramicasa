# Piramicasa Modern - Checklist de Entrega

## Tema WordPress FSE (Full Site Editing)

### Estructura de Plantillas
- [x] `front-page.html` - Inicio con hero, catalogo, beneficios, ciencia, nosotros, menu, confianza, contacto
- [x] `page-piramides-terapeuticas.html` - Productos: camas, casas, piramides menores
- [x] `page-ciencia-evidencia.html` - Contenido tecnico, dossier, base cientifica
- [x] `page-sobre-nosotros.html` - Historia, equipo, filosofia
- [x] `page-contacto.html` - Contacto directo, horario, formulario
- [x] `page-joyas.html` - Joyeria personalizada con CTA
- [x] `page-menu-principal.html` - Indice tecnico con enlaces internos
- [x] `page.html` - Plantilla base con CTA y aviso legal

### Template Parts
- [x] `header.html` - Navegacion: Inicio, Piramides, Ciencia, Nosotros, Joyas, Contacto
- [x] `footer.html` - Marca, enlaces directos, legal, redes sociales

### Patrones de Bloque (15 patrones)
- [x] `hero-piramicasa` - Hero con CTA primario y secundario
- [x] `catalogo-piramides` - Grid de familias de producto en cards
- [x] `beneficios-premium` - Beneficios en 3 columnas con cards
- [x] `ciencia-evidencia` - Seccion azul profundo con CTAs
- [x] `intro-cientifica` - Resumen editorial en card con borde
- [x] `sobre-nosotros-resumen` - Historia, filosofia y equipo
- [x] `menu-cientifico` - Accesos rapidos a secciones tecnicas
- [x] `confianza-avales` - Bloque de confianza con CTAs
- [x] `contacto-directo` - Contacto en 2 columnas con horario
- [x] `horario-llamadas` - Tabla semanal editable
- [x] `cta-consulta` - CTA oscuro premium reutilizable
- [x] `aviso-legal-resumen` - Aviso legal con enlace interno
- [x] `joyas-destacadas` - Joyeria con imagen, lista y CTAs
- [x] `joyas-texto-base` - Narrativa de joyeria
- [x] `enlaces-principales` - Menu tecnico en 2 columnas con CTA

### Sistema de Diseno
- [x] Paleta: Oro Antiguo (#C49B3B), Azul Profundo (#1E3A5F), Perla (#F8F4F0), Terracota (#E87A5D)
- [x] Tipografia: Playfair Display (titulos) + Inter (cuerpo)
- [x] Google Fonts cargadas en frontend y editor
- [x] Editor style para vista previa Gutenberg
- [x] `theme.json` con tokens de color y tipografia
- [x] CSS variables coherentes entre style.css y editor-style.css

### Detalles Visuales Profesionales
- [x] Botones pill (border-radius: 999px) con hover transform
- [x] Cards con hover lift y shadow premium
- [x] Hero con gradiente radial dorado + terracota
- [x] Seccion ciencia con fondo azul profundo
- [x] Tablas con zebra striping y hover
- [x] Navegacion con underline hover animado
- [x] Footer oscuro con 3 columnas + redes
- [x] Labels uppercase con letter-spacing para editorial feel
- [x] Max-width en titulos y parrafos para legibilidad
- [x] Font-smoothing antialiased

### Responsive
- [x] Breakpoint 900px: columnas gap, botones full-width, border-radius reducido
- [x] Breakpoint 600px: padding reducido, hero compacto, titulo sitio reducido
- [x] Navegacion overlay menu en movil

### WordPress Editable por Cliente
- [x] Todos los patrones son bloques Gutenberg nativos
- [x] Sin codigo custom no editable
- [x] Enlaces internos a rutas WP (no externos)
- [x] Menu de navegacion editable via Site Editor
- [x] Footer editable via Site Editor
- [x] Contenido editable en cada pagina via post-content
- [x] Horario editable como tabla Gutenberg
- [x] Textos de hero, CTAs y secciones editables inline

### Pendiente de Implementacion (Fase 3 WordPress)
- [ ] Instalar WordPress + tema en servidor
- [ ] Crear paginas con slugs correspondientes
- [ ] Instalar plugins: Yoast SEO, Wordfence, WP Rocket, WPForms, Smush
- [ ] Configurar WooCommerce en modo catalogo (sin pago)
- [ ] Crear Custom Post Types para beneficios cientificos
- [ ] Configurar UpdraftPlus para backups automaticos
- [ ] Migrar contenido tecnico original a nuevas paginas
- [ ] Anadir imagenes reales de productos
- [ ] Configurar formulario de contacto (WPForms/CF7)
- [ ] Optimizar SEO on-page con Yoast/RankMath
