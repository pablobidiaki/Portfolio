const burguer = document.getElementById("menu-burguer")
const closeBurguer = document.getElementById("close-button")
const lista = document.getElementById("lista")
const main = document.getElementById("main")
const header = document.getElementById('header')
const redesSociais = document.getElementById('redes')

const imgHTML = document.getElementById('imgHTML')
const textHTML = document.getElementById('textHTML')
const imgJs = document.getElementById('imgJs')
const textJs = document.getElementById('textJs')
const imgReact = document.getElementById('imgReact')
const textReact = document.getElementById('textReact')
const imgPhp = document.getElementById('imgPhp')
const textPhp = document.getElementById('textPhp')

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
const port = document.getElementById('port')
const JornaTech = document.getElementById('JornaTech') 
const interativo = document.getElementById('interativo')
const nft = document.getElementById('nft') 
const Lucro = document.getElementById('Lucro')
const lanches = document.getElementById('lanches')
const tabuada = document.getElementById('tabuada')
const Bhaskara = document.getElementById('Bhaskara') 
const conselho = document.getElementById('conselho')
const pokedex = document.getElementById('pokedex')
const sunnyside = document.getElementById('sunnyside')
const empregos = document.getElementById('empregos')
const buscaCep = document.getElementById('buscaCep')

const modal = document.getElementById('modal')
const exemplo = document.getElementById('exemplo')
const titulo = document.getElementById('titulo')
const resumo = document.getElementById('resumo')
const link = document.getElementById('link')
const data = document.getElementById('data')
const buttonClose = document.getElementById('buttonClose')

function bugBurguer(){
    var largura = window.innerWidth;
    if(largura > 830){
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
    lista.classList.remove = 'none'
    redesSociais.style.display = 'none' 
    lista.classList.add('burguerON')   
})

closeBurguer.addEventListener('click', () => {
    closeBurguer.style.display = "none"
    burguer.style.display = "block"
    main.style.display="block"
    burguer.style.opacity = "1"
    lista.style.display = 'none'
    redesSociais.style.display = 'block' 
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

textHTML.addEventListener('click', () => {
    window.location.href='#Landing'
})
textJs.addEventListener('click', () => {
    window.location.href='#Turismo'
})
textReact.addEventListener('click', () => {
    window.location.href='#interativo'
})
textPhp.addEventListener('click', () => {
    window.location.href='#Lucro'
})

Landing.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/9uxsE9OTfG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Landing Page."
    resumo.innerHTML = 'Projeto realizado ap??s a visualiza????o de um v??deo no youtube com dicas de projetos pessoais, principal foco era a realiza????o de uma landing page com o tema de tecnologia e servi??os assim praticando modelagem dos elementos, para a conclus??o do desafio utilizei HTML e CSS.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Projeto-lading-page' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 2/11/2022.'
    travarScroll();
})

shoptec.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/dmdTlC2Ry6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Shoptech."
    resumo.innerHTML = 'Projeto realizado no meu curso t??cnico, principal foco era a realiza????o de um e-commerce com tema livre onde o mesmo desafio foi passado nos primeiros dias de aula, assim sendo poss??vel a visualiza????o da nossa evolu????o, para a realiza????o do desafio utilizei HTML e CSS.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Projeto_eccomerce' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 14/06/2022.'
    travarScroll();
})

telaLogin.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/wk7HoOFA-fE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Tela de login responsiva."
    resumo.innerHTML = 'Projeto realizado no curso de HTML e CSS do "cursoemvideo", principal foco do desafio era a realizar uma tela de login responsiva ap??s aulas sobre responsividade e inputs, para a realiza????o utilizei HTMl, CSS e conceitos de responsividade.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Tela-Login-responsiva' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 08/10/2022.'
    travarScroll();
})

Netflix.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/vGnN0GU5pEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Clone da Netflix."
    resumo.innerHTML = 'Projeto realizado no primeiro bootcamp que me inscrevi, foi meu primeiro projeto pr??tico fora da etec e foi realizado junto com um professor auxiliando no desenvolvimento, para a conclus??o foi utilizado HTML CSS e Bootstrap.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/clone_netflix' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 21/04/2022.'
    travarScroll();
})

