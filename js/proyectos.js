const proyectosContainer = document.getElementById('proyectosContainer');
const jsonUrl = "../json/proyectos.json";

window.onload = function(){
    //Nada más acabe de cargar el html, se ejecuta esta funcion
    leerJson();
}


function leerJson(){

    //En esta funcion leeremos el JSON

    // Uso de la función fetch
    fetch(jsonUrl)
    .then(function (response) {
    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (!response.ok) {
        throw new Error("La solicitud no fue exitosa: " + response.status);
    }
    // Parsear la respuesta como JSON y retornar la promesa resultante
    return response.json();
    })
    .then(function (data) {
    // Manipular los datos obtenidos
    recorrerProyectos(data);
    })
    .catch(function (error) {
    // Manejar errores de red u otros problemas
    console.error("Error en la solicitud:", error);
    });
}


function recorrerProyectos(data){
    /*
    En esta funcion se utiliza un forEach, para recorrer el listado de proyectos, que se han recodigo en la funcion leerJson().
    Para cada elemento del array se hara uso de la funcion crearProyectos().
    */
    
    data.forEach(crearProyectos);
}



function crearProyectos(item, index, arr){
    
    //Creo un elemento div, que será el contenedor del título del proyecto. A este div le asigno el estilo que le coresponde.
    var titleDiv = document.createElement('div');
    titleDiv.classList.add('titleContentCard');

    //Creo un elemento h3, que será el título del proyecto
    var title = document.createElement('h3');
    title.innerHTML = item.nombre;
    titleDiv.appendChild(title);

    //Creo un elemento div, que será el que contenga al titulo y la descripcion
    var contentDiv = document.createElement('div');

    //A este div que se ha creado, se le asigna la clase contentCard, para hacer uso de ella con el CSS
    contentDiv.classList.add('contentCard');


    //creo un elemento p, el cual contendrá la descripción del proyecto. A este no le asigno clase, ya que en el estilo CSS esta ya definido.
    var descriptionP = document.createElement('p');

    //Cambio el texto del elemento p a la descripcion del proyecto correspondiente
    descriptionP.innerHTML = item.descripcion;

    //Con appendChild, meto como hijos el div y el p que he creado
    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(descriptionP);


    //Por último, el div contenedor
    var fullContainerDiv = document.createElement('div');
    fullContainerDiv.classList.add('cardProyecto');


    // Creo la imagen del proyecto
    var image = document.createElement('img');

    //Haciendo uso de setAttribute le añado la ruta a la imagen
    image.setAttribute('src', item.imagen);

    //Haciendo uso de setAttribute le añado el ntexto alternativo a la imagen
    image.setAttribute('alt', 'imagen de proyecto');

    //Por ultimo añado el div anterior y la imagen como hijos
    fullContainerDiv.appendChild(contentDiv);
    fullContainerDiv.appendChild(image);

    var proyectosContainer = document.getElementById('proyectosContainer');
    proyectosContainer.appendChild(fullContainerDiv);
}