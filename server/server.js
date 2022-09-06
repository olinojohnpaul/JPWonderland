const express = require("express");

const {
    getScores,
} = require("./handlers");

// This is how I express my backend
express()
    // Getting all scores endpoint
    .get("/get-scores", getScores)

    // Catches any excess endpoints
    .get("*", (req, res) => {
        res.status(404).json({
            status: 404,
            message: "You're in the wrong place, punk.",
        });
    })

    // Sets the server port to 8000
    .listen(8000, () => console.log("Server launched on port 8000"));