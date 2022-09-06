import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import Game1 from "./Game1";
import Header from "./Header";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import GlobalStyles from "./GlobalStyles";

const App = () => {
    const [highscore, setHighscore] = useState("")
    const [weather, setWeather] = useState("")

    useEffect(() => {
        fetch("/get-scores")
            .then(res => res.json())
            .then(data => setHighscore(data.data))
    }, [])

    useEffect(() => {
        fetch("http://api.weatherapi.com/v1")
            .then(res => res.json())
            .then(data => setWeather(data.data))
    }, [])

    console.log(weather)
    
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bubble-tea-game" element={<Game1 highscore={highscore} />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
