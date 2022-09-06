// Generates unique ids
const { v4: uuidv4 } = require("uuid");

// Mongodb calls
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const client = new MongoClient(MONGO_URI, options)
const db = client.db("final-project")

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

module.exports = {
    getScores,
    postScore,
};