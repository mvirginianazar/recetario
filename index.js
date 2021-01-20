// document lo define el browser y no lo tocamos

// window que lo define el browser pero podemos agregar cosas

let config = { 
    guisoDeLenteja: { 
        title: "Guiso de Lentejas",
        procedimiento: [
            "En una cacerola rehogar la cebolla, el ajo y la zanahoria en aceite. Agregar el morrón cortado en pequeños trozos.cortar y preparar vegetales.En una cacerola rehogar la cebolla, el ajo y la zanahoria en aceite. Agregar el morrón cortado en pequeños trozos.cortar y preparar vegetales",
            "cocinarIncorporar la carne al rehogado. Condimentar con pimienta y las hierbas aromáticas. Verter el vino y dejar evaporar el alcohol."
        ]
    },
    shortRibs: { 
        title: "'Slow cooked short ribs",
        procedimiento: [
            "STEP 1",
            "STEP 2"
        ]
    }
}

function onReceipeClicked(configId) {
    const selectedReceipe = config[configId];
    console.log(selectedReceipe);
    localStorage.setItem('vicky', JSON.stringify(selectedReceipe) );
    window.location.href = "/receta-detalle-template.html"
}






// alerta imagen instagram
  function showAlertInstagram() {
    alert("Instagram is under construction :)");
  }

  // alerta imagen linkedin
  function showAlertLinkedin() {
    alert("Linkedin is under construction :)");
  }