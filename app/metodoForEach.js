
const elementoParainserirLIvros = document.getElementById ('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    elementoParainserirLIvros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        //let disponibilidade = verificarDisponibilidadeDoLivro(livro)
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elementoParainserirLIvros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}:
          Uma aventura no sertão da programação
        </h2>
        <p class="livro__descricao">Flávio Almeida</p>
        <p class="livro__preco" id="preco">R$${livro.preco}</p>
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `

    })

}

// function verificarDisponibilidadeDoLivro(livro){
//     if(livro.quantidade > 0){
//         return 'livro__imagens'
//     }else{
//         return 'livro__imagens indisponivel'
//     }
//}