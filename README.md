# Tic-Tac-Toe
Here’s a detailed and professional README for your Tic Tac Toe game built with HTML, CSS, and JavaScript:

---

# Tic Tac Toe

A classic two-player Tic Tac Toe game built using HTML, CSS, and JavaScript. This game allows two players to compete against each other on the same device. The goal is to align three marks (X or O) horizontally, vertically, or diagonally before your opponent does. The game offers a simple, clean interface and provides real-time feedback, making it fun and engaging for players.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Game Instructions](#game-instructions)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Code Structure](#code-structure)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

This project is an implementation of the classic Tic Tac Toe game using modern web technologies: HTML, CSS, and JavaScript. The game consists of a 3x3 grid where two players take turns placing either an "X" or an "O" on the grid. The first player to align three of their marks (horizontally, vertically, or diagonally) wins. If the grid is filled without any player aligning three marks, the game ends in a draw.

This simple project highlights fundamental concepts in web development, including DOM manipulation, event handling, and game state management.

## Features

- **Two-player mode:** Players take turns to mark the grid with "X" or "O".
- **Win detection:** The game detects and highlights a winner, whether the marks are aligned horizontally, vertically, or diagonally.
- **Draw detection:** If all the grid cells are filled without a winner, the game declares a draw.
- **Reset game button:** After each round, players can restart the game and play again.
- **Responsive Design:** The game interface is fully responsive, ensuring a smooth experience on both desktop and mobile devices.
- **Clear UI/UX:** A clean, easy-to-use interface with distinct visual feedback for the current player and the game outcome.

## Tech Stack

- **HTML:** Provides the structure for the game interface, including the game grid, buttons, and layout.
- **CSS:** Styles the game board, cells, and buttons for a visually appealing interface.
- **JavaScript:** Powers the game logic, including handling player moves, detecting the winner, and resetting the game.

## Game Instructions

1. **Start the Game:** Open the `index.html` file in a web browser to play the game.
2. **Players:** The game supports two players, with one player using "X" and the other using "O".
3. **Turns:** Players take turns clicking on an empty cell in the 3x3 grid to place their respective mark.
4. **Winning:** The first player to align three marks horizontally, vertically, or diagonally wins the game.
5. **Draw:** If all cells are filled without a winner, the game ends in a draw.
6. **Restart:** After a game ends, click the "Restart" button to play again.

## How to Play

1. Open the game by launching `index.html` in any modern web browser (Chrome, Firefox, etc.).
2. The game will display a 3x3 grid. Player 1 will be "X" and Player 2 will be "O".
3. Click on any empty cell to place your mark. The game alternates turns between "X" and "O".
4. The first player to align three of their marks horizontally, vertically, or diagonally wins the game.
5. If the grid is filled without any player achieving this, the game will declare a draw.
6. A "Restart" button is available to reset the game for a new round.

## Installation

To run the game locally:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/tic-tac-toe.git
```

2. Navigate to the project directory:

```bash
cd tic-tac-toe
```

3. Open the `index.html` file in your preferred web browser to start playing.

Alternatively, you can download the project files and open the `index.html` file directly in your browser.

## Code Structure

```
tic-tac-toe/
├── index.html        # Main HTML file with the game grid and interface
├── style.css         # CSS file containing styles for the game layout
├── script.js         # JavaScript file that contains the game logic
└── README.md         # Documentation for the project
```

- **`index.html`**: Contains the structure of the game grid, buttons for restarting the game, and the layout of the game interface.
- **`style.css`**: Provides styling for the game grid, individual cells, and buttons, ensuring a visually appealing user interface.
- **`script.js`**: Manages the game’s logic, such as alternating player turns, checking for a winner, and restarting the game.

## License

This project is open-source and available under the MIT License. Feel free to fork, modify, and contribute to this project as you like.

MIT License © 2025 [Your Name]

## Acknowledgements

- This project is inspired by the classic Tic Tac Toe game, a timeless game enjoyed by many.
- Special thanks to [MDN Web Docs](https://developer.mozilla.org/en-US/) for their comprehensive documentation on HTML, CSS, and JavaScript.
- Many thanks to the open-source community for sharing valuable insights on game development with web technologies.

---
