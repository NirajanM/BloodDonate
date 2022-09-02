const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
require('dotenv').config();

const port = process.env.PORT || 4000;
const uri = process.env.ATLAS_URI;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("error in connection");
        } else {
            console.log("mongodb is connected");
        }
    });

app.listen(port, function (req, res) {

    console.log("Server is started on port ", port);

});