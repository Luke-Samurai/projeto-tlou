const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        


        desmarcarBotaoAnterior();

        marcarBotaoClicado(botao);

        esconderImagemanterior();

        mostrarImgaemSelecionada(indice);
    
    })
})




function mostrarImgaemSelecionada(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemanterior() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function marcarBotaoClicado(botao) {
    botao.classList.add('selecionado');
}

function desmarcarBotaoAnterior() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

