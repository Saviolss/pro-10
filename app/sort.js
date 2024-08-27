let btnOrdenacao = document.getElementById('btnOrdenarPorPreco')
btnOrdenacao.addEventListener('click', ordenarPreco)

function ordenarPreco() {
    let livrosOrdenados = livros.sort((a,b) =>  a.preco - b.preco )
    exibirLivrosTela(livrosOrdenados)
}