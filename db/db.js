require('dotenv').config()
const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect(process.env.mongo)
        console.log("Connected to Mongo Successfully!")
    } catch(error) {
        console.log("Connected to Mongo Fail")
    }
}

module.exports = {connect}