Sociais.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/pqvAFqp77fk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Projeto redes sociais."
    resumo.innerHTML = 'Projeto realizado no curso de HTML e CSS do cursoemvideo, principal foco do projeto era exercitar os conhecimentos sobre iframe passados anteriormente no curso, para a conclus??o foi utilizado HTML e CSS.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Projeto-social' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 18/08/2022.'
    travarScroll();
})

Cordel.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/3LQuwNq5_oM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Cordel Moderno."
    resumo.innerHTML = 'Projeto realizado no curso de HTML e CSS do cursoemvideo, um dos primeiros projetos apresentados no curso, por isso algo mais simples, HTML e CSS foi utilizado para a conclus??o.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/projeto-cordel' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 28/06/2022.'
    travarScroll();
})

Android.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/Aft0EAQbuJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Projeto Android."
    resumo.innerHTML = 'Projeto realizado no curso de HTML e CSS do cursoemvideo, principal objetivo do projeto era aprender na pr??tica sobre responsividade e modelagem de um site trazendo as informa????es sobre o Android.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/projeto-android' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 26/06/2022.'
    travarScroll();
})

Turismo.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/nxynmQPM8vg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Turismo Espacial."
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io", principal objetivo ?? a realiza????o de um site de turismo espacial com a diversas interea????es e p??ginas de home, destinos, tripula????o e tecnologias para a navega????o dentro do site, para a conclus??o do site utilizei HTML, CSS e Javascript.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Turismo_Espacial' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 21/12/2022.'
    travarScroll();
})

produto.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/nkZ6eEg-dAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "P??gina inicial de produto."
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io", principal foco ?? a realiza????o de uma pagina de compra de um produto, onde o usuario pode manipular a quantidade de produtos e adicionar ao carrinho, ao clicar no carrinho ?? poss??vel a visualiza????o do pre??o total da compra, para a conclus??o do desafio utilizei HTML, CSS e Javascript.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Pagina-Produto' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 27/12/2022.'
    travarScroll();
})

pacotes.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/na-cTba7Vao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "P??gina pacotes."
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io", principal foco ?? a realiza????o de um site de venda de produtos mensais ou anuais mostrando tr??s op????es para cada per??odo e suas informa????es, foi utilizado HTML, CSS e Javascript.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Pacotes_Comum_Premium' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 19/12/2022.'
    travarScroll();
})

port.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/1YV9XQmLSLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Portf??lio."
    resumo.innerHTML = 'Projeto pessoal realizado com principal foco de mostrar minhas habilidades e juntar meus projetos para as pessoas que se interessar, para a realiza????o foi utilizado HTML, CSS e Javascript.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Portfolio' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = '??ltima atualiza????o em : 10/02/2023.'
    travarScroll();
})

JornaTech.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/MfhTSLmgKMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "P??gina de Pacotes."
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io", principal foco ?? a simula????o de uma p??gina de not??cias sobre tecnologia, foi utilizado HTML, CSS e Javascript para a conclus??o. '
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Pagina_Inicial_Noticias' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 15/12/2022.'
    travarScroll();
})

sunnyside.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/xuMT-4h_mGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Sunnyside."
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io", principal foco ?? a simula????o de uma p??gina de um site que oferece servi??os para vendas online, foi utilizado HTML, CSS e Javascript para a conclus??o. '
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Loja-Sunnyside' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 30/01/2023.'
    travarScroll();
})

empregos.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/2KC64IOBHhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Empregos com filtro."
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io", principal foco ?? a simula????o de uma p??gina com vagas de emprego onde ?? poss??vel a filtragem das vagas com algumas op????es. Para a conclus??o utilizei HTML, CSS e Javascript '
    link.innerHTML = "<a href='https://github.com/pablobidiaki/EmpregosComFiltro' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 02/02/2023.'
    travarScroll();
})

