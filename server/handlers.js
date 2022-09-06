// Generates unique ids
const { v4: uuidv4 } = require("uuid")

// Mongodb calls
const { MongoClient } = require("mongodb")
require("dotenv").config()
const { MONGO_URI } = process.env
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const client = new MongoClient(MONGO_URI, options)
const db = client.db("final-project")

// Needed for API
const request = require('request-promise')

// Get all high scores
const getScores = async (req, res) => {
    await client.connect()

    try {
        const result = await db.collection("scores").find().toArray();
        res.status(200).json({
            status: 200,
            data: result,
        })
    } catch (err) {
        console.log(err)
    }

    client.close()
};

// Post high score
const postScore = async (req, res) => {
    const newScore = {
        _id: uuidv4(),
        ...req.body,
    }

    await client.connect()

    try {
        const result = await db.collection("scores").insertOne(newScore)
        res.status(200).json({
            status: 200,
            data: result,
            info: newScore,
        })
    } catch (err) {
        console.log(err)
    }

    client.close()
}

// Get weather
const getWeather = async (req, res) => {
    try {
        const result = await request("http://api.weatherapi.com/v1/current.json?key=fa22e5cf8e074ba495f45240220609&q=Montreal")
        const parsedResult = JSON.parse(result)
        res.status(200).json({
            status: 200,
            data: parsedResult,
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getScores,
    postScore,
    getWeather,
};