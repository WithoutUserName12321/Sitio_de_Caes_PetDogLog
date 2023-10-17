document.addEventListener('DOMContentLoaded', function () {
    // Referência aos elementos do carrossel
    const carrossel = document.querySelector('.carrossel');
    const noticias = document.querySelector('.Noticias');
    const botaoAnterior = document.getElementById('Before');
    const botaoProximo = document.getElementById('Next');

    // Valor para controlar a posição do carrossel
    let posicaoNoticias = 0;

    // Função para mover o carrossel para a esquerda
    function moverParaEsquerda() {
        posicaoNoticias -= 800; // Largura de uma notícia
        if (posicaoNoticias < 0) {
            posicaoNoticias = 0;
        }
        noticias.style.transform = `translateX(-${posicaoNoticias}px)`;
    }

    // Função para mover o carrossel para a direita
    function moverParaDireita() {
        posicaoNoticias += 800; // Largura de uma notícia
        const larguraTotal = noticias.scrollWidth;
        if (posicaoNoticias > larguraTotal - noticias.clientWidth) {
            posicaoNoticias = larguraTotal - noticias.clientWidth;
        }
        noticias.style.transform = `translateX(-${posicaoNoticias}px)`;
    }

    // Adicionar eventos de clique aos botões
    botaoAnterior.addEventListener('click', moverParaEsquerda);
    botaoProximo.addEventListener('click', moverParaDireita);
});