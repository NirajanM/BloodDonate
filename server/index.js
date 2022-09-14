const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require("./models/User");
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
    }
);

app.get("/ninjacoder/:bg", async (request, response) => {
    const bloodGroup = request.params.bg.toUpperCase();
    console.log(bloodGroup);
    const users = await User.find({ blood_group: bloodGroup }, { _id: 1, fname: 1, mname: 1, lname: 1, gender: 1, blood_group: 1 });

    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(port, function (req, res) {

    console.log("Server is started on port ", port);

});