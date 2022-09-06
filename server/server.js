const express = require("express");

const {
    getScores,
    postScore,
    getWeather,
} = require("./handlers");

// This is how I express my backend
express()
    .use(express.json())

    // Getting all scores endpoint
    .get("/get-scores", getScores)

    // Posting high score to mongodb
    .post("/post-score", postScore)

    // Weather API
    .get("/get-weather", getWeather)

    // Catches any excess endpoints
    .get("*", (req, res) => {
        res.status(404).json({
            status: 404,
            message: "You're in the wrong place, punk.",
        });
    })

    // Sets the server port to 8000
    .listen(8000, () => console.log("Server launched on port 8000"));