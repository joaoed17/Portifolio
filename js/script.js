//hamburguer

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

//popup

const albumDesign = document.querySelector("#albumdesign");
const popup = document.querySelector(".popup");
const fechar = document.querySelector("#fechar")
const body = document.querySelector("body")

function show () {
    popup.style.display = "flex"
    body.style.overflowY = "hidden"
}

function hide () {
    popup.style.display = "none"
    body.style.overflowY = "visible"
}

fechar.addEventListener("click", hide)
albumDesign.addEventListener("click", show)

//trocar foto

const chevR = document.querySelector("#buttonR")
const chevL = document.querySelector("#buttonL")
let img = document.querySelector(".popup img")
let cont = 1
let autoCont = setInterval(next, 4000)

function next () {

    if(cont >= 15) {
        cont = 1
        img.setAttribute("src", `media/foto${cont}.jpg`)
    }else {
        cont++
        img.setAttribute("src", `media/foto${cont}.jpg`)
    }
    clearInterval(autoCont)
    autoCont = setInterval(next, 4000)
}

function prev () {

    if(cont <= 1) {
        cont = 15
        img.setAttribute("src", `media/foto${cont}.jpg`)
    }else { 
        cont--
        img.setAttribute("src", `media/foto${cont}.jpg`)
    }
    clearInterval(autoCont)
    autoCont = setInterval(next, 4000)
}




chevR.addEventListener("click", next)
chevL.addEventListener("click", prev)