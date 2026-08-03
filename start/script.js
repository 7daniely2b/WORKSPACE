const dePinguins = [
    {
        categoria: "Geografia",
        pergunta: "Onde os pinguins vivem na natureza?",
        resposta: "Quase todos vivem no Hemisferio Sul.",
        detalhe: "Nenhum pinguim vive no Polo Norte.",
        imagem: "https://unsplash.com"
    },
    {
        categoria: "Biologia",
        pergunta: "Como os pinguins se mantem secos?",
        resposta: "Eles possuem penas curtas e impermeaveis.",
        detalhe: "Uma glandula perto da cauda produz oleo protetor.",
        imagem: "https://unsplash.com"
    },
    {
        categoria: "Habilidades",
        pergunta: "Pinguins conseguem voar pelo ar?",
        resposta: "Nao, mas eles voam sob a agua!",
        detalhe: "Suas asas funcionam como nadadeiras rigidas.",
        imagem: "https://unsplash.com"
    },
    {
        categoria: "Especies",
        pergunta: "Qual e a maior especie de pinguim?",
        resposta: "E o Pinguim-Imperador.",
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
