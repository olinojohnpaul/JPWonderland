import { useState } from "react"
import styled from "styled-components"
import Game1Start from "./Game1Start"
import useInterval from "../hooks/use-interval";
import Game1Over from "./Game1Over";

// This component is for the Bubble Tea Game
const Game1 = ({highscore}) => {
    // Some necessary states
    const [game, setGame] = useState(false)
    const [top, setTop] = useState("")
    const [mid, setMid] = useState("")
    const [bot, setBot] = useState("")
    const [customer, setCustomer] = useState("🤔 Hmm...")
    const [timer, setTimer] = useState("")
    const [gameover, setGameover] = useState(false)
    const [myScore, setMyScore] = useState(0)

    // Sorts scores by highest to lowest
    if (highscore) {
        highscore.sort((first, second) => second.score - first.score)
    }

    // Ingredient list
    const topIngr = ["Pudding", "Whipped Cream", "Foam"]
    const midIngr = ["Mango Milk", "Mango Slush", "Taro Slush"]
    const botIngr = ["Brown Sugar Jelly Boba", "Tapioca Pearls", "Coconut Jelly"]

    // This function generates random numbers
    const ranNum = (start, end) => {
        return Math.floor((Math.random() * end) + start)
    }

    // This function generates random orders
    const ranOrder = () => {
        setTop(topIngr[ranNum(0, topIngr.length)])
        setMid(midIngr[ranNum(0, topIngr.length)])
        setBot(botIngr[ranNum(0, topIngr.length)])
    }

    // This function starts the game
    const startGame = () => {
        setGame(true)
        setCustomer("😀 I want...")
        ranOrder()
        setTimer(15)
        setGameover(false)
        document.getElementById("click1").play()
    }

    // This is the timer
    useInterval(() => {
        if (timer > 0 ) {
            setTimer(timer - 1)
        } else if (timer === 0) {
            // Game over
            setGameover(true)
            setGame(false)
            setCustomer("😞 Business closed huh?")
            setTop("")
            setMid("")
            setBot("")
        }
    }, 1000)

    return (
        <Main>
            <audio id="click1" src="/sounds/click.mp3" />
            <audio id="click2" src="/sounds/click2.mp3" />

            <button onClick={startGame} disabled={game}>Start Game</button>
            {
                highscore
                ?
                <HighScore>
                Top 3 High Scores:
                {highscore.slice(0, 3).map(elem => {
                    return (
                        <>
                            <div>{elem.name} - {elem.score}</div>
                        </>
                    )
                })}
                </HighScore>
                :
                <div>High Score List Loading...</div>
            }
            <div>{customer}</div>
            <Order>
                <div>Top: <span>{top}</span></div>
                <div>Middle: <span>{mid}</span></div>
                <div>Bottom: <span>{bot}</span></div>
            </Order>
            {
                game
                ? <Game1Start 
                topPick={top}
                midPick={mid}
                botPick={bot}
                ranOrder={ranOrder}
                timer={timer}
                setTimer={setTimer}
                gameover={gameover}
                myScore={myScore}
                setMyScore={setMyScore}
                />
                : <div>Click Start Game to start game</div>
            }
            <div>Score: {myScore}</div>
            {
                gameover &&
                <Game1Over 
                    myScore={myScore}
                />
            }
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-image: url("/images/sunny.jpg");
    padding: 10px;
    height: 100vh;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    span {
        font-weight: bold;
    }
`

const HighScore = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 2px solid lightblue;
    padding: 5px;
`

const Order = styled.div`
    border: 2px solid lightgreen;
    padding: 5px;
    text-align: center;
`

export default Game1