const burguer = document.getElementById("menu-burguer")
const closeBurguer = document.getElementById("close-button")
const lista = document.getElementById("lista")
const main = document.getElementById("main")
const header = document.getElementById('header')

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

const Landing = document.getElementById('Landing') 
const shoptec = document.getElementById('shoptech')
const telaLogin = document.getElementById('telaLogin') 
const Netflix = document.getElementById('Netflix')
const Sociais = document.getElementById('Sociais')
const Cordel = document.getElementById('Cordel') 
const Android = document.getElementById('Android')
const Turismo = document.getElementById('Turismo') 
const produto = document.getElementById('produto')
const pacotes = document.getElementById('pacotes')
const JornaTech = document.getElementById('JornaTech') 
const interativo = document.getElementById('interativo')
const nft = document.getElementById('nft') 
const Lucro = document.getElementById('Lucro')
const lanches = document.getElementById('lanches')
const tabuada = document.getElementById('tabuada')
const Bhaskara = document.getElementById('Bhaskara') 
const conselho = document.getElementById('conselho')
const pokedex = document.getElementById('pokedex')

const modal = document.getElementById('modal')
const exemplo = document.getElementById('exemplo')
const titulo = document.getElementById('titulo')
const resumo = document.getElementById('resumo')
const data = document.getElementById('data')
const buttonClose = document.getElementById('buttonClose')

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

function travarScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function ativarScroll() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
}

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

buttonClose.addEventListener('click', () => {
    modal.classList.add('none')
    main.style.opacity = "1"
    header.style.opacity = "1"
    ativarScroll();
})

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

textHTML.addEventListener('click', () => {
    window.location.href='#NavHtml'
})
textJs.addEventListener('click', () => {
    window.location.href='#NavJs'
})
textReact.addEventListener('click', () => {
    window.location.href='#NavReact'
})
textPhp.addEventListener('click', () => {
    window.location.href='#NavPhp'
})
textApi.addEventListener('click', () => {
    window.location.href='#NavApi'
})

Landing.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/9uxsE9OTfG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Landing Page"
    resumo.innerHTML = 'Projeto realizado após a visualização de um vídeo no youtube com dicas de projetos pessoais, principal foco era a realização de uma landing page com o tema de tecnologia e serviços assim praticando modelagem dos elementos, para a conclusão do desafio utilizei HTML e CSS.'
    data.innerHTML = 'Projeto finalizado em : 2/11/2022'
    travarScroll();
})

shoptec.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/dmdTlC2Ry6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Shoptech"
    resumo.innerHTML = 'Projeto realizado no meu curso técnico, principal foco era a realização de um e-commerce com tema livre onde o mesmo desafio foi passado nos primeiros dias de aula, assim sendo possível a visualização da nossa evolução, para a realização do desafio utilizei HTML e CSS.'
    data.innerHTML = 'Projeto finalizado em : 14/06/2022'
    travarScroll();
})

telaLogin.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Tela de login responsiva"
    resumo.innerHTML = 'Projeto realizado no curso de HTML e CSS do "cursoemvideo", principal foco do desafio era a realizar uma tela de login responsiva após aulas sobre responsividade e inputs, para a realização utilizei HTMl, CSS e conceitos de responsividade.'
    data.innerHTML = 'Projeto finalizado em : 08/10/2022'
    travarScroll();
})

Netflix.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Clone da Netflix"
    resumo.innerHTML = 'Projeto realizado no primeiro bootcamp que me inscrevi, foi meu primeiro projeto prático fora da etec e foi realizado junto com um professor auxiliando no desenvolvimento, para a conclusão foi utilizado HTML CSS e Bootstrap'
    data.innerHTML = 'Projeto finalizado em : 21/04/2022'
    travarScroll();
})

Sociais.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Projeto redes sociais"
    resumo.innerHTML = 'Projeto realizado no curso de HTML e CSS do cursoemvideo, principal foco do projeto era exercitar os conhecimentos sobre iframe passados anteriormente no curso.'
    data.innerHTML = 'Projeto finalizado em : 18/08/2022'
    travarScroll();
})

Cordel.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Cordel Moderno"
    resumo.innerHTML = 'Projeto realizado no curso de HTML e CSS do cursoemvideo, um dos primeiros projetos apresentados no curso, por isso algo bem simples.'
    data.innerHTML = 'Projeto finalizado em : 28/06/2022'
    travarScroll();
})

