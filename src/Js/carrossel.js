document.addEventListener("DOMContentLoaded", function() {
    const carrossel = document.querySelector(".carrossel");
    const noticias = document.querySelectorAll(".noticia");
    const botaoNext = document.querySelector("#Next");
    const botaoBefore = document.querySelector("#Before");
    let currentIndex = 0;
  
    botaoNext.addEventListener("click", () => {
      if (currentIndex < noticias.length - 1) {
        currentIndex++;
        atualizarCarrossel();
      }
    });
  
    botaoBefore.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        atualizarCarrossel();
      }
    });
  
    function atualizarCarrossel() {
      const deslocamento = -currentIndex * 1300; // Largura total do carrossel (1300px)
      carrossel.querySelector(".Noticias").style.transform = `translateX(${deslocamento}px)`;
    }
  });
  