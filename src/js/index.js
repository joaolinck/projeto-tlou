// pegando o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagensCarrossel = document.querySelectorAll('.imagem');
// identifica o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) =>  {
    botao.addEventListener('click', () => {
        // desmarca o botão previamente selecionado
        desativarBotaoSelecionado();

        // marca o último botão clicado
        botao.classList.add('selecionado');

        // esconde a imagem de fundo anterior
        esconderImagemAtiva();

        // mostra a imagem correspondente ao botão marcado
        imagensCarrossel[indice].classList.add('ativa');
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
