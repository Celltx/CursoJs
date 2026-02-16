// Instrucciones para resolver el problema:
// Declara un arreglo llamado frutas con varios tipos de frutas.
// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
// Imprime en la consola la cantidad de cada tipo de fruta.
// Opcional: intenta implementar la solución con el otro ciclo también (for/while).

const frutas = ["Manzanas","Uvas","Peras","Mandarinas","Manzanas","Uvas","Peras","Mandarinas"]

for(let i=0; i<frutas.length;i++){
    
    let contador = 0;
    let repetida = false; 

    for(let j= 0 ; j< i; j++){
        if(frutas[i] === frutas[j]){
            repetida = true;
            break;
        }
    }

   if(repetida){
        continue;
   }

    for(let k = 0; k<frutas.length; k++){
        if(frutas[i] === frutas[k]){
            contador ++;
        }

}
console.log(frutas[i] + ": " + contador)
}
