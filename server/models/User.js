const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        _id: {
            type: String,
        },
        name: {
            type: String,
        },
        gender: {
            type: String,
        },
        birthyear: {
            type: String,
        },
        blood_group: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        password: {
            type: String,
        }
    }
);

let User = mongoose.model("user", userSchema);

module.exports = User;

/*
old module
{
        _id: {
            type: String,
        },
        id: {
            type: Number,
        },
        fname: {
            type: String,
        },
        mname: {
            type: String,
        },
        lname: {
            type: String,
        },
        gender: {
            type: String,
        },
        contact: {
            type: String,
        },
        dob: {
            type: String,
        },
        blood_group: {
            type: String,
        },
        district_id: {
            type: Number,
        },
        vm_id: {
            type: Number,
        },
        location_id: {
            type: Number,
        },
        wardno: {
            type: Number,
        },
        status: {
            type: String,
        },
        password: {
            type: String,
        },
        available: {
            type: String,
        },
        reg_date: {
            type: String,
        },
        created_at: {
            type: String,
        },
        updated_at: {
            type: String,
        },
        district: {
            type: {
                id: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                created_at: {
                    type: String,
                },
                updated_at: {
                    type: String,
                }
            }
        },
        muncipality: {
            type: {
                id: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                district_id: {
                    type: Number,
                },
                created_at: {
                    type: String,
                },
                updated_at: {
                    type: String,
                }
            }
        },
        location: {
            type: {
                id: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                muncipality_id: {
                    type: Number,
                },
                created_at: {
                    type: String,
                },
                updated_at: {
                    type: String,
                }
            }
        },

    },
    { timestamps: true }
*/