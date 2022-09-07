import styled from "styled-components"

const ShopPage = () => {
    return (
        <Main>
            <div>
                This is supposed to be a shop you can use to buy backgrounds or stickers with money you earn in the game.
            </div>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-image: url("/images/shop-bg.jpg");
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

export default ShopPage
