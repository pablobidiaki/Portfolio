const burguer = document.getElementById("menu-burguer")
const closeBurguer = document.getElementById("close-button")
const lista = document.getElementById("lista")
const main = document.getElementById("main")

const imgHTML = document.getElementById('imgHTML')
const textHTML = document.getElementById('textHTML')
const imgJs = document.getElementById('imgJs')
const textJs = document.getElementById('textJs')
const imgReact = document.getElementById('imgReact')
const textReact = document.getElementById('textReact')
const imgPhp = document.getElementById('imgPhp')
const textPhp = document.getElementById('textPhp')
const imgApi = document.getElementById('imgApi')
const textApi = document.getElementById('textApi')

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

imgHTML.addEventListener('mouseover', () => {
    imgHTML.style.opacity = '0'
    textHTML.style.opacity = '1'
    textHTML.style.transform = 'translate(-55%)'
})

textHTML.addEventListener('mouseout', () => {
    imgHTML.style.opacity = '1'
    textHTML.style.opacity = '0'
    textHTML.style.transform = 'translate(-160%)'    
})

imgJs.addEventListener('mouseover', () => {
    imgJs.style.opacity = '0'
    textJs.style.opacity = '1'
    textJs.style.transform = 'translate(-55%)'
})

textJs.addEventListener('mouseout', () => {
    imgJs.style.opacity = '1'
    textJs.style.opacity = '0'
    textJs.style.transform = 'translate(-160%)'    
})

imgReact.addEventListener('mouseover', () => {
    imgReact.style.opacity = '0'
    textReact.style.opacity = '1'
    textReact.style.transform = 'translate(-55%)'
})

textReact.addEventListener('mouseout', () => {
    imgReact.style.opacity = '1'
    textReact.style.opacity = '0'
    textReact.style.transform = 'translate(-160%)'    
})

imgPhp.addEventListener('mouseover', () => {
    imgPhp.style.opacity = '0'
    textPhp.style.opacity = '1'
    textPhp.style.transform = 'translate(-55%)'
})

textPhp.addEventListener('mouseout', () => {
    imgPhp.style.opacity = '1'
    textPhp.style.opacity = '0'
    textPhp.style.transform = 'translate(-160%)'    
})

imgApi.addEventListener('mouseover', () => {
    imgApi.style.opacity = '0'
    textApi.style.opacity = '1'
    textApi.style.transform = 'translate(-55%)'
})

textApi.addEventListener('mouseout', () => {
    imgApi.style.opacity = '1'
    textApi.style.opacity = '0'
    textApi.style.transform = 'translate(-160%)'    
})
