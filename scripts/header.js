const header = document.querySelector('header')

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(36, 38, 42, 1)"; 
        header.style.height = "55px";
    } else {
        header.style.background = "rgba(0, 0, 0, 0)";
        header.style.height = "100px"
    }
});

