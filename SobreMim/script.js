const dark = document.getElementById('darkMode')
const hello = document.getElementById('hello')
const content = document.getElementById('content')
const op1 = document.getElementById('op1')
const op2 = document.getElementById('op2')
const op3 = document.getElementById('op3')
const op4 = document.getElementById('op4')
const body = document.getElementById('body')
const dLinks = document.getElementById('dark')
const lLinks = document.getElementById('light')

dark.addEventListener('click', () => {
    dark.innerHTML = "Dark Mode"
    dark.style.color = "#252525"
    op1.style.color = "#252525"
    op2.style.color = "#252525"
    op3.style.color = "#252525"
    op4.style.color = "#252525"
    hello.style.color = "#252525"
    content.style.color = "#252525"
    body.style.backgroundColor = "#dfdfdf"
    lLinks.style.display = 'none'
    dLinks.style.display = 'flex'
})