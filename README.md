# Pintor José Luis Gracia Pavón

Landing local en español, realizada con HTML5, CSS3 y JavaScript vanilla. No necesita compilación, instalaciones ni servicios externos para funcionar.

## Abrir la web

En VS Code, abrir `index.html` con Live Server. Todos los enlaces a recursos son relativos y todas las imágenes y fuentes están incluidas en esta carpeta. También se puede abrir el HTML directamente; la copia del teléfono incluye una alternativa para entornos sin Clipboard API.

## Dirección visual

Catálogo editorial de color: marfil, terracota, antracita y salvia; titulares Newsreader y textos Manrope. Portada tipográfica escalonada con muestrario superpuesto, oficio asimétrico, proceso en pliegos de color y galería de formatos diferentes. Se revisaron las landings anteriores del repositorio sin modificarlas.

El símbolo de dos muestras superpuestas y la marca tipográfica son una **propuesta gráfica provisional**, no un logotipo oficial facilitado por el profesional. El favicon deriva del mismo símbolo.

## Información comercial

Solo se utiliza información facilitada: José Luis Gracia Pavón, pintor, teléfono `615 012 626` (`tel:+34615012626`). No se han añadido localidad, dirección, horarios, email, WhatsApp, años de experiencia, especialidades, precios, urgencias ni garantías. Las fases del proceso son explicaciones generales del oficio.

Los botones «Contactar» llevan a `#contacto`. Los enlaces «Llamar» utilizan el teléfono confirmado. El botón de copia escribe `615012626` y comunica el resultado mediante una región accesible. No hay formulario, analítica ni cookies propias.

## Fotografías y licencias

Todas las fotografías son **stock ilustrativo**. No representan trabajos realizados por José Luis, su equipo ni un catálogo de servicios confirmados. La web lo indica junto a la portada, el proceso y la galería. No se han utilizado imágenes de otras carpetas del repositorio ni imágenes generadas por IA.

Descargadas el 21 de octubre de 2026 desde Pexels y guardadas en WebP. La [licencia de Pexels](https://www.pexels.com/license/) permite su uso y modificación, también comercial, sin atribución obligatoria, con las restricciones indicadas en sus términos. No se implica respaldo del fotógrafo ni de las personas representadas.

| Archivo local | Autor | Fuente |
| --- | --- | --- |
| `img/rodillo-portada.webp` | Polina Tankilevitch | [Pexels 5583125](https://www.pexels.com/photo/a-person-holding-a-roller-paint-5583125/) |
| `img/preparacion.webp` | Antoni Shkraba | [Pexels 4981797](https://www.pexels.com/photo/a-man-putting-tape-on-the-wall-4981797/) |
| `img/aplicacion.webp` | Stephanie Ho | [Pexels 994164](https://www.pexels.com/photo/person-holding-paint-roller-while-painting-the-wall-994164/) |
| `img/acabado.webp` | Ksenia Chernaya | [Pexels 5691611](https://www.pexels.com/photo/painting-roller-on-wall-at-home-5691611/) |
| `img/herramientas.webp` | Ksenia Chernaya | [Pexels 5691707](https://www.pexels.com/photo/roller-and-brush-placed-on-paint-tray-5691707/) |
| `img/interior.webp` | Alexander F Ungerer | [Pexels 28906765](https://www.pexels.com/photo/sunlit-empty-room-in-modern-home-interior-28906765/) |
| `img/textura.webp` | Eva Bronzini | [Pexels 7597895](https://www.pexels.com/photo/close-up-of-a-wall-7597895/) |
| `img/brochas.webp` | Ivan S | [Pexels 5799016](https://www.pexels.com/photo/paintbrushes-and-a-paint-roller-covered-in-paint-5799016/) |

Las fotografías se comprimen y recortan visualmente con `object-fit`, sin alterar su contenido. En conjunto pesan aproximadamente 1,02 MiB.

## Tipografías

[Newsreader](https://github.com/google/fonts/tree/main/ofl/newsreader) y [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope), descargadas del repositorio oficial Google Fonts y almacenadas en `css/`. Las licencias SIL Open Font License correspondientes se conservan en `newsreader-OFL.txt` y `manrope-OFL.txt`.

## Accesibilidad y SEO

HTML semántico, un solo h1, idioma español, textos alternativos, enlace para saltar al contenido, estados de foco, menú con `aria-expanded`, cierre con Escape y restauración de foco, mensajes de copia accesibles y respeto a `prefers-reduced-motion`. Las animaciones de entrada son progresivas: sin JavaScript, el contenido y la navegación siguen disponibles.

Incluye título, descripción, etiquetas Open Graph y datos estructurados `Person` con nombre, oficio y teléfono confirmados. No se declara dirección ni área de servicio. No existe dominio confirmado: no se inventan canonical, `og:url` ni URL absoluta de imagen. La imagen Open Graph utiliza una ruta local; los verificadores sociales suelen requerir una URL absoluta para generar su vista previa.

## Comprobaciones realizadas

Pruebas en Chrome headless con servidor HTTP local temporal y capturas de página completa a **375, 768, 1440 y 1920 px**. Capturas revisadas visualmente y conservadas en `.qa/full-*.png`.

- Sin desbordamiento horizontal en los cuatro tamaños.
- Ocho fotografías distintas, todas cargadas y sin duplicados.
- Fuentes locales cargadas; anclas internas válidas.
- Menú móvil: apertura, cierre con Escape, recuperación del foco y cierre al seleccionar enlace.
- Clipboard API: contenido leído de vuelta igual a `615012626`; alternativa `execCommand` y mensaje de éxito comprobados.
- Todos los enlaces telefónicos usan `tel:+34615012626`; «Contactar» utiliza `#contacto`.
- Preferencia de movimiento reducido comprobada: desplazamiento y animaciones desactivados.
- Sin excepciones JavaScript ni errores de recursos en la consola; sintaxis de `js/script.js` comprobada con Node.
- Datos estructurados JSON válidos, sin información comercial adicional.

Resultados de la ejecución en `.qa/results.json`. El script `.qa/verify.cjs` usa Node y el Chrome instalado en Windows; no es una dependencia de la web. La carpeta `.qa/`, con las capturas, herramientas y resultados de prueba, se conserva únicamente en local y está excluida del repositorio. Las diferencias de 15 px entre viewport y ancho disponible en escritorio corresponden a la barra vertical de Chrome.

La verificación cubre Chrome; no se han realizado pruebas en dispositivos físicos ni llamadas telefónicas reales. El proyecto no contiene configuraciones de Netlify y no se ha realizado ningún despliegue. Las escrituras del trabajo se han limitado a esta carpeta independiente.
