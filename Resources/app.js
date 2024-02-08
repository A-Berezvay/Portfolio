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

// SCROLLING EFFECT

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));