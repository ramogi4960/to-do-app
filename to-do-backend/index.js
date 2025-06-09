require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const todo = mongoose.model("todo", new mongoose.Schema({
    content: String
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "The website works"
    })
});


app.listen(process.env.PORT || 5123, () => {
    mongoose.connect(
        process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(console.log("Connected to database"));
    console.log("Server running on PORT: 5100\n\nHappy Hacking")
});