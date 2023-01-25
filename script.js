const burguer = document.getElementById("menu-burguer")
const closeBurguer = document.getElementById("close-button")
const lista = document.getElementById("lista")
const main = document.getElementById("main")
const body = document.getElementById("body")

burguer.addEventListener('click', () => {
    burguer.style.display = "none"
    closeBurguer.style.display = "block"
    main.style.display="none"
    body.style.background= "linear-gradient(rgba(0, 0, 0, 0.900),rgba(25, 25, 24, 0.900) .100%), url(imgs/fundo.jpg)"
    burguer.style.opacity = "0"
    lista.classList.add('burguerON')

    
})

closeBurguer.addEventListener('click', () => {
    closeBurguer.style.display = "none"
    burguer.style.display = "block"
    main.style.display="block"
    body.style.background= "linear-gradient(rgba(0, 0, 0, 0.5),rgba(25, 25, 24, 0.5) .100%), url(imgs/fundo.jpg)"
    body.style.backgroundPosition= "center center"
    burguer.style.opacity = "1"
    lista.classList.remove('burguerON')

    setInterval(bugBurguer, 500)
})

function bugBurguer(){
    var largura = window.innerWidth;
    if(largura > 575){
        burguer.style.display = "none"
    }else {
        burguer.style.display = 'block'
    }
    console.log(largura)
}