conselho.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/RF9mBp_Y00M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Gerador de conselhos."
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io", primeiro projeto que realizei sozinho sobre API por isso algo mais simples e de f??cil execu????o, para a conclus??o foi utilizado HTML, CSS e Javascript para coletar e utilizar os dados da API'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Gerador-Conselhos-API' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 24/01/2023.'
    travarScroll();
})

pokedex.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/3gzikyIa1aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Pokedex"
    resumo.innerHTML = 'Projeto que realizei no ??ltimo bootcamp que me inscrevi, onde no fim do m??dulo de Javascript esse foi o projeto que foi realizado com a ajuda de um professor.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Pokedex' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 17/11/2022.'
    travarScroll();
})

buscaCep.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/X1E_GcpU010" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Buscardor de CEP."
    resumo.innerHTML = 'Projeto pessoal realizado, principal foco foi realizar uma aplica????o onde o usu??rio digita um CEP e ao confirmar se abre um "card" com diversas informa????es sobre tal CEP, para a conclus??o do desafio utilizei conceitos de HTML, CSS, Javascript ,"useState" e "useEffect" que s??o hooks do React.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/BuscadorCepReact' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 09/02/2023.'
    travarScroll();
})

interativo.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/NUIN5kDlDmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Cart??o interativo."
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io", principal foco foi a realiza????o de um formulario onde os dados digitados s??o enviados automaticamente para a tela do usu??rio, para a conclus??o do desafio utilizei "useState", um hook do React.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Cartao-Interativo' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 19/01/2023.'
    travarScroll();
})

nft.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/Km1dPOrvg4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Cart??o interativo."
    resumo.innerHTML = 'Projeto pessoal realizado como desafio do site "frontendmentor.io", decidi realizar o desafio depois de concluir o curso de react do canal "CFBCursos", como era meu primeiro projeto peguei algo simples para pegar mais contato com a tecnologia.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Cartao_NFT' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 17/01/2023.'
    travarScroll();
})

Lucro.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/A0MumMUAP7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Calculadora de Lucro."
    resumo.innerHTML = 'Projeto onde eu e um colega da minha sala do curso t??cnico fomos selecionados para criarmos e apresentar um projeto utilizando HTML, CSS e PHP representando nosso m??dulo e curso na feira t??cnologica da escola.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Feira-Tecnologica' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 25/10/2022.'
    travarScroll();
})

lanches.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/aRW8MDFE9ZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Bidi Lanches."
    resumo.innerHTML = 'Projeto realizado no meu curso t??cnico na aula de Desenvolvimento Web II, onde a principal ideia do projeto era manipularmos valores enviados de um formul??rio, para a conclus??o foi utilizado HTML, CSS e PHP.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Lanchonete-PHP' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 27/09/2022.'
    travarScroll();
})

tabuada.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/euKgYuKs1e8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Gerador de tabuadas."
    resumo.innerHTML = 'Projeto pessoal que tive ideia de realizar para poder praticar a manipula????o de dados recebidos de formul??rios, para a conclus??o foi utilizado HTML, CSS e PHP.'
    link.innerHTML = "<a href='https://github.com/pablobidiaki/Gerador-de-tabuada-PHP' target= '_blank'>reposit??rio no Github</a> "
    data.innerHTML = 'Projeto finalizado em : 07/09/2022.'
    travarScroll();
})

Bhaskara.addEventListener('click', () => {
    window.location.href="#main"
    modal.classList.remove('none')
    main.style.opacity = ".2"
    header.style.opacity = ".2"
    exemplo.innerHTML = '<iframe src="https://www.youtube.com/embed/N1Genmm9k2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    titulo.innerHTML = "Calculadora de Bhaskara."
    resumo.innerHTML = 'Projeto realizado no meu curso t??cnico na aula de Desenvolvimento Web II, principal foco era praticar manipula????o de valores de formul??rios e l??gica de programa????o, para a conclus??o foi utilizado HTML, CSS e PHP.'
    data.innerHTML = 'Projeto finalizado em : 30/08/2022.'
    travarScroll();
})