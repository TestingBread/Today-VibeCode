const gameBoard = document.getElementById('game-board');
const restartBtn = document.getElementById('restart-btn');
const message = document.getElementById('message');

const cardValues = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍍', '🥝', '🍉'];
let cards = [...cardValues, ...cardValues];
let flippedCards = [];
let matchedCount = 0;
let isProcessing = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;

    card.innerHTML = `
        <div class="card-back"></div>
        <div class="card-front">${value}</div>
    `;

    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (isProcessing || this.classList.contains('flipped') || flippedCards.length >= 2) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    isProcessing = true;
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        setTimeout(() => {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedCount += 2;
            flippedCards = [];
            isProcessing = false;

            if (matchedCount === cards.length) {
                message.textContent = 'Congratulations! You matched all pairs!';
            }
        }, 500);
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            isProcessing = false;
        }, 1000);
    }
}

function initGame() {
    gameBoard.innerHTML = '';
    message.textContent = '';
    matchedCount = 0;
    flippedCards = [];
    isProcessing = false;

    shuffle(cards);
    cards.forEach(value => {
        gameBoard.appendChild(createCard(value));
    });
}

restartBtn.addEventListener('click', initGame);

// Start the game for the first time
initGame();
