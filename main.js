function buscar() {
    const palabras = ['carro', 'perro', 'avion', 'moto', 'gato', 'caballo', 'mate', 'argentina', 'coder', 'coderhouse', 'javascript'];
    let palabraIngresada = capturarValorIngresado();
  
    if (isNaN(palabraIngresada)) {
      palabraIngresada = palabraIngresada.toLowerCase();
    }
  
    let palabraEncontrada = buscarPalabra(palabras, palabraIngresada);
    let contenedorResultados = document.querySelector('#resultados');
    let contenedor = document.createElement("div");

    contenedorResultados.innerHTML = '';
  
    if (palabraEncontrada) {
      contenedor.innerHTML = `<h5>Resultados de: ${palabraIngresada}</h5>
                              <ul id="lista-resultados">
                                  <li><img src="gif.png" alt="Gif"></li>
                                  <li><img src="gif.png" alt="Gif"></li>
                                  <li><img src="gif.png" alt="Gif"></li>
                                  <li><img src="gif.png" alt="Gif"></li>
                                  <li><img src="gif.png" alt="Gif"></li>
                              </ul>`;
  
      contenedorResultados.appendChild(contenedor);
    } else {
      contenedor.innerHTML = `<h5>No se encontró resultados de: ${palabraIngresada}</h5>`;
      contenedorResultados.appendChild(contenedor);
    }
}
  
function buscarPalabra(palabras, palabraIngresada) {
let result = palabras.find(e => e == palabraIngresada);
return result == palabraIngresada;
}

function capturarValorIngresado() {
let valorIngresado = document.querySelector('#buscador').value;
return valorIngresado;
}