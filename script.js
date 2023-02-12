function ejecutar() {
  //numero de enlaces en la pagina
  let links = document.querySelectorAll("a");
  let number = links.length;
  document.querySelector(
    ".enlaces-total"
  ).innerHTML = `Hay ${number} enlaces en la pagina`;
  //Dirección a la que enlaza el penúltimo enlace
  let penultimoLink = links[number - 2];
  let direccion = penultimoLink.getAttribute("href");
  document.querySelector(
    ".enlaces-penultimo"
  ).innerHTML = `El penultimo enlace enlaza a ${direccion}`;
  //Numero de enlaces que enlazan a http://prueba
  let pruebaCount = 0;

  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") == "http://prueba") {
      pruebaCount++;
    }
  }
  document.querySelector(
    ".enlaces-prueba"
  ).innerHTML = `${pruebaCount} enlaces enlazan a http://prueba`;

  //Número de enlaces del tercer párrafo
  let tercerParra = document.querySelectorAll("p")[2];
  let tercerParaLinks = tercerParra.querySelectorAll("a").length;
  document.querySelector(
    ".enlaces-tercer-parra"
  ).innerHTML = `Hay ${tercerParaLinks} enlaces en el tercer parrafo`;
}
