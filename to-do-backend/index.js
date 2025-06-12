require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const Todos = mongoose.model("Todos", new mongoose.Schema({
    data: String
}));

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    const document = Todos.find().then(data => {
        res.json({
            data: data
        });
    });
});

app.post("/additem", async (req, res) => {
    try {
        const document = await Todos({ data: req.body.data }).save();
        res.json({ success: "New item saved successfully" })
    } catch (err) {
        console.log(err);
        res.json({ error: "Error occurred while saving new item" })
    }
});


app.listen(process.env.PORT || 5100, () => {
    mongoose.connect(
        process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(console.log("Connected to database\n\n\n"));
    console.log("Server running on PORT: 5100\n\nHappy Hacking\n\n\n")
});