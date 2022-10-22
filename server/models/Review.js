const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let reviewSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        message: {
            type: String,
        }
    }
);

let Review = mongoose.model("review", reviewSchema);

module.exports = Review;