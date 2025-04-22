// Posuvanie menu dole a hore

let menu_default = document.getElementById("menu_default");

window.addEventListener("scroll", function () {
    if (window.scrollY > 99) {
        menu_default.style.opacity = "1";
        menu_default.style.transform = "translateY(0)";
    } else {
        menu_default.style.opacity = "0";
        menu_default.style.transform = "translateY(-50px)";
    }
});



// Posuvanie obrazku z lava 

let obrazek1 = document.getElementById("obrazek1");

window.addEventListener("scroll", function (){
    if (window.scrollY >= 500 && window.scrollY <= 1200) {
        obrazek1.style.left = "550px";
    }
    else {
        obrazek1.style.left = "-300px";
    }
});