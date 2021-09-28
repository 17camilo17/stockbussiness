const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/stockbusiness", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("open", () => {
    console.log("Connected to mongoDB");
});
db.on("error", error => {
    console.log(error);
});

// import todo schema as model
let todoModel = require("./todo_schema");

// ROUTES

app.get("/", (req, res) => {
    res.send("hello");
});



// FETCH TO-DO



app.listen(3000, () => {
    console.log("Server started on port 3000");
});