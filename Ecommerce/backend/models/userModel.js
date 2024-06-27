const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: String,
    email: {
        type: String,
        unique: true  // email should be unique
    }, 
    password: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;