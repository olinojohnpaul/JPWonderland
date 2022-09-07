import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import Game1 from "./Game1";
import Header from "./Header";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import GlobalStyles from "./GlobalStyles";

const App = () => {
    // States needed
    const [highscore, setHighscore] = useState("")
    const [weather, setWeather] = useState("")

    // Gets high scores
    useEffect(() => {
        fetch("/get-scores")
            .then(res => res.json())
            .then(data => setHighscore(data.data))
    }, [])

    // Gets the weather
    useEffect(() => {
        fetch("/get-weather")
            .then(res => res.json())
            .then(data => setWeather(data.data))
    }, [])
    
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bubble-tea-game" element={weather && <Game1 
                    highscore={highscore}
                    weather={weather}
                />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
