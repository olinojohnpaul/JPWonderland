import { useState } from "react"
import styled from "styled-components"
import Game1Start from "./Game1Start"
import useInterval from "../hooks/use-interval";
import Game1Over from "./Game1Over";

// This component is for the Bubble Tea Game
const Game1 = ({highscore, weather}) => {
    // Some necessary states
    const [game, setGame] = useState(false)
    const [top, setTop] = useState("")
    const [mid, setMid] = useState("")
    const [bot, setBot] = useState("")
    const [customer, setCustomer] = useState("🤔 Hmm...")
    const [timer, setTimer] = useState("")
    const [gameover, setGameover] = useState(false)
    const [myScore, setMyScore] = useState(0)
    const [sunny, setSunny] = useState(false)

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

        if (weather.current.condition.text === "Sunny") {
            setSunny(true)
        } else {
            setSunny(false)
        }
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
        <Main sunny={sunny}>
            <audio id="click1" src="/sounds/click.mp3" />
            <audio id="click2" src="/sounds/click2.mp3" />

            <button onClick={startGame} disabled={game} className="startButton">Start Game</button>
            <div className="text">Current weather is {weather.current.condition.text}</div>
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
            <div className="text">{customer}</div>
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
                : <div className="instructions">Click Start Game to start game</div>
            }
            <div className="text">Score: {myScore}</div>
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
    background-image: var(${({sunny}) => sunny ? "--sunny" : "--default"});
    padding: 50px;
    height: 100vh;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    span {
        font-weight: bold;
    }

    .instructions {
        font-weight: bold;
        font-size: large;
        background-color: white;
        padding: 5px;
        border-radius: 5px;
    }

    .text {
        padding: 5px;
        background-color: white;
        border-radius: 5px;
    }

    .startButton {
        background-color: darkblue;
        border-radius: 10px;
        border-style: none;
        color: white;
        font-size: 15px;
        font-weight: bold;
        padding: 10px 15px;
    }

    .startButton:hover,
    .startButton:focus {
        background-color: blue;
    }
`

const HighScore = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 2px solid lightblue;
    padding: 5px;
    background-color: white;
`

const Order = styled.div`
    border: 2px solid lightgreen;
    padding: 5px;
    text-align: center;
    background-color: white;
`

export default Game1