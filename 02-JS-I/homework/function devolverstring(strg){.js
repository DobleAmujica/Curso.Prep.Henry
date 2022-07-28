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
