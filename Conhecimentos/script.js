const html = document.getElementById('html')
const css = document.getElementById('css')
const js = document.getElementById('js')
const react = document.getElementById('react')
const reactNative = document.getElementById('react-native')
const php = document.getElementById('php')
const sql = document.getElementById('sql')
const cSharp = document.getElementById('c-sharp')
const python = document.getElementById('python')
const modal = document.getElementById('modal')
const main = document.getElementById('main')
const header = document.getElementById('header')

const title = document.getElementById('title')
const details = document.getElementById('details')
const buttonClose = document.getElementById('buttonClose')



function travarScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function ativarScroll() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
}

html.addEventListener('click', () => {
    window.location.href="#lista"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    title.innerHTML = "HTML"
    details.innerHTML = "HTML é a tecnologia que mais tive contato em todo meu caminho de estudos, foi  o primeiro assunto que procurei cursos para realizar por conta própria, mesmo possuindo aula de Desenvolvimento Web na Etec decidi me aprofundar e realizei diversos cursos e projetos relacionados com essa tecnologia !"
    travarScroll();
})

css.addEventListener('click', () => {
    window.location.href="#lista"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    travarScroll();
})

js.addEventListener('click', () => {
    window.location.href="#lista"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    travarScroll();
})

react.addEventListener('click', () => {
    window.location.href="#lista"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    travarScroll();
})

reactNative.addEventListener('click', () => {
    window.location.href="#lista"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    travarScroll();
})

php.addEventListener('click', () => {
    window.location.href="#lista"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    travarScroll();
})

sql.addEventListener('click', () => {
    window.location.href="#lista"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    travarScroll();
})

cSharp.addEventListener('click', () => {
    window.location.href="#lista"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    travarScroll();
})

python.addEventListener('click', () => {
    window.location.href="#lista"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    travarScroll();
})

buttonClose.addEventListener('click', () => {
    modal.classList.add('none')
    main.style.opacity = "1"
    header.style.opacity = "1"
    ativarScroll();
})
