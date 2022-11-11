const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let organizationSchema = new Schema(
    {
        _id: {
            type: String,
        },
        Name: {
            type: String,
        },
        Province: {
            type: String,
        },
        District: {
            type: String,
        },
        Address: {
            type: String,
        },
        Phone: [{ type: String }],
        Fax: [{ type: String }],
        Email: [{ type: String }]
    }
);

let Organization = mongoose.model("organization", organizationSchema);

module.exports = Organization;