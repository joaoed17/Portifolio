const hamburguer = document.querySelector("#hamburguer");
const navBar = document.querySelector("#navbar")

function toggleMenu () {
    hamburguer.classList.toggle("active");
    navBar.classList.toggle("active");
}

hamburguer.addEventListener("click",  toggleMenu)
