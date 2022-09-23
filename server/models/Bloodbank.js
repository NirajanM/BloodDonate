const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bloodbankSchema = new Schema(
    {
        _id: {
            type: String,
        },
        name: {
            type: String,
        },
        address: {
            type: String,
        },
        contact: [{ type: String }]
    }
);

let Bloodbank = mongoose.model("bloodbank", bloodbankSchema);

module.exports = Bloodbank;