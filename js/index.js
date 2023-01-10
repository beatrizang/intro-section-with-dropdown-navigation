document.getElementById("btn-menu").addEventListener("click",mostrarMenu);
document.getElementById("back_menu").addEventListener("click",ocultarMenu);
document.getElementById("menu-close").addEventListener("click",ocultarMenu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");


function mostrarMenu (){
    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultarMenu(){
    nav.style.right = "-350px";
    background_menu.style.display = "none";
}


