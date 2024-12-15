const header = document.querySelector('header')

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(36, 38, 42, 1)"; 
    } else {
        header.style.background = "rgba(0, 0, 0, 0)";
    }
});

