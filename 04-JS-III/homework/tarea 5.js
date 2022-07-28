// No cambies los nombres de las funciones.

// Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  const array=[5,6,7,8,9];
  function devolverPrimerElemento(array) {
    
        console.log(array[0]);
  }
  devolverPrimerElemento(array);

// Devuelve el último elemento de un array
  // Tu código:

  let array=['Cdt',56,'volta'];
  function devolverUltimoElemento(array) {
    console.log(array[array.length-1]);
  }
  devolverUltimoElemento(array);


// Devuelve el largo de un array
  // Tu código:
  
let array=['56',67+6,'g'];
  function obtenerLargoDelArray(array) {
    console.log('La longitud de del vector es ', array.length, 'elementos');
  }
  obtenerLargoDelArray(array);


 // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    const array=[1,2,3,98,5];


    function incrementarPorUno(array) {
        let i=0;
        do{
            array[i]=array[i]+1;
            if (!(Number(array[i]))|| !(Number.isInteger(array[i]))){
                console.log('alguno de los elementos no es un NUMERO ENTERO');
                return;
            }
            i++;
        }
        while (i<array.length);
       console.log(array);
      }
      incrementarPorUno(array);


 // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  let array=[3,'6',7,89,'-'];
  function agregarItemAlFinalDelArray(array, elemento) {
    array.push(elemento);
    console.log(array);

  }
  agregarItemAlFinalDelArray(array,'traductor');


  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  let array=['hola','989, ' ,'bebito fiu fiu'];

  function agregarItemAlComienzoDelArray(array, elemento) {
    array.unshift(elemento);
    console.log(array);

  }
  agregarItemAlComienzoDelArray(array,988654);

  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
let palabras=['hola ','bebe ','como ', 'estas ?'];

  function dePalabrasAFrase(palabras) {
  
  frase=' ';
    for  (let i=0; i<palabras.length;i++ ) { 

        frase=frase+ palabras[i];

    }
console.log(frase);
}
dePalabrasAFrase(palabras);


 // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  array=[45,67,677,'gh','AARON'];
  function arrayContiene(array, elemento) {
    let i=0;
    do{
        if(array[i]===elemento){
            console.log(true);
            return;
        }
         if(array[i]!==elemento){
            i++;

        }
        
    }
    while (i<array.length);
        if (elemento!==array[array.length-1]){
        console.log(false);
        return;
        }

}
    arrayContiene(array,'AARON');

    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    
    
    numeros=[34,56,78,87,'656'];
    function agregarNumeros(numeros) {
        let i=0;
        a=0
        do{ 
            if (!(Number.isInteger(numeros[i]))){
                console.log('Hay un elemento en el vector que no es un numero entero');
                return;
            }
            else{
            a=numeros[i]+a;
               
                i++;
        }
     } while (i<numeros.length);
        console.log(a);
    
}
agregarNumeros(numeros);


    // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  resultadosTest=[20,10,01,05,14,5,18,20];
  function promedioResultadosTest(resultadosTest) {
    
let i=0;
let promedio=0;
do{
    if (!(Number.isInteger(resultadosTest[i]))){
        console.log('Algun dato del vector no es un numero entero');
        return;
    }
    else{
    promedio=promedio+(resultadosTest[i]/resultadosTest.length);
    i++;
    }
}
while (i<resultadosTest.length);
console.log('El promedio de dichos resultados es ', promedio);
  }
  promedioResultadosTest(resultadosTest);
// "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:

    numeros=[300,Math.exp(33),10,1,-50]
    function numeroMasGrande(numeros) {
    
        let i=0;
        mayor=numeros[i];
    do{ 

        if(mayor>=numeros[i]){
            mayor=mayor;
            i++;
           
        }
        else if(mayor<numeros[i]){
            mayor=numeros[i];
            i++;
            
        }}
    while (i<numeros.length);
console.log(mayor)
   
  }
  numeroMasGrande(numeros)


 // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
   // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
 // Escribe tu código aquí:
 function multiplicarArgumentos(cantidades) {
    if(arguments.length===0){
            
        return console.log('0');
    }
    if(arguments.length===1){
        return console.log(cantidades);
    }
    else{
    for(i=1;i<arguments.length;i++){
       
        
        cantidades*=arguments[i];
    }
    }
    console.log(cantidades);}
