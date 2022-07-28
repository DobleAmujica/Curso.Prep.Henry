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
depurado=filtrado.filter();

console.log(depurado);





    
