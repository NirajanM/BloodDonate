const express = require('express');
const mongoose = require('mongoose');
const Bloodbank = require('./models/Bloodbank');
const app = express();
const User = require("./models/User");
require('dotenv').config();
const cors = require('cors');

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

app.use(cors({ origin: true, credentials: true }));

app.get("/ninjacoder/:bg", async (request, response) => {
    const bloodGroup = request.params.bg.toUpperCase();
    const users = await User.find({ blood_group: bloodGroup }, { _id: 1, fname: 1, mname: 1, lname: 1, gender: 1, blood_group: 1 });

    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/daiheroxa", async (req, res) => {
    const bloodbanks = await Bloodbank.find({});
    try {
        res.send(bloodbanks);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, function (req, res) {

    console.log("Server is started on port ", port);

});