// onclick solo permite una función por evento (la nueva reemplaza a la anterior);
// addEventListener permite registrar varias funciones y opciones como once.

contenedor.addEventListener("click", (event) => {
  const boton = event.target;
  if (!boton.classList.contains("btn-inscribir")) return;

  const tarjeta = boton.parentElement;
  const id = Number(tarjeta.getAttribute("data-id"));
  const evento = eventos.find((e) => e.id === id);

  if (evento.cupos > 0) {
    evento.cupos--;
    tarjeta.querySelector(".cupos").textContent = `Cupos disponibles: ${evento.cupos}`;
  }

  // Tarea 1: deshabilitar el botón cuando se agotan los cupos
  if (evento.cupos === 0) {
    boton.disabled = true;
    boton.textContent = "Agotado";
  }

  console.log(event.type, event.target, event.clientX, event.clientY);
});

// Tarea 2: resaltar la tarjeta al pasar el mouse
const tarjetas = document.querySelectorAll(".card");
tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("mouseover", () => tarjeta.classList.toggle("resaltada", true));
  tarjeta.addEventListener("mouseout", () => tarjeta.classList.toggle("resaltada", false));
});

// Tarea 3: listener que solo se ejecuta una vez
const tituloPrincipal = document.querySelector("h1");
tituloPrincipal.addEventListener("click", () => {
  const gracias = document.createElement("p");
  gracias.textContent = "¡Gracias por visitar TechEvents CR!";
  tituloPrincipal.insertAdjacentElement("afterend", gracias);
}, { once: true });

// Tarea 4: segundo listener en el mismo elemento y evento
tituloPrincipal.addEventListener("click", (event) => {
  console.log(event.target, event.type);
});