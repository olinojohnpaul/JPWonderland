import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <Main>
            <Link to="/">
                Home
            </Link>
            <Link to="/bubble-tea-game">
                Bubble Tea Game
            </Link>
            <Link to="/shop">
                Shop
            </Link>
            <Link to="/about">
                About
            </Link>
            <audio controls>
                <source src="/sounds/ShilohDynastyImagination.mp3" />
            </audio>
        </Main>
    )
}

const Main = styled.nav`
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    margin-bottom: 20px;
    background-color: aliceblue;
    align-items: center;
    margin: 0;

    a {
        background-color: antiquewhite;
        padding: 10px;
        text-decoration: none;
        border-radius: 10px;
    }

    a:hover {
        background-color: aliceblue;
        border: 2px solid antiquewhite;
    }
`

export default Header
