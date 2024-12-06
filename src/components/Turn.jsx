import { Square } from "./Square"
import { TURNS } from "../constants"
import { useGame } from "../context/GameProvider"

export const Turn = () => {

    const { turn } = useGame()

    return (
        <section className='turn'>
            <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
            <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
        </section>
    )
}