//Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquíarre
  arreglo=[0,19,56,79,56,77,87];
  function cuentoElementos(arreglo){


elementosmayoresque=0;


for(i=0;i<arreglo.length;i++){

if (!(Number(arreglo[i])) ){
    console.log('a');
}
  else  if (arreglo[i]>18){
        ++elementosmayoresque;
    }

}
console.log('la cantidad de elementos mayores de 18 es ' , elementosmayoresque);

}

  cuentoElementos(arreglo);