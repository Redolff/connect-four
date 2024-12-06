import { useGame } from "../context/GameProvider"

const ResetButton = () => {
    const { resetGame } = useGame()

    return (
        <button onClick={resetGame}> Empezar de nuevo </button>
    )
}

export default ResetButton