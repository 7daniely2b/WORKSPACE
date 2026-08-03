const dePinguins = [
    {
        categoria: "Geografia",
        pergunta: "Onde os pinguins vivem na natureza?",
        resposta: "Quase todos vivem no Hemisfério Sul.",
        detalhe: "Nenhum pinguim vive no Polo Norte.",
        imagem: "https://unsplash.com"
    },
    {
        categoria: "Biologia",
        pergunta: "Como os pinguins se mantêm secos?",
        resposta: "Eles possuem penas curtas e impermeáveis.",
        detalhe: "Uma glândula perto da cauda produz óleo protetor.",
        imagem: "https://unsplash.com"
    },
    {
        categoria: "Habilidades",
        pergunta: "Pinguins conseguem voar pelo ar?",
        resposta: "Não, mas eles voam sob a água!",
        detalhe: "Suas asas funcionam como nadadeiras rígidas.",
        imagem: "https://unsplash.com"
    },
    {
        categoria: "Espécies",
        pergunta: "Qual é a maior espécie de pinguim?",
        resposta: "É o Pinguim-Imperador.",
        detalhe: "Chega a 1,20 metros de altura e 45 quilos.",
        imagem: "https://unsplash.com"
    }
];

const container = document.getElementById('container');

dePinguins.forEach(card => {
    const cartaoElemento = document.createElement('article');
    cartaoElemento.className = 'cartao';
    
    cartaoElemento.innerHTML = `
        <div class="cartao__conteudo">
            <div class="cartao__conteudo--pergunta">
                <h3>${card.categoria}</h3>
                <img src="${card.imagem}" alt="Foto de Pinguim" class="cartao__imagem">
                <p>${card.pergunta}</p>
            </div>
            <div class="cartao__conteudo--resposta">
                <h3>Resposta</h3>
                <p>${card.resposta}</p>
                <span>${card.detalhe}</span>
            </div>
        </div>
    `;

    cartaoElemento.addEventListener('click', () => {
        cartaoElemento.classList.toggle('active');
    });

    container.appendChild(cartaoElemento);
});
