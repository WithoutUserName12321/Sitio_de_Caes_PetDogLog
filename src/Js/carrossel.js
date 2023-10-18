document.addEventListener("DOMContentLoaded", function() {
    const carrossel = document.querySelector(".carrossel");
    const noticias = document.querySelectorAll(".noticia");
    const botaoNext = document.querySelector("#Next");
    const botaoBefore = document.querySelector("#Before");
    let currentIndex = 0;
    let timer; // Variável para controlar o timer

    // Função para avançar para a próxima notícia
    function proximaNoticia() {
      if (currentIndex < noticias.length - 1) {
        currentIndex++;
        atualizarCarrossel();
      } else {
        currentIndex = 0;
        atualizarCarrossel();
      }
    }

    // Função para iniciar o timer
    function iniciarTimer() {
      timer = setInterval(proximaNoticia, 5000); // Rotação automática a cada 5 segundos (5000ms)
    }

    // Iniciar o timer quando a página é carregada
    iniciarTimer();

    // Parar o timer quando os botões são clicados
    botaoNext.addEventListener("click", () => {
      clearInterval(timer);
      proximaNoticia();
      iniciarTimer(); // Reiniciar o timer
    });

    botaoBefore.addEventListener("click", () => {
      clearInterval(timer);
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = noticias.length - 1;
      }
      atualizarCarrossel();
      iniciarTimer(); // Reiniciar o timer
    });

    function atualizarCarrossel() {
      const deslocamento = -currentIndex * 1300; // Largura total do carrossel (1300px)
      carrossel.querySelector(".Noticias").style.transform = `translateX(${deslocamento}px)`;
    }
});
