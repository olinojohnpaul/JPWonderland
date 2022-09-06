import { useState } from "react"
import styled from "styled-components"
import Input from "./Input"

const Game1Over = () => {
    // Necessary states
    const [formData, setFormData] = useState({})

    const handleSubmit = (e, formData) => {
        console.log("click")
        e.preventDefault();
        const newFormData = {
            name: formData.name,
        }


        // Sending player info to mongodb

        // fetch("/post-score", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newFormData),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data !== null) {
        //             window.location.alert("Score posted")
        //         }
        //     })
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
            Game Over
            <Form onSubmit={(e) => handleSubmit(e, formData)}>
                <Input 
                    type="text"
                    placeholder="AAA"
                    name={"name"}
                    required={true}
                    handleChange={handleChange}
                />
                <div>Score: </div>
                <button type="submit">Submit</button>
            </Form>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 5px;
`;

export default Game1Over