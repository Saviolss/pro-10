const btnD = document.getElementById('btnLivrosDisponiveis')
btnD.addEventListener('click', filtrarLivros)
const btnF = document.getElementById('btnFiltrarLivrosFront')
btnF.addEventListener('click', filtrarLivrosF)
const btnB = document.getElementById('btnFiltrarLivrosBack')
btnB.addEventListener('click', filtrarLivrosB)
const btnDados = document.getElementById('btnFiltrarLivrosDados')
btnDados.addEventListener('click', filtrarLivrosDados)

function filtrarLivrosF() {
    let filtradosF = livros.filter(livro => livro.categoria == 'front-end')
    exibirLivrosTela(filtradosF)
}

function filtrarLivrosB() {
    let filtradosB = livros.filter(livro => livro.categoria == 'back-end')
    exibirLivrosTela(filtradosB)
}

function filtrarLivrosDados() {
    let filtradosDados = livros.filter(livro => livro.categoria == 'dados')
    exibirLivrosTela(filtradosDados)
}

function filtrarLivros() {
    let filtrados = livros.filter(livro => livro.quantidade > 0)
    exibirLivrosTela(filtrados)
    const valorCombo = calcularValorDisponivel(filtrados)
    exibirCombo(valorCombo)
}

function exibirCombo(valorCombo) {
    comboDisponivel.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorCombo}</span></p>
        </div>    
`
}