multiplicarArgumentos(5);
    

//Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  const arreglo=[0,123,45,6]
  function cuentoElementos(arreglo){
      a=0;
      for (i=0;i<arreglo.length;i++){
              
          if (arreglo[i]>18){
              a++;
          }
          
          }
          
          console.log('el numero de elementos mayores que 18 son: ',a);
      }
  
    cuentoElementos(arreglo);
    

//Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   


  numeroDeDia=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];  
  function diaDeLaSemana(Dia) {
  if(!(Number.isInteger(Dia))){
      console.log('Ingrese solo NUMEROS enteros');
      return;
  }
  else if (Dia>=1&&Dia<=7){
   i=Dia-1;
   numeroDeDia[i];
  
   if (i==0||i==6){
      console.log(numeroDeDia[i]);
      console.log('Es fin de semana.');
      return;
   }
   if (i>=1&&i<=5){
      console.log(numeroDeDia[i]);
      console.log('Es dia laboral.');
  
    } 
  }else {
      console.log('No esta en el rango de 1-7');
      return;
  }
  }
  diaDeLaSemana(2);
  


//Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí

    function empiezaConNueve(n) {
      if (!(Number.isInteger(n))){
          console.log('Ingrese solo numeros enteros');
          return;
      }
      else{
      for(i=0;n>2;i++){
          n=n/10;
      }
      }
      n=Math.floor(n*10);
      
      if (n===9){
          console.log(true);
          return;
      }else console.log(false);
      
    }
    empiezaConNueve(10000);


//Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
let matriz=[4,4,0];

function todosIguales(matriz){

for(i=0;i<matriz.length-1;i++){
  
  a=matriz[i];
    if (a!==matriz[i+1]){
      respuesta=false;
      
    }
    if (a===matriz[i+1]){
      respuesta=true;

    }
  }
  console.log(respuesta);
}
todosIguales(matriz);

 //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código

  let Año=['Febrero'];
      Meses=[];
  function EleccionDeMeses(Año){
    for(i=0;i<Año.length;i++){
      a=Año[i];
        if(a==='Enero'||a==='Marzo'||a==='Noviembre') {
            Meses.push(a);
          } 
      
    
          }
          console.log(Meses)
        }
  EleccionDeMeses(Año);

 //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  vector=[200,199,1,2,34,56,8,];
  vector2=[];
function mayorACien(vector) {
  for(i=0;i<vector.length;i++){
    a=vector[i];

    if(!(Number.isInteger(a))||a>200||a<0){
      console.log('el vector debe tener solo numeros ENTEROS entre [0,200]');
      return;
    }
    else
    if (a>100){
      vector2.push(a);

    }
  } 
  console.log(vector2);
 
}
mayorACien(vector);

  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  numero=[5,3,0,8,2,0,9,8,7,6];
  numeroSumados=[];
function breakStatement(numero) {
i=0;
  
  while (i<10){
    a=numero[i]+2;
    numeroSumados.push(a);
  if (a===i)
    break;
  i++;
  }
console.log(numeroSumados);
}
breakStatement(numero);


//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  numero=[9,9,9,9,9,6];
  numeroNuevo=[];
function continueStatement(numero) {
sum=0;
for(i=0;i<numero.length;i++){
    
    sum=numero[i]+2;
    numeroNuevo.push(sum);
    
    if (i===4)
    numeroNuevo[i]=numero[i];
    continue;

    
    }

    console.log(numeroNuevo);
}
       
  continueStatement(numero);



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
