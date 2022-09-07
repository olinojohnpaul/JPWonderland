import styled from "styled-components"

const HomePage = () => {
    return (
        <Main>
            <div>Welcome to my website</div>
            <div>Enjoy your stay!</div>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 50px;
    background-image: url("/images/home-bg.jpg");
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    color: white;
    font-size: 40px;
    text-shadow: 2px 2px black;
`

export default HomePage
