// Posuvanie menu dole a hore

let menu_default = document.getElementById("menu_default");

window.addEventListener("scroll", function () {
    if (menu_clicked.style.opacity == 0) {
        if (window.scrollY > 64) {
            menu_default.style.opacity = "1";
            menu_default.style.transform = "translateY(0)";
        } else {
            menu_default.style.opacity = "0";
            menu_default.style.transform = "translateY(-70px)";
        }
    }
});


// Posuvanie obrazku z lava 

let obrazek1 = document.getElementById("obrazek1");
let obrazek2 = document.getElementById("obrazek2");

window.addEventListener("scroll", function (){
    if (window.scrollY >= 1050 && window.scrollY <= 2250) {
        obrazek1.style.left = "250px";
        obrazek2.style.left = "450px";
    }
    else {
        obrazek1.style.left = "-300px";
        obrazek2.style.left = "-300px";
    }
});

// Zmiznutie textu logo

let logotext = document.getElementById("logo_text");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 64) {
        logotext.style.opacity = "0";
        logotext.style.left = "0px";
        logotext.style.transition = "opacity 0.6s ease-out, left 0.5s ease-in";
    } else {
        logotext.style.opacity = "1";
        logotext.style.left = "90px";
        logotext.style.transition = "opacity 0.6s ease, left 0.5s ease-out";
    }
});

// Zmiznutie menu

let menu = document.getElementById("menu");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 64) {
        menu.style.opacity = "0";
    } else {
        menu.style.opacity = "80%";
    }
});






// na to pod timhle komentarem nesahej pls 


let menu_default_under = document.getElementById("menu_default_under");
let menu_clicked = document.getElementById("menu_clicked")

function click_menu_default ()
{
    menu_default.style.zIndex = "0";
    menu_clicked.style.zIndex = "1";
    menu_default_under.style.opacity = "1";
    menu_default.style.opacity = "0";
    menu_clicked.style.opacity = "1";
    
}

function click_menu_cliked (){
    menu_default.style.zIndex = "1";
    menu_clicked.style.zIndex = "0";
    menu_default_under.style.opacity = "0";
    menu_default.style.opacity = "1";
    menu_clicked.style.opacity = "0";
}
