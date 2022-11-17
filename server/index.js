const express = require('express');
const mongoose = require('mongoose');
const Bloodbank = require('./models/Bloodbank');
const app = express();
const User = require("./models/User");
const Review = require("./models/Review");
const Organization = require("./models/Organization");
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
    const users = await User.find({ blood_group: bloodGroup }, { _id: 1, name: 1, birthyear: 1, address: 1, gender: 1, blood_group: 1, contact: 1 });

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

app.get("/redcrossinfo", async (req, res) => {
    const redcross = await Organization.find({});
    try {
        res.send(redcross);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post("/review", express.json(), async (req, res) => {
    const newReview = new Review({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newReview.save((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("sucess");
        }
    });
    res.send("success");
})

app.post("/recorduser", express.json(), async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        blood_group: req.body.blood_group,
        gender: req.body.gender,
        contact: req.body.contact,
        address: req.body.address,
        birthyear: req.body.birthyear
    });
    newUser.save((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("sucess");
        }
    });
    res.send("success");
})

app.listen(port, function (req, res) {

    console.log("Server is started on port ", port);

});