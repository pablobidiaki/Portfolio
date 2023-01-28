const burguer = document.getElementById("menu-burguer")
const closeBurguer = document.getElementById("close-button")
const lista = document.getElementById("lista")
const main = document.getElementById("main")


burguer.addEventListener('click', () => {
    burguer.style.display = "none"
    closeBurguer.style.display = "block"
    main.style.display="none"
    burguer.style.opacity = "0"
    lista.style.display = 'flex'
    lista.classList.remove = 'none'
    lista.classList.add('burguerON')   
})

closeBurguer.addEventListener('click', () => {
    closeBurguer.style.display = "none"
    burguer.style.display = "block"
    main.style.display="block"
    burguer.style.opacity = "1"
    lista.style.display = 'none'
    lista.classList.remove('burguerON')

    setInterval(bugBurguer, 500)
})


function bugBurguer(){
    var largura = window.innerWidth;
    if(largura > 962){
        burguer.style.display = "none"
        lista.style.display = 'flex'
    }else {
        burguer.style.display = 'block'
        lista.style.display = 'none'
    }
}