Android.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Projeto Android"
    resumo.innerHTML = 'Projeto realizado no curso de HTML e CSS do cursoemvideo, principal objetivo do projeto era aprender na prática sobre responsividade e modelagem de um site mais puxado para a realidade trazendo as informações sobre o android.'
    data.innerHTML = 'Projeto finalizado em : 26/06/2022'
    travarScroll();
})

Turismo.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Turismo Espacial"
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io" para práticar a maioria dos conhecimentos que tinha no momento, um projeto com diversas interações, responsivo e páginas para navegar !'
    data.innerHTML = 'Projeto finalizado em : 21/12/2022'
    travarScroll();
})

produto.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Página inicial de produto"
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io" com principal foco de fazer uma página de um produto onde se pode alterar a quantidade, fotos e adicionar para o carrinho e já ser possível a visualização do valor dependendo da quantidade que foi adicionada.'
    data.innerHTML = 'Projeto finalizado em : 27/12/2022'
    travarScroll();
})

pacotes.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Página pacotes"
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io" com principal foco de fazer uma página de um produto onde se pode alterar a quantidade, fotos e adicionar para o carrinho e já ser possível a visualização do valor dependendo da quantidade que foi adicionada.'
    data.innerHTML = 'Projeto finalizado em : 19/12/2022'
    travarScroll();
})

JornaTech.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Página de Pacotes"
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io" com principal foco de simular um site de noticias e escolhi colocar o tema de tecnologia para ficar mais proximo da realidade.'
    data.innerHTML = 'Projeto finalizado em : 15/12/2022'
    travarScroll();
})

interativo.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Cartão interativo"
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io". Segundo projeto que realizei utilizando React, onde já utilizei propriedades únicas do react para manipulação de valores.'
    data.innerHTML = 'Projeto finalizado em : 19/01/2023'
    travarScroll();
})

nft.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Cartão interativo"
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io". Primeiro projeto que realizei utilizando React depois de concluir o curso do canal "CFBCursos", como era meu primeiro projeto realizado sozinho decidi pegar algo mais simples para pegar mais contato com a tecnologia.'
    data.innerHTML = 'Projeto finalizado em : 17/01/2023'
    travarScroll();
})

Lucro.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Calculadora de Lucro"
    resumo.innerHTML = 'Projeto onde eu e um colega da minha sala do curso técnico fomos selecionados para criarmos e apresentar um projeto utilizando PHP representando nosso módulo e curso na feira técnologica da escola.'
    data.innerHTML = 'Projeto finalizado em : 25/10/2022'
    travarScroll();
})

lanches.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Bidi Lanches"
    resumo.innerHTML = 'Projeto realizado no meu curso técnico na aula de Desenvolvimento Web II, onde a principal ideia do projeto era manipularmos valores enviados de um formulário.'
    data.innerHTML = 'Projeto finalizado em : 27/09/2022'
    travarScroll();
})

tabuada.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Gerador de tabuadas"
    resumo.innerHTML = 'Projeto pessoal que tive ideia de realizar para poder praticar a manipulação de dados recebidos de formulários.'
    data.innerHTML = 'Projeto finalizado em : 07/09/2022'
    travarScroll();
})

Bhaskara.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Calculadora de Bhaskara"
    resumo.innerHTML = 'Projeto realizado no meu curso técnico na aula de Desenvolvimento Web II, principal foco era praticar manipulação de valores de formulários e lógica de programação.'
    data.innerHTML = 'Projeto finalizado em : 30/08/2022'
    travarScroll();
})

conselho.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Gerador de conselhos"
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io", primeiro projeto que realizei sozinho sobre API por isso algo mais simples e de fácil execução.'
    data.innerHTML = 'Projeto finalizado em : 24/01/2023'
    travarScroll();
})

pokedex.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = ''
    titulo.innerHTML = "Pokedex"
    resumo.innerHTML = 'Projeto que realizei no último bootcamp que me inscrevi, onde no fim do módulo de HTML e CSS esse foi o projeto que foi realizado junto com a ajuda de um professor.'
    data.innerHTML = 'Projeto finalizado em : 17/11/2022'
    travarScroll();
})