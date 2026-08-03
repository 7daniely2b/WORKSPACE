# 🐧 Alura Flashcards: Pinguins
Um aplicativo web simples e responsivo de flashcards interativos sobre pinguins, desenvolvido com tecnologias web fundamentais baseado no modelo didatico da Alura. As cartas utilizam animacoes 3D puras via CSS para revelar as respostas.
## 🚀 Tecnologias Utilizadas
* **HTML5:** Estrutura e semantica da pagina.
* **CSS3:** Estilizacao baseada em convencoes BEM (`cartao__conteudo`), Grid Layout, variaveis e animacoes de rotacao 3D (`perspective`, `transform-style`).
* **JavaScript (ES6+):** Manipulacao dinamica do DOM para renderizar os cards automaticamente e alternar os estados de clique.
## 🛠️ Como Executar o Projeto
Nao e necessario instalar nenhuma dependencia ou rodar servidores locais.
1. Faca o download ou clone este repositoorio.
2. Abra o arquivo `index.html` diretamente em qualquer navegador web (Chrome, Firefox, Edge, Safari).
## 📝 Funcionalidades
* **Renderizacao dinamica:** Conteudo injetado via JavaScript a partir de uma lista de objetos.
* **Efeito tridimensional (flip):** Rotacao interativa em 3D ao clicar no card usando a classe `.active`.
* **Design responsivo:** Interface adaptavel para celular, tablet e computador atraves do CSS Grid.
* **Imagens Dinamicas:** Fotos integradas via API do Unsplash direto nos cartoes de perguntas.
