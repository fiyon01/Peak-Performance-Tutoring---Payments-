const dotenv = require("dotenv")

const  mongoose = require("mongoose")
//load env variables
dotenv.config()


// create a mongodb connection
const db = mongoose.connect(process.env.MONGO_URI,{
}).then(()=>{
    console.log("MongoDB connected")
}).catch((err)=>{
    console.log("Connecting to mongodb failed" + err.message)
    process.exit(1); // stop app if DB fails
})

module.exports = db