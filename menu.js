let menu_default = document.getElementById("menu_default");

window.addEventListener("scroll", function() {
    if (window.scrollY > 99) {
        menu_default.style.opacity = "1";
    } else {
        menu_default.style.opacity = "0"; 
    }
});
