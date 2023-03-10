const mongoose = require("mongoose");
const {boolean} = require("webidl-conversions");
const UserSchema = new mongoose.Schema(
    {
        firstname:{
            type: String,
            required: true,
            unique: true
        },
        lastname:{
            type: String,
            required: true,
            unique: true
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
            unique: true
        },
        confirmpassword:{
            type: String,
            required: true,
            unique: true
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
    },{timestamps: true}
);
module.exports = mongoose.model("User",UserSchema);