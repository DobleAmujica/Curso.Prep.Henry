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



 // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:


  function agregarPropiedad(objeto, property) {

    const cualquiercosa={
      objeto:objeto,
      property:property
  
    }
    return objeto;
  }
  
    agregarPropiedad('null','caro') ;
  
    console.log(agregarPropiedad)

  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:

  function invocarMetodo(objeto, metodo ){
    const manzana={
      cualquiera: function metodo(){
        console.log('cualquier cosa');
    
      }
    
    }
    console.log(manzana['cualquiera']);
    
    }
    invocarMetodo( 'no entiendo estos enunciados' );


  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  objetoMisterioso={
    numeroMisterioso:6
    }
  function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    producto=objetoMisterioso["numeroMisterioso"]*5
    return console.log(producto);
  }

  
  
    multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) ;


  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  let carro={
    esposa:true,
    uso:'160 km' ,
    numeroderuedas: 3}

function eliminarPropiedad(objeto, unaPropiedad) {
delete (carro['uso']);
  console.log(carro);
  return carro;

}
eliminarPropiedad(carro,carro.uso);


  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  

  
  function nuevoUsuario(nombre, email, password) {

    let usuarioMessenger={
      nombre:nombre,
      email:email,
      password:password}
  
      
  
      console.log(usuarioMessenger);
    return;
    }
    nuevoUsuario('Braulio', 'Brauliosaiyayin69@gmail.com', 'Gokyfase4.');

  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
    let usuario={
      nombre:'Aaron',
      Apellido:'Mujica',
      }
    function tieneEmail(usuario) {
      if (usuario['email']==undefined){
        console.log (false);}
        else{
          console.log(true);
        }
      }
      
      tieneEmail(usuario);



 // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  let cancion={
    genero:'Reggaeton',
    interpretes:['wisin y yandel','Bad bunny','Big soto','Canserbero'],
    duracion:'4:50 min'
  }
    function tienePropiedad(objeto, propiedad) {
      
      if(objeto.propiedad===propiedad){
      console.log(true);}
      else{
        console.log(false);
      }
    }
    tienePropiedad(cancion,'genero');

// Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:

  let USUARIO={
    email:'Gokufase4@gmail.com',
    password:'cdt69ñ',
  
  }
  function verificarPassword(usuario, password) {
    if (usuario['password']===password){
      console.log(true);
  
    }
    else{
      console.log(false);
    }
  }
  verificarPassword(USUARIO,'cdt69ñ');

  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  let USUARIO={
    nombre:'Aaron',
    Apellido:'Mujica',
    email:'aaronresorte@hotmail.com',
    password:1159267
  }

  function actualizarPassword(usuario, nuevaPassword) {
    usuario['password']=nuevaPassword;
    
    console.log(usuario);
  }
  actualizarPassword(USUARIO,'nuevopasswordmaslacra');

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:

 let persona={
  nombre:'Aaron',
  apellido:'Mujica',
  edad:24,
  amigos:['Veronica Gonzalez','Julian leuzzi','Richard Gallardo'],

 }
 function nuevoAmigo(usuario,nuevoamigo){
  usuario['amigos'].push(nuevoamigo);
  console.log(usuario);
  console.log(usuario['amigos']);
 }
nuevoAmigo(persona,'Juliana Lozada');
}

 // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  usuarios=[aaron={esPremium:true},miguel={esPremium:true},david={esPremium:true}]
  function pasarUsuarioAPremium(usuarios) {
console.log(usuarios);
  }
  pasarUsuarioAPremium(usuarios)

// "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  mujicamartinez={
    posts:[post={likes:1},post={likes:4},post={likes:100000},post={likes:33},post={likes:5666},post={likes:45678},]

  };

  function sumarLikesDeUsuario(usuario) {
    i=0;
    sum=0;
    do{  sum=sum+mujicamartinez.posts[i].likes;
        i++;
  
    
  }
  while (i<mujicamartinez.posts.length);
  console.log(sum);
  console.log (i);
 
}
sumarLikesDeUsuario(mujicamartinez);
 

  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y
  // "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  var producto={
    precio:20,
    porcentajeDeDescuento:0.2,
    calcularPrecioDescuento: function(){
      cantidadDescontar=this.precio*this.porcentajeDeDescuento;
      
      producto.precio=this.precio-cantidadDescontar;
      return  producto.precio ;
    }
    

    }

    function agregarMetodoCalculoDescuento(producto) {
      producto.precio=producto.calcularPrecioDescuento();
      console.log(producto);
    }
  
    agregarMetodoCalculoDescuento(producto)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
