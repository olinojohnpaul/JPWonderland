import { useState } from "react"
import styled from "styled-components"
import Input from "./Input"
import gameOver from "../assets/game-over.jpg"

const Game1Over = ({myScore}) => {
    // Necessary states
    const [formData, setFormData] = useState({})

    const handleSubmit = (e, formData) => {
        e.preventDefault()

        const newFormData = {
            name: formData.firstName,
            score: myScore,
        }

        // Sending player info to mongodb
        fetch("/post-score", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFormData),
        })
            .then(res => res.json())
            .then(data => {
                if (data !== null) {
                    window.alert("Thank you for playing!")
                    window.location.reload()
                }
            })
    }

    // Passing form info to the FormData state 
    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    return (
        <Main>
            <div className="gameover">Game Over</div>
            <div>Name</div>
            <Form onSubmit={(e) => handleSubmit(e, formData)}>
                <Input
                    type="text" 
                    placeholder="AAA"
                    name={"firstName"}
                    required={true}
                    handleChange={handleChange}
                />
                <button type="submit">Submit</button>
            </Form>
            <img src={gameOver} alt="game-over-shrek" />
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .gameover {
        font-weight: bold;
        font-size: large;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 5px;
`;

export default Game1Over