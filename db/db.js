require('dotenv').config()

const connect = async () => {
    await mongoose.connect(process.env.mongo)
}

module.exports = {connect}