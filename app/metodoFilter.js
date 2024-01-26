const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', FiltreLivros))


function FiltreLivros(){
    const elementoBtn = document.getElementById (this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel'? filtrarLivrosPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela (livrosFiltrados);
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis (livrosFiltrados);
        //console.log(valorTotal)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}


function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarLivrosPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela (valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML =`
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `

}
 
// let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
// exibirOsLivrosNaTela (livrosFiltrados);