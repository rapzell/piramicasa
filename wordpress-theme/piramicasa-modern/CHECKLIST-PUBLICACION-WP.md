# Checklist de publicacion WordPress (menos de 1 hora)

## 0) Preparacion (5 min)
1. Tener un WordPress limpio (local o hosting) con usuario administrador.
2. Confirmar version recomendada: WordPress 6.6+ y PHP 8.1+.
3. Tener acceso al repositorio/carpeta del proyecto.

## 1) Instalar tema (5 min)
1. Copiar carpeta `wordpress-theme/piramicasa-modern` a:
   - `wp-content/themes/piramicasa-modern`
2. En WordPress ir a **Apariencia > Temas**.
3. Activar **Piramicasa Modern**.

## 2) Crear paginas base (10 min)
Crear estas paginas:
1. `Inicio`
2. `Menu principal`
3. `Joyas`
4. `Anillos`
5. `Joyas exclusivas`
6. `Viaje a Egipto`
7. `Construccion de piramides y formulas`
8. `Geobiologia`
9. `Libros de piramides`
10. `Terminos y garantias legales`
11. `Datos de contacto`
12. `Centros de terapia piramidal`
13. `Avales terapia piramidal oficial`
14. `Envio de piramides a todo el mundo`
15. `Centro terapeutico tipi`
16. `Dossier basico piramicasa`
17. `Piramide jardin`
18. `Biografia Wilhelm Reich`
19. `Biones`
20. `Proporciones piramidales`
21. `Materiales de construccion`
22. `Montaje y orientacion`
23. `Seguridad y uso`
24. `Introduccion a la piramidologia`
25. `Manual de terapia piramidal`
26. `Historia de las piramides`
27. `Geobiologia aplicada`
28. `Bibliografia tecnica`

Tip: usar `MAPEO-PAGINAS-TEMPLATES.csv` como lista maestra para no dejar paginas fuera.
Tip 2: al terminar, comprobar que el numero de paginas creadas coincide con el CSV de mapeo.

## 3) Asignar plantilla por pagina (10 min)
Editar cada pagina y asignar plantilla:
1. `Inicio` -> plantilla de portada (`front-page`)
2. `Menu principal` -> `page-menu-principal`
3. `Joyas` -> `page-joyas`
4. Resto de paginas -> `page`

## 4) Configurar portada estatica (3 min)
1. Ir a **Ajustes > Lectura**.
2. Seleccionar **Una pagina estatica**.
3. Portada: `Inicio`.

## 5) Cargar imagenes del clon Ditto (10 min)
1. Ir a **Medios > Biblioteca**.
2. Subir imagenes desde `public/assets/cloned/images`.
3. En cada pagina/patron, reemplazar imagenes placeholder por las definitivas.

## 6) Revisar enlaces y contacto (7 min)
1. Revisar email, telefonos y horarios en patrones:
   - `contacto-directo`
   - `horario-llamadas`
2. Verificar enlaces externos en nueva pestana cuando corresponda.
3. Verificar link legal en `aviso-legal-resumen`.

## 7) Menu de navegacion (5 min)
1. Ir a **Apariencia > Editor > Navegacion**.
2. Ajustar elementos: Inicio, Menu principal, Joyas, Contacto.
3. Guardar cambios.

## 8) QA final (5 min)
1. Comprobar responsive en movil/desktop.
2. Revisar ortografia y acentos (contenido legado).
3. Comprobar que no haya enlaces rotos.
4. Confirmar indexacion basica (titulo del sitio y visibilidad).

## Entregable final
- Tema activo y editable por cliente desde Gutenberg/FSE.
- Paginas principales publicadas con estructura moderna y modular.
