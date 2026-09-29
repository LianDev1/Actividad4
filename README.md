# Portafolio Personal | Tu Nombre

Portafolio web de desarrollador de software hecho con HTML, CSS, JavaScript y Bootstrap 5. Es un ejercicio de diseño y estructura; parte del contenido (proyectos y certificaciones) es de ejemplo.

- **Repositorio:** https://github.com/tu-usuario/portafolio
- **GitHub Pages:** https://tu-usuario.github.io/portafolio/

## Descripción del proyecto

- **Framework CSS:** Bootstrap 5.3 (tema oscuro con `data-bs-theme="dark"`). No se mezcla con Tailwind.
- **Plantilla:** portafolio oscuro de una sola página con cabecera, tecnologías, experiencia, proyectos, formación, extra y pie de contacto. Bootstrap aporta grid, utilidades y navbar; la plantilla visual se recreó con base en la imagen de referencia entregada en clase.
- **Descarga de Bootstrap:** https://getbootstrap.com/docs/5.3/getting-started/download/
- **Sin frameworks JS:** todo el comportamiento usa JavaScript puro.

### Secciones

| Sección | Descripción |
|---|---|
| Menú | Barra fija con enlaces a cada sección. |
| Inicio | Foto profesional, nombre, habilidad principal, ubicación y botones de correo, CV, GitHub y LinkedIn. |
| Sobre mí | Breve presentación personal. |
| Tecnologías | Java, Python, HTML, CSS, JavaScript, PHP, Bootstrap, Kotlin y Ktor. |
| Experiencia | Experiencia real o planeada, con años. |
| Proyectos | Tres proyectos con tecnologías, enlaces e imagen. |
| Formación | Carrera y certificaciones (Coursera, Platzi, EDteam, MoureDev, MOOC TecNM). |
| Extra | Tarjetas de actividades adicionales. |
| Contacto | Pie de página con correo y redes. |

## Estructura

```
index.html
css/portafolio.css
js/portafolio.js
img/foto-perfil.svg   (reemplazar por tu foto real)
img/capturas/         (capturas para este README)
```

## Proceso de creación

1. Analicé la imagen de referencia: fondo oscuro, columna central angosta, píldoras azules y secciones en orden.
2. Creé el repositorio y la estructura de carpetas (`css`, `js`, `img`).
3. Armé `index.html` con Bootstrap por CDN, iconos de Bootstrap Icons y Devicon, y la fuente Inter.
4. Definí la paleta y estilos propios en `css/portafolio.css` con variables CSS (fondo, azul y bordes).
5. Guardé mis datos (tecnologías, proyectos, certificaciones) en arreglos de `js/portafolio.js`, que genera las tarjetas. Así se edita todo en un solo lugar.
6. Añadí un menú fijo para navegar y adapté el diseño a móvil.
7. Sustituí la imagen genérica por mi foto real y formal.
8. Activé GitHub Pages en *Settings > Pages > Deploy from a branch > main / root*.

## Capturas de pantalla

![Escritorio](img/capturas/escritorio.png)
![Móvil](img/capturas/movil.png)
