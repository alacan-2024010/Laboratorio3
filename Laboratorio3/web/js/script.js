let puzzleContainer = document.getElementById("puzzle");
let mensaje = document.getElementById("mensaje");
let cronometro = document.getElementById("cronometro");
 
let piezas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ""];
let estado = [];
 
const filas = 4;
const columnas = 4;
 
const imagenURL = 'img/Corvette.jpg';
 
//Funcion para mezclar las piezas
function mezclar(array) {
    let copia =[...array];
    for (let i = copia.length - 1; i >0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

let tiempo = 600; 

let timerInterval;
 
function iniciarTemporizador() {

    detenerTemporizador();

    tiempo = 600; 

    cronometro.innerText = "Tiempo: " + tiempo + "s";

    timerInterval = setInterval(() => {

        tiempo--;

        cronometro.innerText = "Tiempo: " + tiempo + "s";

        if (tiempo <= 0) {


            mensaje.innerText = "¡PERDISTE!";
            alert("Has Perdido, se acabó el tiempo");
            detenerTemporizador();
        }
 
    }, 1000);

}
 
function detenerTemporizador() {

    clearInterval(timerInterval);

}

 
 
//Funcion para asignar imagenes a las piezas
function dibujar(){
    puzzleContainer.innerHTML = "";
    estado.forEach((valor, i) => {
        let celda = document.createElement("div");
        celda.classList.add("celda");
        celda.style.backgroundImage = `url('${imagenURL}')`; 
        celda.style.backgroundSize = '400px 400px'; 
        if (valor === "") {
            celda.classList.add("vacio");
            celda.style.backgroundImage = "none";
        } else {
             let fila = Math.floor(valor / columnas);
            let columna = valor % columnas;
            celda.style.backgroundPosition = `-${columna * 100}px -${fila * 100}px`;
            celda.addEventListener("click", () => mover(i));
        }
        puzzleContainer.appendChild(celda);
    });
}
 
//Funcion para mover las piezas
function mover(indice){
    let vacio = estado.indexOf("");
    let col = indice % columnas;
    let fila = Math.floor(indice / columnas);
    let colVacio = vacio % columnas;
    let filaVacio = Math.floor(vacio / columnas);
    //Verificar si es adyacente
    if ((Math.abs(col - colVacio) === 1 && fila === filaVacio) ||
            (Math.abs(fila - filaVacio) === 1 && col === colVacio)) {
        [estado[indice], estado[vacio]] = [estado[vacio], estado[indice]];
        dibujar();
        verificar();
    }
}
 
//Veridicar si el usuario gano o completo el rompecabezas
function verificar(){
     if (JSON.stringify(estado) === JSON.stringify(piezas)) {
        mensaje.innerText = "¡FELICIDADES! Completaste el rompecabezas.";
        alert("¡Felicidades! Has completado el rompecabezas.");
        detenerTemporizador();
    }
}
 
//Reiniciar Juego
function reiniciar() {
    estado = mezclar([...piezas]);
    mensaje.innerText = "";
    dibujar();
    iniciarTemporizador();
}
 
//Iniciar al cargar
reiniciar();