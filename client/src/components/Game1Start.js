import { useState } from "react"
import styled from "styled-components"

// This component is when the game starts
const Game1Start = () => {
    // Ingredients as shown to the user
    const [top, setTop] = useState("")
    const [mid, setMid] = useState("")
    const [bot, setBot] = useState("")

    // Submit button to submit drink
    const submitDrink = () => {
        window.alert("You submitted the drink")
    }

    return (
        <Main>
            <div className="ingr">
                <span>Top</span>
                <div className="ingr-buttons">
                    <button onClick={() => setTop("Pudding")}>Pudding</button>
                    <button onClick={() => setTop("Whipped Cream")}>Whipped Cream</button>
                    <button onClick={() => setTop("Foam")}>Foam</button>
                </div>
            </div>
            <div className="ingr">
                <span>Middle</span>
                <div className="ingr-buttons">
                    <button onClick={() => setMid("Mango Slush")}>Mango Slush</button>
                    <button onClick={() => setMid("Mango Milk")}>Mango Milk</button>
                    <button onClick={() => setMid("Taro Slush")}>Taro Slush</button>
                </div>
            </div>
            <div className="ingr">
                <span>Buttom</span>
                <div className="ingr-buttons">
                    <button onClick={() => setBot("Brown Sugar Jelly Boba")}>Brown Sugar Jelly Boba</button>
                    <button onClick={() => setBot("Tapioca Pearls")}>Tapioca Pearls</button>
                    <button onClick={() => setBot("Coconut Jelly")}>Coconut Jelly</button>
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
            <button onClick={submitDrink}>Submit Drink</button>
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