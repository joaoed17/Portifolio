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


//popup designer


const albumDesign = document.querySelector("#albumdesign");
const popupDes = document.querySelector(".popupdes");
const fecharDes = document.querySelector(".popupdes span");
const body = document.querySelector("body");

function showDes () {
    popupDes.style.display = "flex"
    body.style.overflowY = "hidden"
};

function hideDes () {
    popupDes.style.display = "none"
    body.style.overflowY = "visible"
};

fecharDes.addEventListener("click", hideDes);
albumDesign.addEventListener("click", showDes);


//trocar foto designer


const chevR = document.querySelector("#buttonR");
const chevL = document.querySelector("#buttonL");
let img = document.querySelector(".popupdes img");
let cont = 1;
let autoCont = setInterval(next, 3000);

function next () {

    if(cont >= 18) {
        cont = 1
        img.setAttribute("src", `media/foto${cont}.jpg`)
    }else {
        cont++
        img.setAttribute("src", `media/foto${cont}.jpg`)
    }
    clearInterval(autoCont)
    autoCont = setInterval(next, 3000)
};

function prev () {

    if(cont <= 1) {
        cont = 18
        img.setAttribute("src", `media/foto${cont}.jpg`)
    }else { 
        cont--
        img.setAttribute("src", `media/foto${cont}.jpg`)
    }
    clearInterval(autoCont)
    autoCont = setInterval(next, 3000)
};

chevR.addEventListener("click", next);
chevL.addEventListener("click", prev);
