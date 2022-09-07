import { useState } from "react"
import styled from "styled-components"

// This component is when the game starts
const Game1Start = ({topPick, midPick, botPick, ranOrder, timer, setTimer, gameover, myScore, setMyScore}) => {
    // States necessary
    const [top, setTop] = useState("")
    const [mid, setMid] = useState("")
    const [bot, setBot] = useState("")
    const [thanks, setThanks] = useState("")
    const [stage, setStage] = useState(1)

    // Failure function
    const youFailed = () => {
        setThanks("That's not the drink I ordered, try again 😠")
        setTop("")
        setMid("")
        setBot("")

        if (myScore !== 0) {
            setMyScore(myScore - 100)
        }
    }

    // Submit button to submit drink
    const submitDrink = () => {
        // Submits drink
        if (top === topPick) {
            if (mid === midPick) {
                if (bot === botPick) {
                    setThanks("That's my drink, thank you! 😊")
                    setMyScore(myScore + 100)
                    setTop("")
                    setMid("")
                    setBot("")
                    ranOrder()
                    document.getElementById("click2").play()
                } else {
                    youFailed()
                }
            } else {
                youFailed()
            }
        } else {
            youFailed()
        }

        // Next level/stage
        if (myScore === 200) {
            setStage(2)
        } else if (myScore === 500) {
            setStage(3)
        } else if (myScore === 800) {
            setStage(4)
        } else if (myScore === 1100) {
            setStage(5)
        } else if (myScore === 1400) {
            setStage(6)
        }

        // Harder difficulty based on stage
        if (stage === 1) {
            setTimer(15)
        } else if (stage === 2) {
            setTimer (10)
        } else if (stage === 3) {
            setTimer(5)
        } else if (stage === 4) {
            setTimer(4)
        } else if (stage === 5) {
            setTimer(3)
        } else if (stage === 6) {
            setTimer(2)
        }
    }

    return (
        <Main>
            <div className="ingr">
                <span>Top</span>
                <div className="ingr-buttons">
                    <button onClick={() => setTop("Pudding")} disabled={gameover}>Pudding</button>
                    <button onClick={() => setTop("Whipped Cream")} disabled={gameover}>Whipped Cream</button>
                    <button onClick={() => setTop("Foam")} disabled={gameover}>Foam</button>
                </div>
            </div>
            <div className="ingr">
                <span>Middle</span>
                <div className="ingr-buttons">
                    <button onClick={() => setMid("Mango Slush")} disabled={gameover}>Mango Slush</button>
                    <button onClick={() => setMid("Mango Milk")} disabled={gameover}>Mango Milk</button>
                    <button onClick={() => setMid("Taro Slush")} disabled={gameover}>Taro Slush</button>
                </div>
            </div>
            <div className="ingr">
                <span>Buttom</span>
                <div className="ingr-buttons">
                    <button onClick={() => setBot("Brown Sugar Jelly Boba")} disabled={gameover}>Brown Sugar Jelly Boba</button>
                    <button onClick={() => setBot("Tapioca Pearls")} disabled={gameover}>Tapioca Pearls</button>
                    <button onClick={() => setBot("Coconut Jelly")} disabled={gameover}>Coconut Jelly</button>
                </div>
            </div>
            <div>
                Current Drink: 
                <DrinkWrap>
                    <div>{top}</div>
                    <div>{mid}</div>
                    <div>{bot}</div>
                </DrinkWrap>
            </div>
            <button onClick={submitDrink} disabled={gameover}>Submit Drink</button>
            <div className="timer">
                Timer: {timer}
            </div>
            <div className="text">
                Stage: {stage}
            </div>
            <div>
                {thanks}
            </div>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;

    .ingr {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .ingr-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
    }

    .timer {
        font-size: 30px;
        font-weight: bold;
        color: red;
        border-radius: 5px;
        padding: 5px;
        background-color: white;
    }

    button {
        color: white;
        background-color: black;
        border-radius: 5px;
        font-size: 20px;
    }

    button:hover {
        color: black;
        background-color: white;
    }
`

const DrinkWrap = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
`

export default Game1Start