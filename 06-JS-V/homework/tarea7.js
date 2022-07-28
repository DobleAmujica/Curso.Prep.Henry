const vector=[12,5,6]
const palabrerio=['Aaron','le','gusta','la','cancion','dear mamma'];

function moduloVector(a,b){
    return Math.pow(Math.pow(a,2)+Math.pow(b,2),0.5);
}

function frase(acc,elemento){
    return acc+' '+elemento
}

const suma=vector.reduce(moduloVector);

console.log(suma);

const frasecompleta=palabrerio.reduce(frase);

console.log(frasecompleta);