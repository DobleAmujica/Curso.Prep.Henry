// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'string';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 4000;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
  // "Return" la string provista: str
  // Tu código:
  
}
devolverString('hola');
// "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
function suma(x, y) {
    var suma=x+y;
    return suma;
  
  }
 console.log (suma(4,5));

 // Resta "y" de "x" y devuelve el valor
  // Tu código:
function resta(x, y) {
  
    resta=x-y;
    return resta;
}
console.log(resta(6,7));
// Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  
 
function multiplica(x, y) {
 var multiplica=x*y;
  return multiplica;
  
}
console.log(multiplica(9,7));

 // Divide "x" entre "y" y devuelve el valor
  // Tu código:
function divide(x, y) {
    var divide=x/y;
    return divide;
  }
  console.log(divide(9,6));
//Devuelve true si dos numeros son iguales
  function sonIguales(x, y) {
    if (x==y) {
    return true;
    }
      return false;
    }
    console.log(sonIguales(20,19));

     // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  function tienenMismaLongitud(str1, str2) {
    if (str1.length==str2.length){
        return true;
    }
    return false;}
    console.log(tienenMismaLongitud('aaron','fifty'));
 // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
function menosQueNoventa(num) {
  if (num<90) {
    return true;
  
  }
  return false;}
  console.log(menosQueNoventa(45));
   // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  function mayorQueCincuenta(num) {
    if (num>50) {
      return true;
    
    }
    return false;}
    console.log(mayorQuecincuenta(100));
  
 
  


// Obten el resto de la división de "x" entre "y"
  // Tu código:

function obtenerResto(x, y) {
  var resto=x%y;
return resto;}
  console.log(obtenerResto(34,5));

 // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

function esPar(num) {
  if (num%2==0){ 
    return true;
  }
  return false;}
 console.log(esPar(34));
  
// Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:

function esImpar(num) {
  if (num%2!=0){ 
    return true;
  }
  return false;}
 console.log(esImpar(34));

  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  function elevarAlCuadrado(num) {
    var cuadrado=Math.pow(num,2);
    return cuadrado;
    }
    console.log(elevarAlCuadrado(10));
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  function elevarAlCubo(num) {
    var cubo=Math.pow(num,3);
    return cubo;}
    console.log(elevarAlCubo(10));

// Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
  function potenciadebases(base,exponente) {
    var potencia=Math.pow(base,exponente);
    return potencia;}
    console.log(potenciadebases(10,5));

// Redondea "num" al entero más próximo y devuélvelo
  // Tu código:

  function redondealocerca(numeroredondo){
    var redondeado=Math.round(numeroredondo);
    return redondeado;
} 
console.log(redondealocerca(7.111111));
  

// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  function redondealoarriba(numeroredondo){
    var redondeado=Math.ceil(numeroredondo);
    return redondeado;
} 
console.log(redondealoarriba(7.111111));

  
//Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
  function Random(x,y) {
    var numero= Math.random(x,y);
    return numero;
  }
  console.log(Random(0,1));

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  

  function comprobando(numero){
    if (numero>0){
    return 'es postivo';}
     if (numero<0){
        return 'es negativo';
     }
    if (numero==0){
        return false;
    }}
    console.log(comprobando());
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

  function agregarSimboloExclamacion(str) {
    console.log(str +'!');
}
 agregarSimboloExclamacion('todo bien');

 // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:

function combinarNombres(nombre, apellido) {
    console.log(nombre, apellido);
}
combinarNombres('Aaron', 'Mujica');

  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
function obtenerSaludo(nombre) {
 console.log('hola, ',nombre);
  
}
obtenerSaludo('Dereck');

  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:

  function obtenerAreaRectangulo(alto,ancho) {
    var arearectanculo=alto*ancho;
     return arearectanculo;
     
   }
 console.log(obtenerAreaRectangulo(6,7));

   //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  

function retornarPerimetro(lado){

  var perimetro=4*lado;
  return perimetro;
  }
  console.log(retornarPerimetro(30));

 //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

  function obtenerAreadelTriangulo(base,alturs) {
    var Areadeltriangulo=(base*altura)/2;
     return Areadeltriangulo;
     
   }
 console.log(obtenerAreadelTriangulo(6,7));

}

//Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
function deEuroAdolar(euro){
 var cantidad_de_dolares=(euro*1.20);
 return cantidad_de_dolares;
  
}
console.log(deEuroAdolar(1));

 //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
function esVocal(letra)
function esVocal(letra){
  a=letra.length;
  b='no es vocal';
  c='es vocal';
  if (a==1){
      if (letra=='a'){
         return console.log(c);
  
      }
      if (letra=='e'){
          return console.log(c);
      }
      if (letra=='i'){
          return console.log(c);
      } 
      if (letra=='o'){
          return console.log(c);
      }
      if (letra=='u'){
          return console.log(c);
      }
      return console.log(b)
  
  }
      if (a!=1){
          return console.log('el numero de datos es incorrecto');
      }}
  
  esVocal('po');
  
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
