import { COMBOS_WINNERS } from "../constants";

export const checkWinner = (boardToCheck) => {
    for (const combo of COMBOS_WINNERS) {
        const [a, b, c, d] = combo
        if(boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c] &&
            boardToCheck[a] === boardToCheck[d]
        ){
            return boardToCheck[a]
        }
    }
    // Si no hay ganador
    return null
}

export const checkGameIsOver = (newBoard) => {
    // revisamos si hay empate
    // si no hay mas espacios vacios en el tablero
    return newBoard.every((x) => x != null)
}