/*Quiero hacer un contador para que cada vez que clicke en el button de change estyle, cambie a un estilo predeterminado*/

/*CAMBIO DE BUTTON CHANGE STYLE*/

/*Al principio había hecho un cambio muy sencillo pero como no se me guardaba el estilo en el que estaba cuando pulsaba a cualquier otra página, he decidido usar algo que nos enseñaste en clase que es el local storage*/
//Esto me ha costado un mes hacerlo... me he visto todos los vídeos de clase, los vídeos que yo copié, y todo youtube.:(
//comprobar si existe cada vez que cargo el elemento
if (localStorage.getItem("estiloGuardado") === null) {
    // Si no existe, establecemos el valor inicial
    localStorage.setItem("estiloGuardado", "1");
  } else {
    let num = localStorage.getItem("estiloGuardado");
    let changeStyle = document.getElementById("style");
    changeStyle.href = `./css/styles${parseInt(num, 10)}.css`;
  }

/*Creo una función para que cuando clicke cambie el estilo*/

function changeStyle() {
    let num = localStorage.getItem("estiloGuardado");
    /* Ahora, mi let "changestyle" contiene el ID: Style con el link de la home donde están alojados los estilos. Es un let ya que cada vez que clicke, va a cambiar*/
    let changeStyle = document.getElementById("style");
    num = parseInt(num, 10) + 1;
  
    /* Es necesario utilizar el contador num para cambiar el estilo, para poder llamar variables, necesitamos el símbolo de dolar y los corchetes*/
    changeStyle.href = `./css/styles${num}.css`;
  
    /* Si llega a más de los cuatro estilos establecidos, necesitamos bloquear como vimos en clase para que se reinicie y se cree un bucle infinito*/
  
    if (num === 4) {
      num = 0;
    }
  
    localStorage.setItem("estiloGuardado", num);
  }

/* MENÚ HAMBURGUESA */

const nav = document.querySelector("#nav");

//const abrir = document.querySelector("#abrir");
const abrir = document.getElementById('abrir');

const cerrar = document.querySelector("#cerrar");

abrir.addEventListener('click', () => {
    nav.classList.add("visible");
});

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
})


