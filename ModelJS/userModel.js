const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    // ID
    // FirstName, LastName, Address, Emall, Password
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("User", userSchema)
