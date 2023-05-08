const mongoose = require("mongoose")
const colorr = require("colors")

const connectDB =async()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`Server Issue ${error}`);
        
    }

}

module.exports = connectDB