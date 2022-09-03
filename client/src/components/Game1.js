import { useState } from "react"
import styled from "styled-components"
import Game1Start from "./Game1Start"

// This component is for the Bubble Tea Game
const Game1 = () => {
    // Some necessary states
    const [game, setGame] = useState(false)
    const [top, setTop] = useState("")
    const [mid, setMid] = useState("")
    const [bot, setBot] = useState("")
    const [customer, setCustomer] = useState("🤔 Hmm...")

    // Ingredient list
    const topIngr = ["Pudding", "Whipped Cream", "Foam"]
    const midIngr = ["Mango Milk", "Mango Slush", "Taro Slush"]
    const botIngr = ["Brown Sugar Jelly Boba", "Tapioca Pearls", "Coconut Jelly"]

    // Random number generator
    const ranNum = (start, end) => {
        return Math.floor((Math.random() * end) + start)
    }

    // This function starts the game
    const startGame = () => {
        setGame(true)
        setTop(topIngr[ranNum(0, topIngr.length)])
        setMid(midIngr[ranNum(0, topIngr.length)])
        setBot(botIngr[ranNum(0, topIngr.length)])
        setCustomer("😀 I want...")
    }

    return (
        <Main>
            <button onClick={startGame} disabled={game}>Start Game</button>
            <div>{customer}</div>
            <div>Top: <span>{top}</span></div>
            <div>Middle: <span>{mid}</span></div>
            <div>Bottom: <span>{bot}</span></div>
            {
                game
                ? <Game1Start />
                : <div>Click the Start Game button</div>
            }
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    span {
        font-weight: bold;
    }
`

export default Game1
