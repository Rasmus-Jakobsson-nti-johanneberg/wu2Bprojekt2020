function showMenu(){
    let menu = document.querySelector(".hamburger_menu");
    menu.classList.toggle("show");

    let fade = document.querySelector(".fade_layer");
    fade.classList.toggle("visible");
}

let button = document.querySelector(".global_nav");
let layer = document.querySelector(".fade_layer");

button.addEventListener("click",showMenu);
layer.addEventListener("click",showMenu);