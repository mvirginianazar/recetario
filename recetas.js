// extraigo la configuracion
const configReceta = JSON.parse(localStorage.getItem('vicky'));

console.log(configReceta);
//uso el valor y asigno el titulo
const elementTitulo = document.getElementById("receta-titulo");
// elementTitulo.innerText = "titulo provisorio"
elementTitulo.innerText = configReceta.title;


// alerta imagen instagram
function showAlertInstagram() {
    alert("Instagram is under construction :)");
  }