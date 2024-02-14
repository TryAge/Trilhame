const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'));

// Carregar os dados da profissão do arquivo JSON
fetch('dados.json')
    .then(response => response.json())
    .then(data => {
        const profissao = data.find(item => item.id === id);
        document.getElementById('titulo').innerText = profissao.titulo;
        document.getElementById('descricao').innerText = profissao.desc;

    })
    .catch(error => console.error('Erro ao carregar os dados da profissão:', error));