import { Square } from "./Square"
import { TURNS } from "../constants"
import { useGame } from "../context/GameProvider"
import { checkWinner, checkGameIsOver } from "../logic/board"

export const Game = () => {

    const { board,setBoard,
            turn, setTurn,
            winner, setWinner 
        } = useGame()

    const updateBoard = (index) => {

        // No pisar una celda en la cual ya tenemos un valor o hay un ganador
        if(board[index] || winner){
            return
        }
        //Actualizar tablero
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        //Actualizar turno
        const newTurn = (turn === TURNS.X ? TURNS.O : TURNS.X)
        setTurn(newTurn)

        //Actualizar ganador
        const newWinner = checkWinner(newBoard)
        if(newWinner){
            setWinner(newWinner)
        }else if(checkGameIsOver(newBoard)){
            setWinner(false)
        }
    }

    return (
        <section className="game">
            {board.map((x, index) => {
                return (
                    <Square
                        key={index}
                        index={index}
                        updateBoard={updateBoard}
                    >
                        {x}
                    </Square>
                )
            })}
        </section>
    )
}