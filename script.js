let menuVisible = false;
//FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("HTMLCSS");
        habilidades[2].classList.add("Javascript");
        habilidades[3].classList.add("C");
        habilidades[4].classList.add("Php");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("SQLServer");
        habilidades[10].classList.add("MySql");
        habilidades[11].classList.add("FireBase");
        habilidades[12].classList.add("SQlite");
        habilidades[13].classList.add("Figma");
        habilidades[14].classList.add("Canvas");
        habilidades[15].classList.add("Sketch");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}


window.onresize = function() {
    if (window.innerWidth < 400) { // Si el ancho de la ventana es menor que 400px
        window.resizeTo(400, window.innerHeight); // Establece el ancho mínimo de la ventana
    }
}