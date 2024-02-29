const express = require("express");
const app = express();
const bodyParser = require("body-parser");


// body-parser middleware is needed for json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// use the route to get array, test for fizzbuzz, and respond

app.use("/fizzbuzz", require("./routes/fizzBuzz"));

app.listen(3000);

module.exports = app;