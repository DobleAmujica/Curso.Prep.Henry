// No cambies los nombres de las funciones.

// "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    function obtenerMayor(x, y) {
      if (x>y || y<x){
          console.log('el mayor es', x);
      }
      if (y>x || x<y){
          console.log('el mayor es', y);
      }
      else if (y===x){
          console.log(' ambos numeros', x , 'y', y ,'son iguales');
      }
      
    }
    
    obtenerMayor(1000,5);

    //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

function mayoriaDeEdad(edad) {
  
  if (!(Number.isInteger(edad)) || (edad<0)){
    console.log('el numero no es una edad');
}
else if (Number.isInteger(edad)){
    if (edad>=18){
        console.log('si puede pasar');
    }
    if (edad>=0 && edad<18){
        console.log('no puede pasar');
    }

  }
}
mayoriaDeEdad(98);
  

  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  function conectionstatus(status){
    if (Number(status)){
        if (status===1){
            console.log('el usuario esta ONLINE');
        }
        if (status===2){
            console.log('el usuario esta AWAY');
        }
    else if (status!==1 && status!==2){
        console.log('el usuario esta OFFLINE');
    }
    }else {
        console.log('este programa funciona solo con numeros');
    }
}

    conectionstatus('hola');


  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  function saludo(idioma) {
    if (Number(idioma)){
     console.log('intentas romper el programa?');
    }else{
    idioma=idioma.toLowerCase();
    
    if (idioma==='aleman'){
     console.log('Guten Tag');
     }
    if (idioma==='mandarin'){
     console.log('Ni Hao');
     }
    if (idioma==='ingles'){
     console.log('Hello');
    }
    if (idioma!=='aleman' && idioma!=='mandarin' && idioma!=='mandarin'){
     console.log('no se que idioma es ese pero HOLA me alegro de conocerte');
    }
     }
 } 
  saludo(5);
 
   //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  function colors(color) {
    color=color.toLowerCase();

    switch (color){
        case 'blue':
            console.log('this is blue');
            break;
            
        case 'red':
           console.log('this is red');
            break;
        
        case 'green':
            console.log('this is green');
            break;
        
        case 'orange':
            console.log('this is orange');
            break;

            default:
                console.log('color not found');
            
    }
    }
    
    colors('BluE');

    // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  function esDiezOCinco(numero) {
    if (!(Number(numero))){
        console.log('Ingrese SOLO NUMEROS');
    }
    else if (numero===5 || numero===10){
        console.log(true);
    }
        else{
            console.log(false);
        }
  }
  esDiezOCinco('.');


  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    function estaEnRango(numero) {
      if (!(Number(numero))){
       console.log('ingrese solo numeros');
      }
      else if (numero<50 && numero>20){
           console.log('true');
      }
       else{
           console.log('false');
       }
     }
     estaEnRango();


 // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  function esEntero(numero){
    if (!(Number(numero))){
        console.log('Ingrese solo numeros');
    }
    else if (Number.isInteger(numero)){
        console.log(true);
    }
    else {
        console.log(false)
    }

    }
  esEntero('ghjtu');


 // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero

    function fizzBuzz(numero){
      if (!(Number(numero))){
          console.log('ingrese solo numeros');
          return;
      }
      if (numero%5==0 && numero%3==0){
          console.log('fizzbuzz');
          return;
      }
      if (numero%3==0){
          console.log('fizz');
          return;
      }
      if (numero%5==0){
          console.log('buzz');
          return;
      } else{
      
          console.log(numero);
      }}
  fizzBuzz('idf');

    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
    function operadoresLogicos(num1,num2,num3) {
      if ((Number(num1)) && (Number(num2)) && (Number(num3))){
          console.log('excelente solo ingreso numeros');
      }
          if (num1===0 || num2===0 || num3===0){
              console.log('Error');
              return;
          }
          if(num1<0||num2<0||num3<0){
              console.log('Hay negativos');
              return;
          }
          if(num1>num2||num1>num3){
              console.log('Numero',num1 ,'es mayor y postivo.');
          }
          if (num3>num1 && num3>num2){
              num3=num3+1;
              console.log(num3);
          }
          else {
              console.log(false);
          }
  }
  operadoresLogicos(7,9,45);

// Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  function esPrimo(numero){
    for ( i=2; i<numero/2; i++){
        resto=numero%i;
        if (resto===0){
            console.log('no es primo');
return;
        }
        else {
            console.log('es primo');
        }

    }
  }
  esPrimo(Math.exp());

//Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  function esVerdadero(valor){
    
    
    if (valor==true){
        console.log('Soy verdadero');
    }
    if (valor==false){
        console.log('Soy falso');
    }}
  
  esVerdadero(true);

//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  function tablaDelSeis(){
    let tabla=[];
      for (let i=0; i<11; i++){
          operacion=6*i;
      tabla.push(operacion);
      }
  console.log(tabla);
  }
  tablaDelSeis();

  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  
  function contador(numero){
    if (!(Number.isInteger(numero))){
        console.log('ingrese solo numeros enteros')
        return;
    }
    else if(Number.isInteger(numero)){
    let i=0;
    for (numero=numero;numero>i;numero=(numero/10)-(numero%10/10))  {
      
        i=i+1;
        console.log(numero);
}
    console.log(i);
    if (i===3){
        console.log(true);
    
        }}
        else {
            console.log(false);
            return;
        }
    }
    contador(999.5); 

function doWhile(numero) { //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

  function doWhile(numero) {
    if(!(Number(numero))){
        console.log('Ingrese solo numeros para que el programa se ejecute');
    }
    else{
    let i=0;

    do{
        i++;
        numero=numero*5;
       
        
    }while (i<8);
    console.log(numero);
    return i;
  }}
  doWhile(1);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
