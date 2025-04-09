// Função para exibir as estações do ano
function exibirEstacoes() {
    const estacoes = [
        { nome: 'Verão', icone: '☀️', descricao: 'Dias quentes e ensolarados!' },
        { nome: 'Inverno', icone: '🌧️', descricao: 'Chuva e clima frio.' },
        { nome: 'Outono', icone: '🍂', descricao: 'Folhas caindo e brisa fresca.' },
        { nome: 'Primavera', icone: '🌳', descricao: 'Árvores verdes e florescendo!' }
    ];

    console.log('Estações do Ano:');
    estacoes.forEach(estacao => {
        console.log(`${estacao.icone} ${estacao.nome}: ${estacao.descricao}`);
    });
}

// Chamando a função para exibir as estações
exibirEstacoes();

