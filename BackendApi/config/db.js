const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDb is Connected Successfully')
        
    } catch (error) {
        console.log('mongodb is not Connected failed')
    }
}

module.exports = connectDB