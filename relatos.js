document.addEventListener("DOMContentLoaded", function() {
    // Obtém todos os elementos com a classe 'titulo'
    var titulos = document.querySelectorAll('.titulo');
  
    // Adiciona um evento de clique a cada título
    titulos.forEach(function(titulo) {
      titulo.addEventListener('click', function() {
        // Obtém o ID do alvo do conteúdo associado ao título
        var targetId = titulo.getAttribute('data-target');
        // Encontra o elemento do conteúdo correspondente
        var conteudo = document.getElementById(targetId);
        
        // Alterna a classe 'mostrando' no conteúdo
        conteudo.classList.toggle('mostrando');
      });
    });
  });
  