// Do not change any of the function names

//La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    //Tu código:

    function mayuscula(nombre) {

      return nombre.charAt(0).toUpperCase()+nombre.substring(1,nombre.length);
      
    }
  
    console.log(mayuscula('aaron'));
    

// Invoca al callback `cb`
    //Tu código:
    
    function hacerMayusculas(nombre){

      return nombre.charAt(0).toUpperCase()+nombre.substring(1,nombre.length);

  }
  function invocarCallback(nombre,cb) {

      return cb(nombre);    

}

console.log(invocarCallback('aaron',hacerMayusculas));


// Ó

function suma4mas4(){

  return 4+4 }

function invocarCallback(cb) {

  return cb();    

}
console.log(invocarCallback(suma4mas4));



//Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
    //Devolver el callback pasándole como argumentos los números recibidos.
    //Tu código:

    function sumaDePotencias(n1,n2){

      return Math.pow(n1,n2)+Math.pow(n2,n1);

  }

function operacionMatematica(n1, n2, cb) {

  return cb(n1,n2);

}

console.log(operacionMatematica(5,6,sumaDePotencias));

  // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    //Tu código:

    numeros=[12,34,56,78.6,56,78]

    function sumatoriaSelectiva(a,b){
      if (!(Number.isInteger(b))){
          a=a;}
          else{
              a=a+b;
          }
          return a;
      }
      
  
    
  const suma= numeros.reduce(sumatoriaSelectiva);
  console.log(suma);

    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    //Tu código:
    arreglo=[12,14,34,56];

    function sumaUno(arreglo){
        for(i=0;i<arreglo.length;i++){
            arreglo[i]=arreglo[i]+1;
        }
        return arreglo;
    }
    
    function forEach(array, cb) {
      return cb(array)
    }


    console.log(forEach(arreglo,sumaUno));


 // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    //Tu código:
    lista=[12,34,56,67,89]


    function sumaDos(elemento){
      return elemento*2;
    }  
  
  listaDoblada=lista.map(sumaDos);
  
  console.log(listaDoblada);

  //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    arreglo=['aaron','analfabeta','maguila','arrastras']

    function filtrador(palabra){
        if(palabra.charAt(0)==='a'){
            return palabra;
        }
        else{ 
           
        return delete palabra ;
        }
    
    }
    
    filtrado=arreglo.map(filtrador);
    depurado=filtrado.filter(Boolean);
    
    console.log(depurado);
    
    
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
