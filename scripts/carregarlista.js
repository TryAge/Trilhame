// Carregar a lista de profissões do arquivo JSON
fetch('dados.json')
.then(response => response.json())
.then(data => {
    const listaProfissoes = document.getElementById('listaProfissoes');
    data.forEach(profissao => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `template.html?id=${profissao.id}`;
        link.textContent = profissao.titulo;
        listItem.appendChild(link);
        listaProfissoes.appendChild(listItem);
    });
})
.catch(error => console.error('Erro ao carregar a lista de profissões:', error));