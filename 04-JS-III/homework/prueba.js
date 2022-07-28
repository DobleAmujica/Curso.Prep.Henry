
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