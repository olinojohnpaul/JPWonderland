// import {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import Game1 from "./Game1";
import Game1Over from "./Game1Over";
import Header from "./Header";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bubble-tea-game" element={<Game1 />} />
                <Route path="/bubble-tea-game/gameover" element={<Game1Over />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
