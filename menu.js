// Posuvanie menu dole a hore

let menu_default = document.getElementById("menu_default");

window.addEventListener("scroll", function () {
    if (window.scrollY > 129) {
        menu_default.style.opacity = "1";
        menu_default.style.transform = "translateY(0)";
    } else {
        menu_default.style.opacity = "0";
        menu_default.style.transform = "translateY(-70px)";
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

function click_menu_default ()
{
    
}