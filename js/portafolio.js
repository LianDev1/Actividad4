// ====== EDITA AQUÍ TUS DATOS ======
const perfil = {
  correo: "jonathanj.gcisneros@gmail.com",
cv: "#", github: "https://github.com/LianDev1", linkedin: "https://www.linkedin.com/in/jnthnjcsnrs"
};

const tecnologias = [
  ["Java","devicon-java-plain colored"],["Python","devicon-python-plain colored"],
  ["HTML","devicon-html5-plain colored"],["CSS","devicon-css3-plain colored"],
  ["JavaScript","devicon-javascript-plain colored"],["PHP","devicon-php-plain colored"],
  ["Bootstrap","devicon-bootstrap-plain colored"],["Kotlin","devicon-kotlin-plain colored"],
  ["Ktor (framework Kotlin)","devicon-kotlin-plain colored"]
];

const experiencia = [
  {t:"Auxiliar de laboratorio de cómputo",s:"TecNM · Instituto Tecnológico de Oaxaca",d:"Soporte a compañeros en prácticas de programación y mantenimiento de equipos.",a:"2026 - Actual"},
  {t:"Proyecto de servicio social (en curso)",s:"Desarrollo de biblioteca digital",d:"Planeo desarrollar un sistema de control de asistencia con PHP y MySQL.",a:"2026"}
];

const proyectos = [
  {t:"Sistema de inventario",s:"Aplicación web con PHP y Bootstrap",d:"Control de productos, entradas y salidas con panel administrativo.",tec:[["PHP","devicon-php-plain"],["Bootstrap","devicon-bootstrap-plain"]]},
  {t:"App de tareas Android",s:"Kotlin y Ktor",d:"Aplicación móvil para organizar tareas escolares, con servidor en Ktor.",tec:[["Kotlin","devicon-kotlin-plain"],["Ktor","devicon-kotlin-plain"]]},
  {t:"API de biblioteca",s:"Java y Python",d:"API REST para préstamos de libros y un script en Python para reportes.",tec:[["Java","devicon-java-plain"],["Python","devicon-python-plain"]]}
];

const formacion = [
  {t:"Ingeniería en Sistemas Computacionales",s:"TecNM · Instituto Tecnológico de Oaxaca",d:"En curso. Enfoque en desarrollo de software.",a:"2023 - 2027"},
  {t:"Java desde cero",s:"Coursera",d:"Programación orientada a objetos y colecciones.",a:"2024"},
  {t:"Curso de Python",s:"Platzi",d:"Fundamentos, funciones y manejo de archivos.",a:"2024"},
  {t:"Desarrollo web con HTML, CSS y JavaScript",s:"EDteam",d:"Maquetación responsiva y DOM.",a:"2025"},
  {t:"PHP y MySQL",s:"MoureDev",d:"Backend básico y conexión a bases de datos.",a:"2025"},
  {t:"Kotlin para Android",s:"MOOC TecNM",d:"Fundamentos de Kotlin y apps móviles.",a:"2025"}
];

const extra = [
  {t:"Hackatón TecNM",d:"Participación en equipo (ejemplo)."},
  {t:"Club de programación",d:"Miembro activo del club escolar."},
  {t:"Voluntariado tecnológico",d:"Talleres de computación básica."}
];
// ====== FIN DE DATOS ======

const $ = id => document.getElementById(id);
const foto = "img/foto-perfil.svg"; // cambia a img/foto-perfil.jpg cuando pongas tu foto real

function redes(){
  return `<a class="pildora principal" href="mailto:${perfil.correo}"><i class="bi bi-envelope"></i>${perfil.correo}</a>
  <a class="pildora" href="${perfil.cv}" aria-label="Currículum"><i class="bi bi-file-earmark-text"></i></a>
  <a class="pildora" href="${perfil.github}" target="_blank" rel="noopener" aria-label="GitHub"><i class="bi bi-github"></i></a>
  <a class="pildora" href="${perfil.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>`;
}
$("redes-top").innerHTML = $("redes-footer").innerHTML = redes();

$("lista-tecnologias").innerHTML = tecnologias.map(([n,i]) => `<span class="pildora"><i class="${i}"></i>${n}</span>`).join("");

const fila = (x, extraHtml="", derecha="") => `
  <div class="item"><div class="icono"><i class="bi bi-code-slash"></i></div>
  <div class="flex-grow-1"><h3>${x.t}</h3><p class="sub">${x.s}</p><p class="desc">${x.d}</p>${extraHtml}</div>${derecha}</div>`;

$("lista-experiencia").innerHTML = experiencia.map(x => fila(x,"",`<span class="anios">${x.a}</span>`)).join("");
$("lista-formacion").innerHTML = formacion.map(x => fila(x,"",`<span class="anios">${x.a}</span>`)).join("");
$("lista-proyectos").innerHTML = proyectos.map(x => fila(x,
  `<div class="d-flex flex-wrap gap-2 mb-2">${x.tec.map(([n,i])=>`<span class="etiqueta"><i class="${i}"></i>${n}</span>`).join("")}</div>
   <div class="d-flex gap-2"><a class="pildora" href="#" aria-label="Demo"><i class="bi bi-link-45deg"></i></a><a class="pildora" href="${perfil.github}" aria-label="Código"><i class="bi bi-github"></i></a></div>`,
  `<img class="proy-img" src="${foto}" alt="Vista previa de ${x.t}">`)).join("");
$("lista-extra").innerHTML = extra.map(x => `<div class="col-12 col-sm-4"><div class="tarjeta"><img src="${foto}" alt="${x.t}"><div><h3>${x.t}</h3><p>${x.d}</p></div></div></div>`).join("");

$("anio").textContent = new Date().getFullYear();
