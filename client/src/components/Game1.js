import { useState } from "react"
import styled from "styled-components"
import Game1Start from "./Game1Start"
import useInterval from "../hooks/use-interval";

// This component is for the Bubble Tea Game
const Game1 = () => {
    // Some necessary states
    const [game, setGame] = useState(false)
    const [top, setTop] = useState("")
    const [mid, setMid] = useState("")
    const [bot, setBot] = useState("")
    const [customer, setCustomer] = useState("🤔 Hmm...")
    const [timer, setTimer] = useState("")

    // Ingredient list
    const topIngr = ["Pudding", "Whipped Cream", "Foam"]
    const midIngr = ["Mango Milk", "Mango Slush", "Taro Slush"]
    const botIngr = ["Brown Sugar Jelly Boba", "Tapioca Pearls", "Coconut Jelly"]

    // Random number generator
    const ranNum = (start, end) => {
        return Math.floor((Math.random() * end) + start)
    }

    // Random order generator
    const ranOrder = () => {
        setTop(topIngr[ranNum(0, topIngr.length)])
        setMid(midIngr[ranNum(0, topIngr.length)])
        setBot(botIngr[ranNum(0, topIngr.length)])
    }

    // Timer
    useInterval(() => {
        if (timer > 0 ) {
            setTimer(timer - 1)
        } else if (timer === 0) {
            window.alert("Game over")
        }
    }, 1000)

    // This function starts the game
    const startGame = () => {
        setGame(true)
        setCustomer("😀 I want...")
        ranOrder()
        setTimer(10)
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
                ? <Game1Start 
                topPick={top}
                midPick={mid}
                botPick={bot}
                ranOrder={ranOrder}
                timer={timer}
                />
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
