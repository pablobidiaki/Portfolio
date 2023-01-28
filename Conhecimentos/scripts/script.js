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

const burguer = document.getElementById("menu-burguer")
const closeBurguer = document.getElementById("close-button")
const lista = document.getElementById("lista")


function travarScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function ativarScroll() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
}

html.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    title.innerHTML = "HTML"
    details.innerHTML = "HTML é a tecnologia que mais tive contato em todo meu caminho de estudos, foi  o primeiro assunto que procurei cursos para realizar por conta própria, mesmo possuindo aula de Desenvolvimento Web na Etec decidi me aprofundar e realizei diversos cursos e projetos relacionados com essa tecnologia !"
    travarScroll();
})

css.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    title.innerHTML = "CSS"
    details.innerHTML = "Junto com o HTML é uma das tecnologias que mais domino pelo fato de todos os cursos de HTML  o CSS vir acompanhado e assim como ele aprendi tanto na aula de Desenvolvimento Web na Etec como em cursos por fora."
    travarScroll();
})

js.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    title.innerHTML = "Javascript"
    details.innerHTML = "Uma das linguagens de programação mais utilizadas no mundo, diferente do HTML e CSS não tive contato com essa tecnologia no meu curso técnico e todo conhecimento que possuo é de cursos, vídeos e  pesquisas realizadas pela internet, grande parte dos meus projetos utilizo Javascript."
    travarScroll();
})

react.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    title.innerHTML = "React.JS"
    details.innerHTML = "A biblioteca React foi o assunto do ultimo curso que realizei e a principal tecnologia que estou realizando projetos estudando mais a fundo. Assim como o javascript não tive contato com ele no meu curso técnico e meus conhecimentos sobre são de cursos, vídeos, pesquisas e projetos pessoais."
    travarScroll();
})

reactNative.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    title.innerHTML = "React Native"
    details.innerHTML = "Diferete do React e do Javascript o meu primeiro e principais contatos com React Native foram feitos na Etec, na aula de Desenvolvimento Mobile, onde trabalhamos muito com templates prontos que o professor disponibilizava nas aulas fazendo com que aplicássemos isso em algum exercício."
    travarScroll();
})

php.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    title.innerHTML = "PHP"
    details.innerHTML = "O PHP foi o principal assunto abordado na aula de Desenvolvimento Web II no meu curso técnico, realizei alguns projetos pessoais utilizando essa linguagem, mas a grande maioria e principais projetos eram realizados para as aulas. Com meu desempenho nas aulas eu e mais um colega de turma fomos os únicos selecionados para fazer um projeto representando nosso módulo e curso para a feira tecnologica realizada em nossa escola."
    travarScroll();
})

sql.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    title.innerHTML = "MySQL"
    details.innerHTML = "Meu conhecimento de Banco de Dados se deve a Etec, onde no primeiro módulo foi abordado os primeiros passos, teorias, e como projeto final a modelagem de um, onde o assunto escolhido pelo meu grupo foi: enciclopédia de inventores. Já no segundo modúlo o foco foi algo mais pratico onde criamos um Banco de dados e manipulavamos os dados com a linguagem SQL."
    travarScroll();
})

cSharp.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    title.innerHTML = "C#"
    details.innerHTML = "Creio que essa tenha sido a materia mais prática do meu curso até o momento onde o professor que ministrava as aula já tinha trabalhado como desenvolvedor se Software e por esse fato o conhecimento que ele conseguia nos passar era algo muito amplo. Mas como meu foco no momento é Front-end não me aprofundei na linguagem mas realizei diversos projetos acadêmicos"
    travarScroll();
})

python.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    title.innerHTML = "Python"
    details.innerHTML = "Tive contato com python na Etec no meu primeiro semestre na aula de Algoritmos, onde depois de realizarmos diversos exercícios com Portugol para trabalharmos a lógica partimos para uma linguagem de programação, onde a escolhida foi python."
    travarScroll();
})

buttonClose.addEventListener('click', () => {
    modal.classList.add('none')
    main.style.opacity = "1"
    header.style.opacity = "1"
    ativarScroll();
})

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
    if(largura > 828){
        burguer.style.display = "none"
        lista.style.display = 'flex'
    }else {
        burguer.style.display = 'block'
        lista.style.display = 'none'
    }
}