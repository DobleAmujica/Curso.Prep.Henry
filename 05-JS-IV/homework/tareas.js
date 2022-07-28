// No cambies los nombres de las funciones.
// Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
// Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
// Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
// Devuelve el objeto
// Tu código:

function crearGato(nombre, edad) {
  const gato={
    nombre:nombre,
    edad:edad,
    meow:function (){
      console.log('Meow!');
     
}
    
}
gato.meow=gato.meow();
console.log(gato)

}
crearGato('señor gato', 12);
