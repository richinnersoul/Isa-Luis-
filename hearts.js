(function() {
  // Criar container se não existir
  let container = document.getElementById("hearts-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "hearts-container";
    document.body.appendChild(container);
  }

  function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("heart");
    coracao.innerHTML = "❤"; 
    container.appendChild(coracao);

    // posição aleatória
    coracao.style.left = Math.random() * 100 + "vw";
    // duração aleatória
    const duracao = Math.random() * 3 + 2; 
    coracao.style.animationDuration = duracao + "s";
    // tamanho aleatório
    coracao.style.fontSize = Math.random() * 20 + 20 + "px";

    // remover depois que subir
    setTimeout(() => {
      coracao.remove();
    }, duracao * 1000);
  }

  setInterval(criarCoracao, 300);
})();
