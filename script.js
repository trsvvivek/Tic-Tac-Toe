// script.js
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let winner = null;

const welcomeMessage = document.getElementById('welcomeMessage');
const winnerMessage = document.getElementById('winnerMessage');
const currentTurn = document.getElementById('currentTurn');
const restartButton = document.getElementById('restartButton');
const startNewGameButton = document.getElementById('startNewGameButton');
const squares = Array.from(document.getElementsByClassName('square'));

const winningCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Function to start the game with animation
function startGame() {
    welcomeMessage.style.display = 'block';
    welcomeMessage.textContent = 'Welcome to Tic Tac Toe!';
    welcomeMessage.style.animation = 'popUp 1s ease, colorChange 5s linear infinite';
    
    setTimeout(() => {
        welcomeMessage.style.display = 'none';
    }, 5000); // Keep the welcome message visible for 5 seconds

    updateTurnMessage();
}

// Function to update the game state
function updateBoard() {
    squares.forEach((square, index) => {
        square.textContent = gameBoard[index];
    });
}

// Function to update the turn message
function updateTurnMessage() {
    if (gameActive) {
        currentTurn.style.display = 'block';
        currentTurn.textContent = `It's Player ${currentPlayer}'s turn!`;
    }
}

// Function to check for a winner
function checkWinner() {
    for (const combination of winningCombination) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            winner = gameBoard[a];
            displayWinner();
            return;
        }
    }
    if (!gameBoard.includes('')) {
        winner = 'Tie';
        displayWinner();
    }
}

// Function to display the winner with color animation
function displayWinner() {
    gameActive = false;
    winnerMessage.style.display = 'block';
    
    if (winner === 'X') {
        winnerMessage.textContent = 'Player A Wins!';
        winnerMessage.style.animation = 'popUp 1s ease, winnerMessage 5s linear infinite';
    } else if (winner === 'O') {
        winnerMessage.textContent = 'Player B Wins!';
        winnerMessage.style.animation = 'popUp 1s ease, winnerMessage 5s linear infinite';
    } else {
        winnerMessage.textContent = 'It\'s a Tie!';
        winnerMessage.style.animation = 'popUp 1s ease, winnerMessage 5s linear infinite';
    }

    // Show the "Start New Game" button after the game ends
    startNewGameButton.style.display = 'inline-block';
}

// Function to handle a move
function handleMove(index) {
    if (gameBoard[index] || !gameActive) return;

    gameBoard[index] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateBoard();
    updateTurnMessage();
    checkWinner();
}

// Adding event listeners for each square
squares.forEach((square, index) => {
    square.addEventListener('click', () => handleMove(index));
});

// Restart the game
restartButton.addEventListener('click', () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    winner = null;
    updateBoard();
    winnerMessage.style.display = 'none';
    startNewGameButton.style.display = 'none';
    updateTurnMessage();
});

// Start a new game
startNewGameButton.addEventListener('click', () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    winner = null;
    updateBoard();
    winnerMessage.style.display = 'none';
    startNewGameButton.style.display = 'none';
    updateTurnMessage();
});

// Initialize the game
startGame();
