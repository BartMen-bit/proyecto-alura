// Función de encriptación con las reglas dadas
function encriptarTexto() {
    let userInput = document.getElementById('userInput').value;
    if (userInput) {
        let encriptado = userInput
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        
        mostrarResultado(encriptado);
    } else {
        alert('Por favor, ingresa un texto.');
    }
}

// Función de desencriptación con las reglas dadas
function desencriptarTexto() {
    let userInput = document.getElementById('userInput').value;
    if (userInput) {
        let desencriptado = userInput
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        mostrarResultado(desencriptado);
    } else {
        alert('Por favor, ingresa un texto.');
    }
}

// Función para mostrar el resultado y el botón de copiar
function mostrarResultado(texto) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <p id="resultText">${texto}</p>
        <button onclick="copiarYRestablecer()">Copiar</button>
    `;
}

// Función para copiar texto al portapapeles y restablecer la página
function copiarYRestablecer() {
    const texto = document.getElementById('resultText').innerText;
    copiarAlPortapapeles(texto);
    restablecerFormaInicial();  // Restablece a la forma inicial después de copiar
}

// Función para copiar texto al portapapeles
function copiarAlPortapapeles(texto) {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = texto;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// Función para restablecer la forma inicial (mostrar la imagen y reiniciar el input)
function restablecerFormaInicial() {
    // Restablece el contenido del contenedor de resultados a la imagen inicial
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<img src="img/imagen-pagina.png" alt="Imagen relacionada con encriptación" id="resultImage">`;
    
    // Limpia el contenido del input para permitir una nueva encriptación
    document.getElementById('userInput').value = "";
}

