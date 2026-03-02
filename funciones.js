// Instrucciones para resolver el problema:
// Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
// Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

let librosLeidos = [];


function agregarLibro(titulo){  
   librosLeidos.push(titulo);
}

librosLeidos.push("El juego de la lógica");
librosLeidos.push("Java");
librosLeidos.push("La panza del tepozteco");
librosLeidos.push("Doctor sueño");

function mostrarLibrosLeidos(){
console.log(librosLeidos);
}

mostrarLibrosLeidos();