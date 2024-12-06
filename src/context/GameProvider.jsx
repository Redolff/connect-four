import React, {createContext, useState, useContext, useEffect} from "react"
import { TURNS } from "../constants"

const GameContext = createContext()

export const useGame = () => useContext(GameContext)

export const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(Array(16).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null)
    const [data, setData] = useState([])

    const resetGame = () => {
        setBoard(Array(16).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }

    useEffect(() => {
        const fetchData = async() => {
            const URL = 'https://60e0eb3e6b689e001788cc1d.mockapi.io/api/games'
            try{
                const response = await fetch(URL)
                const data = await response.json()
                setData(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <GameContext.Provider value={{ board, setBoard, turn, setTurn, winner, setWinner, resetGame, data }}>
            {children}
        </GameContext.Provider>
    )
}
