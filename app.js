const express = require("express");
const bodyParser = require("body-parser");
const router = require('./routes');

const app = express();

app.use( bodyParser.urlencoded({extended: false}) );
app.use( bodyParser.json() );
app.use(router);
app.set("view engine", "ejs");



app.listen(6060, err => {
    if(!err) {
        console.log("Server is runing at port 6060")
    }
})