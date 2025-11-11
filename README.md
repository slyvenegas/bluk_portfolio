# BlukStudio Portfolio

Este proyecto es un sitio web estático que muestra información, productos o servicios. Está construido con tecnologías web estándar como HTML, CSS (con preprocesamiento SCSS) y JavaScript, utilizando varias librerías para animaciones, carruseles y funcionalidades interactivas.

<img width="1352" height="635" alt="image" src="https://github.com/user-attachments/assets/99c94566-3cdb-4a47-b087-0eb245aa21a9" />

<img width="1213" height="640" alt="image" src="https://github.com/user-attachments/assets/f07c64e3-681f-47f1-b6dc-e3501d824092" />

<img width="1316" height="632" alt="image" src="https://github.com/user-attachments/assets/2d085503-b65d-4b5d-a8c2-701103bb4f8f" />

<img width="1364" height="637" alt="image" src="https://github.com/user-attachments/assets/27e18bbb-918b-4bbf-b782-4316054546e5" />

<img width="1363" height="646" alt="image" src="https://github.com/user-attachments/assets/70f9fd36-da40-4da9-9119-60c6eac82bda" />





## Tecnologías Utilizadas

*   **HTML5**
*   **CSS3**
*   **SCSS (Sass)**
*   **JavaScript**
*   **jQuery**
*   **Bootstrap**
*   **AOS (Animate On Scroll)**
*   **Owl Carousel**
*   **Fancybox (para galerías/lightboxes)**
*   **ScrollMagic**
*   **GSAP (GreenSock Animation Platform - TweenMax)**
*   **Isotope (para filtrado y ordenación de layouts)**
*   **ImagesLoaded (para detectar cuando las imágenes han terminado de cargar)**
*   **Jarallax (para efectos de paralaje)**
*   **jQuery Waypoints (para funciones basadas en el scroll)**
*   **jQuery Stellar (para efectos de paralaje de fondo)**
*   **jQuery Lettering (para control de texto individual)**
*   **jQuery AnimateNumber (para animar números)**

## Instalación y Configuración

Dado que este es un sitio web estático, no requiere una instalación compleja. Simplemente clona este repositorio y abre el archivo `index.html` en tu navegador o habilita el 'Live Server' si usas Visual Studio Code

```bash
git clone <URL_DEL_REPOSITORIO>
cd nombre-del-proyecto
```

Para el desarrollo de SCSS, necesitarás un compilador de SCSS (por ejemplo, Sass). Si tienes Node.js instalado, puedes instalar Sass globalmente:

```bash
npm install -g sass
```

Luego, para compilar tus archivos SCSS a CSS, puedes usar un comando como este (ajusta las rutas según sea necesario):

```bash
sass --watch scss/style.scss:css/style.css
```

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
.
├── index.html          # Página principal del sitio
├── customers.html      # Página de clientes
├── work.html           # Página de trabajos
├── css/                # Archivos CSS compilados y librerías de terceros
│   ├── _functions.css
│   ├── _mixins.css
│   ├── _site-blocks.css
│   ├── animate.min.css
│   ├── aos.css
│   ├── bootstrap.min.css
│   ├── jquery.fancybox.min.css
│   ├── merch.css
│   ├── mixins/
│   ├── owl.carousel.min.css
│   ├── owl.theme.default.min.css
│   └── style.css
├── js/                 # Archivos JavaScript y librerías de terceros
│   ├── aos.js
│   ├── bluk-web.js
│   ├── bootstrap.min.js
│   ├── custom.js
│   ├── debug.addIndicators.min.js
│   ├── imagesloaded.pkgd.js
│   ├── isotope.pkgd.min.js
│   ├── jarallax-element.min.js
│   ├── jarallax.min.js
│   ├── jquery-3.5.1.min.js
│   ├── jquery-migrate-3.0.0.min.js
│   ├── jquery.animateNumber.min.js
│   ├── jquery.fancybox.min.js
│   ├── jquery.lettering.js
│   ├── jquery.stellar.min.js
│   ├── jquery.waypoints.min.js
│   ├── owl.carousel.min.js
│   ├── popper.min.js
│   ├── scrollmagic.animation.gsap.min.js
│   ├── ScrollMagic.min.js
│   ├── slideMovil.js
│   ├── TweenMax.min.js
│   └── zoomMerch.js
├── scss/               # Archivos fuente SCSS
│   ├── _functions.scss
│   ├── _mixins.scss
│   ├── _site-base.scss
│   ├── _site-blocks.scss
│   ├── _site-elements.scss
│   ├── _site-footer.scss
│   ├── _site-navbar.scss
│   ├── _site-style.scss
│   ├── _variables.scss
│   ├── mixins/
│   └── style.scss
├── fonts/              # Fuentes personalizadas e iconos
│   ├── feather/
│   ├── flaticon/
│   └── icomoon/
└── images/             # Archivos de imagen (logos, posters, productos, clips, etc.)
    ├── 01_logos_img/
    ├── 02_poster_img/
    ├── 03_producto_img/
    ├── 04_clips/
    └── customers/

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
