import styled from "styled-components"

const AboutPage = () => {
    return (
        <Main>
            This is a website that I made for my final project of Concordia Bootcamp.
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 50px;
    background-image: url("/images/about-bg.jpg");
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    color: white;
    font-size: 40px;
    text-shadow: 2px 2px black;
    text-align: center;
`

export default AboutPage
