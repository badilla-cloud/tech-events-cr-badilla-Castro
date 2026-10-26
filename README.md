# TechEvents CR

Sitio web que muestra eventos de tecnología en Costa Rica, permite inscribirse y controla los cupos disponibles.

Trabajo de clase – Semana 5: DOM, eventos y debugging con JavaScript
ISW-521 Programación en Ambiente Web I · Universidad Técnica Nacional

## Integrantes

| Nombre | Usuario de GitHub | Rol |
|---|---|---|
| Alejandro Badilla | [@badilla-cloud](https://github.com/badilla-cloud) | Estudiante A (propietario) |
| Randy Castro | [@TheRacoc12](https://github.com/TheRacoc12) | Estudiante B (colaborador) |

## Enlaces

- **Repositorio:** https://github.com/badilla-cloud/tech-events-cr-badilla-Castro
- **Sitio publicado:** https://badilla-cloud.github.io/tech-events-cr-badilla-Castro/

## Descripción

TechEvents CR muestra tarjetas de eventos generadas con JavaScript a partir de un arreglo de datos. Cada tarjeta indica la fecha, la modalidad y los cupos disponibles, y tiene un botón para inscribirse que descuenta cupos y se deshabilita cuando el evento se agota. También incluye una sección de inscripción rápida y un ejercicio de debugging documentado.

## Tecnologías usadas

- **HTML5:** estructura semántica (`header`, `main`, `section`, `footer`).
- **CSS3:** variables en `:root`, Grid adaptable, efectos `:hover`, estado `:disabled` y media query para celulares.
- **JavaScript:** selección de elementos (`querySelector`, `querySelectorAll`, `getElementById`), creación e inserción (`createElement`, `appendChild`, `append`, `prepend`, `before`, `insertAdjacentHTML`, `insertAdjacentText`, `insertAdjacentElement`), navegación por el DOM y eventos con `addEventListener`, el objeto `event` y la opción `once`.
- **Chrome DevTools:** Console, Elements y Sources (breakpoints, Watch, Scope, Step over, Step into, Step out y Resume).
- **Git, GitHub y GitHub Pages:** ramas, Pull Requests y publicación del sitio.

## Estructura

```
├── index.html
├── css/styles.css
├── js/
│   ├── app.js       (DOM)
│   ├── eventos.js   (eventos)
│   └── debug.js     (ejercicio de debugging)
├── evidencias/      (capturas del debugging)
├── DEBUG.md         (bitácora de debugging)
└── README.md
```

## Pull Requests

| PR | Contenido | Autor | Revisor | Enlace |
|---|---|---|---|---|
| #1 | Estructura HTML (`index.html`) | badilla-cloud | TheRacoc12 (comentario) | [Ver PR](https://github.com/badilla-cloud/tech-events-cr-badilla-Castro/pull/1) |
| #2 | Estilos CSS (`css/styles.css`) | badilla-cloud | badilla-cloud | [Ver PR](https://github.com/badilla-cloud/tech-events-cr-badilla-Castro/pull/4) |
| #3 | DOM con JavaScript (`js/app.js`) | badilla-cloud | badilla-cloud | [Ver PR](https://github.com/badilla-cloud/tech-events-cr-badilla-Castro/pull/2) |
| #4 | Eventos (`js/eventos.js`) | badilla-cloud | badilla-cloud | [Ver PR](https://github.com/badilla-cloud/tech-events-cr-badilla-Castro/pull/5) |
| #5 | Ejercicio de debugging (`debug.js` y `DEBUG.md`) | badilla-cloud | badilla-cloud | [Ver PR](https://github.com/badilla-cloud/tech-events-cr-badilla-Castro/pull/3) |
| #6 | Corrección de bugs 1 y 2 | badilla-cloud | badilla-cloud | [Ver PR](https://github.com/badilla-cloud/tech-events-cr-badilla-Castro/pull/6) |
| #7 | Corrección del bug 3 | badilla-cloud | badilla-cloud | [Ver PR](https://github.com/badilla-cloud/tech-events-cr-badilla-Castro/pull/7) |
| #8 | README con URL publicada | badilla-cloud | badilla-cloud | [Ver PR](https://github.com/badilla-cloud/tech-events-cr-badilla-Castro/pull/8) |

> Nota: la columna PR sigue la numeración de la guía del trabajo. GitHub numera los Pull Requests en el orden en que se crearon, por eso los enlaces no coinciden con ese número. La mayoría de los PR fueron realizados y unidos por el Estudiante A porque el colaborador no pudo completar su parte.