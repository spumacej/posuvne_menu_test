let menu_default = document.getElementById("menu_default");

window.addEventListener("scroll", function() {
    if (window.scrollY > 99) {
        menu_default.style.opacity = "1";
        menu_default.style.transform = "TranslateY(0)";
    } 
    else {
        menu_default.style.opacity = "0";
    }
});
window.addEventListener("scroll", function(){
    if(window.scrollY < 99) {
        menu_default.style.transform = "TranslateY(-50)"
    }
    else {
        menu_default.style.transform = "TranslateY(0)";
    }
});



// let obrazek1 = document.getElementById("obrazek1");

// window.addEventListener("scroll", function (){
//     if (window.scrollY >= 500) {
//         obrazek1.style.animation = true;
//     }
//     else {
//         obrazek1.style.animation = false;
//     }
// });