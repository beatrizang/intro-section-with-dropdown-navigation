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

/*SUBMENU*/
/* Features */
let showF = false;

document.getElementById("btn-features").addEventListener("click",showFeatures);

up_features = document.getElementById("up_features");
dropdown_features = document.getElementById("dropdown_features");

submenu_features = document.getElementById("submenu-features");


function showFeatures(){
    if(!showF){
        dropdown_features.style.display = "none";
        up_features.style.display = "block";
        submenu_features.style.display = "block";
        submenu_features.style.opacity = "1";
        showF = true;
    }
    else{
        dropdown_features.style.display = "block";
        up_features.style.display = "none";
        submenu_features.style.display = "none";
        submenu_features.style.opacity = "0";
        showF = false;
    }
}

/*Company */
let showC = false;

document.getElementById("btn-company").addEventListener("click",showCompany);

up_company = document.getElementById("up_company");
dropdown_company = document.getElementById("dropdown_company");

submenu_company = document.getElementById("submenu-company");


function showCompany(){
    if(!showC){
        dropdown_company.style.display = "none";
        up_company.style.display = "block";
        submenu_company.style.display = "block";
        submenu_company.style.opacity = "1";
        showC = true;
    }
    else{
        dropdown_company.style.display = "block";
        up_company.style.display = "none";
        submenu_company.style.display = "none";
        submenu_company.style.opacity = "0";
        showC = false;
    }
}

