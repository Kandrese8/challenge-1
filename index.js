// Reemplaza cualquier carácter que no sea minúscula o espacio por una cadena vacía
document.getElementById("texto").addEventListener("input", function(e) {
  let valor = e.target.value;
  e.target.value = valor.replace(/[^a-z\s]/g, '');
});
document.getElementById("texto").addEventListener("focus", function() {
  this.scrollIntoView(); // Esto asegura que el textarea esté completamente visible
});
document.getElementById("texto").addEventListener("pointerdown", function(event) {
  this.setPointerCapture(event.pointerId); // Captura el puntero para evitar interferencias
});


  function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let resultado = document.getElementById("texto-encriptado");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      resultado.textContent = textoCifrado;
      //document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
    } else {
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      resultado.textContent = "";
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let resultado = document.getElementById("texto-encriptado");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        resultado.textContent = textoCifrado;
        //document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
      } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        resultado.textContent = "";
      }
  }
  function copiar() {
    let resultado = document.getElementById("texto-encriptado").innerText;

    if (resultado.length != 0) {
        navigator.clipboard.writeText(resultado).then(function() {
            //alert("Texto copiado al portapapeles");
        }, function(err) {
            alert("Error al copiar el texto: ", err);
        });
    } else {
        alert("No hay texto para copiar");
    }
}