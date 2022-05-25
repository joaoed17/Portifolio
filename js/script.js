const hamburguer = document.querySelector("#hamburguer");
const navBar = document.querySelector("#navbar")

hamburguer.addEventListener("click", () => {
        hamburguer.classList.toggle("active");
        navBar.classList.toggle("active");
});

document.querySelectorAll(".links").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active")
    navBar.classList.remove("active")
}));
