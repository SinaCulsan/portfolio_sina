/*Quiero hacer un contador para que cada vez que clicke en el button de change estyle, cambie a un estilo predeterminado*/

/*CAMBIO DE BUTTON CHANGE STYLE*/

let num = 1;

/*Creo una función para que cuando clicke cambie el estilo*/

function changeStyle () {
    /* Ahora, mi let "changestyle" contiene el ID: Style con el link de la home donde están alojados los estilos. Es un let ya que cada vez que clicke, va a cambiar*/
    let changeStyle = document.getElementById("style");
    num = num+1

    /* Es necesario utilizar el contador num para cambiar el estilo, para poder llamar variables, necesitamos el símbolo de dolar y los corchetes*/
    changeStyle.href= `./css/styles${num}.css`;

 /* Si llega a más de los cuatro estilos establecidos, necesitamos bloquear como vimos en clase para que se reinicie y se cree un bucle infinito*/

    if (num===4) {
        num=0
    }
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
