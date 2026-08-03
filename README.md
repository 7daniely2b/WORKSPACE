// Dados dos flashcards organizados em uma lista de objetos
const cardsData = [
    {
        icon: "🌍",
        question: "Onde os pinguins vivem na natureza?",
        answer: "Quase todos vivem no Hemisferio Sul.",
        detail: "Nenhum pinguim vive no Polo Norte. Habitam a Antartida, Nova Zelandia e Galapagos."
    },
    {
        icon: "🪶",
        question: "Como os pinguins se mantem secos?",
        answer: "Eles possuem penas curtas e impermeaveis.",
        detail: "Uma glandula perto da cauda produz oleo, que eles espalham pelo corpo todo."
    },
    {
        icon: "🌊",
        question: "Pinguins conseguem voar pelo ar?",
        answer: "Nao, mas eles voam sob a agua!",
        detail: "Suas asas evoluiram para nadadeiras rigidas. Algumas especies nadam a 35 km/h."
    },
    {
        icon: "👑",
        question: "Qual e a maior especie de pinguim?",
        answer: "E o Pinguim-Imperador.",
        detail: "Ele chega a ter 1,20 metros de altura e pode pesar ate 45 quilos."
    }
];

// Seleciona o container HTML onde os cards serao colocados
const container = document.getElementById('flashcards-container');

// Renderiza cada card na tela de forma dinamica
cardsData.forEach(data => {
    const card = document.createElement('div');
    card.className = 'flashcard';
    
    card.innerHTML = `
        <div class="card-face front">
            <div class="icon">${data.icon}</div>
            <h3>${data.question}</h3>
        </div>
        <div class="card-face back">
            <h2>Resposta!</h2>
            <p>${data.answer}</p>
            <div class="detail">${data.detail}</div>
        </div>
    `;

    // Evento de clique para virar e desvirar a carta
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    // Adiciona o card finalizado ao container principal
    container.appendChild(card);
});
