//alert("Hola este es mi Javascript");
//let Nombre = "kenye";
//contante no se le puede cambiar valor
//const Nombre2 = "fegrt";
//alert(Nombre);
//console.log(Nombre);

//selector de elementos
//let contenido = "kenye";
//let titulo = document.querySelector("#t");
//titulo.innerHTML = contenido;

//condicionales
//let textoTitulo = titulo.innerHTML;
//if (textoTitulo == "kenye") {
//  titulo.innerHTML = "Otro";
//} else {
  console.log("no se cumple");
//}
//funciones
//let parrafoTxt = "KRDA";
//let parrafo2 = document.querySelector(".parrafo2");

//function cambiarTxt(ParrafoTxt) {
//  let contenido = `Mi nombre es ${parrafoTxt}`;
//  return contenido;
//}

//parrafo2.innerHTML= cambiarTxt();
//NAV
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

//formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length <= 4) {
    console.log(nombre.value.length);
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});