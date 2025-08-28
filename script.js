// script.js

// Função para exibir mais informações sobre times ou campeonatos
function mostrarInformacao(event) {
  event.preventDefault(); // Evita o comportamento padrão do link (que é recarregar a página)
  
  const id = event.target.getAttribute('data-id'); // Obtém o ID do item clicado
  const informacaoDiv = document.getElementById(`informacao-${id}`);
  
  // Limpar a área de informações antes de mostrar os dados
  document.getElementById('informacao-time').innerHTML = '';
  document.getElementById('informacao-campeonato').innerHTML = '';
  
  if (id === 'barcelona') {
    informacaoDiv.innerHTML = `<h3>FC Barcelona</h3><p>Fundado em 1899, é um dos maiores clubes do mundo, com vários títulos da La Liga e Liga dos Campeões.</p>`;
  } else if (id === 'real-madrid') {
    informacaoDiv.innerHTML = `<h3>Real Madrid</h3><p>Fundado em 1902, o Real Madrid é o time com mais títulos da Liga dos Campeões da UEFA.</p>`;
  } else if (id === 'bayern') {
    informacaoDiv.innerHTML = `<h3>Bayern de Munique</h3><p>Com sede na Alemanha, o Bayern é um dos clubes mais dominantes da Bundesliga e da Europa.</p>`;
  } else if (id === 'copa-do-mundo') {
    informacaoDiv.innerHTML = `<h3>Copa do Mundo</h3><p>A Copa do Mundo é o torneio mais prestigioso de futebol, realizado a cada 4 anos, e o Brasil é o país com mais títulos.</p>`;
  } else if (id === 'champions') {
    informacaoDiv.innerHTML = `<h3>Liga dos Campeões</h3><p>A Liga dos Campeões é a competição de clubes mais importante da Europa, com grandes times competindo pelo troféu.</p>`;
  } else if (id === 'libertadores') {
    informacaoDiv.innerHTML = `<h3>Copa Libertadores</h3><p>A Copa Libertadores da América é o principal torneio de clubes da América Latina.</p>`;
  }
}

// Adicionando os ouvintes de evento para cada link
document.querySelectorAll('a[data-id]').forEach(link => {
  link.addEventListener('click', mostrarInformacao);
});
