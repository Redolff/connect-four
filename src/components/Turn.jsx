import { Square } from "./Square"
import { TURNS } from "../constants"
import { useGame } from "../context/GameProvider"

export const Turn = () => {

    const { turn, error } = useGame()

    return (
        <div>
            <section className='turn'>
                <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
                <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
            </section>
            {error &&
                <div style={{ 
                    display: 'block', 
                    alignItems: 'center', 
                    textAlign: 'center', 
                    justifyContent: 'center', 
                    fontSize: '32px' 
                    }}
                >
                   <p style={{ color: 'red' }}> {error} </p>  
                </div>
            }   
        </div>
    )
}