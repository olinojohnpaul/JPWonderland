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
`

export default HomePage
