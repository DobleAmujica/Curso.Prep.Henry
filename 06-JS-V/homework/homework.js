// No cambies los nombres de las funciones.

// Crea una Clase de ES6 o una función constructor llamada "Usuario"
// Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
// En el `contructor`, define el usuario, el nombre, el email y la contraseña
// El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
// {{nombre}} debe ser el nombre definido en cada instancia
// Devuelve la clase
// Tu código:


function Constructor(usuario,nombre,email,password){
  this.usuario=usuario;
  this.nombre=nombre;
  this.email=email;
  this.password=password;
}
  Constructor.prototype.saludar=function (){
      return ('Hola, mi nombre es '+this.nombre+ ' mi email es '+this.email+' y me dicen '+this.usuario);

  }
  let aaron=new Constructor('dobleA','Aaron','ajmujica.15@gmail.com','doblechocolate14.')
  let andrea=new Constructor('Andre','Andrea','adre_empiri@gmail.com','andrea1407')

  console.log(andrea.saludar());


  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

function Saludo(){
    
    Saludo.prototype.saludar = function(){

    return 'Hello World';
    }
}
let aaron = new Saludo();

 console.log (aaron.saludar());



 // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
r    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"
    function String(palabra){

      this.palabra=palabra;
  
      String.prototype.reverse=function (){
  
          return(this.palabra.split('').reverse().join(''));
      }
  
      }
  
      let aaron=new String('Aaron super chickilucky');
      let luis=new String('Ñao trajiste la tarea de quimica?')
  
      console.log(luis.reverse())

///---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
  //   Nombre: 'Juan',
  //   Apellido: 'Perez',
  //   Edad: 22,
  //   Domicilio: 'Saavedra 123'
  //  }

function Persona(nombre,apellido,edad,domicilio) {

  this.nombre=nombre;

  this.apellido=apellido;

  this.edad=edad;

  this.domicilio=domicilio;

  Persona.prototype.detalle=function (){

     return (  nuevoObjeto={

          nombre:this.nombre,

          apellido:this.apellido,

          edad:this.edad,

          domicilio:this.domicilio
      }

     )
  }
      
}
  
let aaron=new Persona('Aaron','Mujica','24 años','Balbin 2809');

let juan =new Persona('Juan','Perez','22','Saavedra 123');

console.log(aaron.detalle());

console.log(juan.detalle());

///---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
  //   Nombre: 'Juan',
  //   Apellido: 'Perez',
  //   Edad: 22,
  //   Domicilio: 'Saavedra 123'
  //  }

  function Persona(nombre,apellido,edad,domicilio) {

    this.nombre=nombre;
  
    this.apellido=apellido;
  
    this.edad=edad;
  
    this.domicilio=domicilio;
  
    Persona.prototype.detalle=function (){
  
       return (  nuevoObjeto={
  
            nombre:this.nombre,
  
            apellido:this.apellido,
  
            edad:this.edad,
  
            domicilio:this.domicilio
        }
  
       )
    }
        
  }
    
  let aaron=new Persona('Aaron','Mujica','24 años','Balbin 2809');
  
  let juan =new Persona('Juan','Perez','22','Saavedra 123');
  
  console.log(aaron.detalle());
  
  console.log(juan.detalle());

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
