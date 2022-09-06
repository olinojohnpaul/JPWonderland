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
        setMyScore(myScore - 1)
        setTop("")
        setMid("")
        setBot("")
    }

    // Submit button to submit drink
    const submitDrink = () => {
        // Submits drink
        if (top === topPick) {
            if (mid === midPick) {
                if (bot === botPick) {
                    setThanks("That's my drink, thank you! 😊")
                    setMyScore(myScore + 1)
                    setTop("")
                    setMid("")
                    setBot("")
                    ranOrder()
                    
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
        if (myScore === 4) {
            setStage(2)
        } else if (myScore === 9) {
            setStage(3)
        }

        // Harder difficulty based on stage
        if (stage === 1) {
            setTimer(15)
        } else if (stage === 2) {
            setTimer (10)
        } else if (stage === 3) {
            setTimer(5)
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
            <div>
                Timer: {timer}
            </div>
            <div>
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
`

const DrinkWrap = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
`

export default Game1Start