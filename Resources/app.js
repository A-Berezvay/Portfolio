// HIDDEN HEADER EFFECT WHILE SCROLLING ON DESKTOP

const nav = document.querySelector ("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () =>{
    if (lastScrollY < window.scrollY) {
        nav.classList.add("header-hidden");
    } else {
        nav.classList.remove("header-hidden");
    }

    lastScrollY = window.scrollY;
});


