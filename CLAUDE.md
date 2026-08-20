# Cafercorr — landing page

Landing institucional para una fábrica de embalajes/cartón corrugado ("Cafercorr"), pedido de un amigo para el negocio de su padre. No es e-commerce: no hay compra online, carrito ni pagos.

## Ubicación del proyecto

El código Next real vive en **`./ggf-pagina`**, no en la raíz de este repo. La raíz solo contiene assets sueltos (logo, referencias) además de la carpeta del proyecto.

## Stack

- Next.js 16 (App Router), React 19, JavaScript (sin TypeScript, ver `jsconfig.json` con alias `@/*` → `./src/*`)
- Tailwind CSS v4 (`@import "tailwindcss"` en `globals.css`, sin config JS separada)
- React Compiler habilitado (`reactConfig.reactCompiler = true`)
- `motion` (sucesor de framer-motion) para scroll-reveal sutil entre secciones — ver `src/components/Reveal.jsx`, wrapper reutilizable con `whileInView` (soporta prop `delay` para stagger)
- `lucide-react` para íconos (ojo: no incluye íconos de marcas/redes sociales, los sacaron por temas de trademark)
- `@radix-ui/react-dialog` para el panel de detalle de producto (`src/components/productos/ProductGrid.jsx`)
- Gestor de paquetes: **pnpm**
- Sin backend, sin base de datos, sin autenticación

## Enfoque técnico

- Sitio generado estático (SSG). No agregar API routes, DB ni auth salvo que el alcance cambie explícitamente.
- Los productos se manejan como data local (JSON/array en el código) — no hay CMS todavía. Si en el futuro el cliente necesita cargar productos él mismo, recién ahí evaluar un CMS liviano.
- Filtrado de productos: simple (por categoría, client-side), no se necesita algo avanzado (facetado, búsqueda, paginación server-side).
- Ficha de producto: vista de detalle + carrusel de "productos relacionados". Sin reviews, sin stock, sin precios si no se define lo contrario.
- Contacto: sin formulario con backend. Botones/links directos a WhatsApp (`wa.me/...`) y `mailto:` con los datos del padre del amigo.

## Secciones del sitio

1. **Hero** — imagen de cartones + nombre "CAFERCORR", falta agregar un CTA (ej. "Ver productos" / "Contactanos").
2. **Quiénes somos** — layout planeado: imagen ilustrativa a la izquierda, título + párrafo a la derecha (split 50/50 o asimétrico). Pendiente confirmar contenido real con el cliente.
3. **Servicios** — grilla de 4 tarjetas (asesoría/ventas, diseño y desarrollo del envase, producción, entrega). Ver referencia visual.
4. **Productos** (`/productos`) — listado con filtro simple por categoría (client-side) + detalle de producto con carrusel de relacionados (pendiente de definir con el cliente). Implementado: data mock en `src/data/productos.js` (categorías + productos placeholder, marcados con TODO), grilla filtrable en `src/components/productos/ProductGrid.jsx` (client component).
5. **Contacto** — WhatsApp y mail únicamente.

## Diseño

Bosquejo hecho en Figma por el usuario (capturas de referencia compartidas en la conversación: hero+nav y sección de servicios). Pendiente ver Quiénes somos, Productos y Contacto.

### Paleta

| Color | Uso |
|---|---|
| `#505050` | Fondo del footer |
| `#F0F0F0` | Fondo general del body |
| `#96A78D` | Verde principal — títulos, nav bar, fondo de tarjetas |

Pendiente/sugerido (no confirmado con el usuario todavía):
- Un verde más oscuro derivado de `#96A78D` para botones/CTAs y para diferenciar jerarquía visual entre nav y tarjetas (actualmente usan el mismo tono).
- Color de texto de body definido explícitamente (no especificado aún — se sugirió algo tipo `#2E2E2E` o reusar `#505050`).
- Ojo con contraste: `#96A78D` sobre `#F0F0F0` es bajo para texto chico; usar solo en títulos grandes/bold.

### Tipografías

- **Space Grotesk** → títulos y subtítulos (`font-heading`)
- **Inter** → texto general, links, botones (`font-sans`, default del body)

Ya configuradas vía `next/font/google` en `src/app/layout.js`, mapeadas a tokens de Tailwind en `globals.css` (`--font-heading`, `--font-sans`).

### Dirección visual

El usuario busca un estilo **minimalista que imponga presencia**: mucho espacio en blanco, tipografía grande y protagónica, pocos elementos decorativos, imágenes full-bleed (sin recortes/paddings que les resten peso) y la paleta de color haciendo todo el trabajo de identidad — no agregar ornamentos, sombras, gradientes o iconografía extra que no esté ya definida.

## Convenciones de trabajo

- Mantenerlo simple: es un sitio institucional chico, evitar abstracciones o infraestructura de más (sin backend, sin state management pesado, sin librerías innecesarias).
- Responsive es requisito (el diseño de Figma es desktop-first, hay que resolver mobile).
