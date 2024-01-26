let livros = [];
const endPointdaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getbuscarLivrosdaAPI()



async function getbuscarLivrosdaAPI () {
    const res = await fetch (endPointdaAPI);
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

