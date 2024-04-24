const chessboard = document.getElementById('chessboard');

const board = [];
const pieces = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];

for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
        if (i === 0 || i === 1 || i === 6 || i === 7) {
            row.push({ piece: pieces[j], color: i < 2 ? 'black' : 'white' });
        } else {
            row.push(null);
        }
    }
    board.push(row);
}

function renderChessboard() {
    chessboard.innerHTML = '';
    board.forEach((row, rowIndex) => {
        row.forEach((square, colIndex) => {
            const squareElement = document.createElement('div');
            squareElement.classList.add('square', (rowIndex + colIndex) % 2 === 0 ? 'bg-gray-600' : 'bg-gray-300');
            if (square) {
                squareElement.textContent = square.piece;
                squareElement.classList.add(square.color === 'black' ? 'text-black' : 'text-white');
            }
            chessboard.appendChild(squareElement);
        });
    });
}

renderChessboard();
