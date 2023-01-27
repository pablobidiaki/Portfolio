const burguer = document.getElementById("menu-burguer")
const closeBurguer = document.getElementById("close-button")
const lista = document.getElementById("lista")
const main = document.getElementById("main")

const subir = document.getElementById("voltar")

const navHt = document.getElementById('navHT')
const navApi = document.getElementById('navApi')
const navJS = document.getElementById('navJS')
const navReact = document.getElementById('navReact')
const navPhp = document.getElementById('navPhp')

burguer.addEventListener('click', () => {
    burguer.style.display = "none"
    closeBurguer.style.display = "block"
    main.style.display="none"
    burguer.style.opacity = "0"
    lista.style.display = 'flex'
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

subir.addEventListener('click', () => {
    window.location.href="#main"
})

navHt.addEventListener('click', () => {
    window.location.href = "#NAVhtml&css"
})

navApi.addEventListener('click', () => {
    window.location.href = "#NAVApi"
})

navReact.addEventListener('click', () => {
    window.location.href = "#NAVReact"
})

navPhp.addEventListener('click', () => {
    window.location.href = "#NAVPhp"
})

navJS.addEventListener('click', () => {
    window.location.href = "#NAVJs"
})
