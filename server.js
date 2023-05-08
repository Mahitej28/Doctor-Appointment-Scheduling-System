// @ts-ignore
const express = require("express")
const morgan = require("morgan")
const colors = require("colors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//configuring dotenv file
dotenv.config();

//mongodb connection
connectDB();

//creating instance of express
const app = express();

//middlewares
app.use(express.json()) //parsing json data in the request body
app.use(morgan("dev")) // detail information about incoming requests

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use('/api/v1/admin', require("./routes/adminRoutes"));
app.use('/api/v1/doctor', require('./routes/doctorRoutes'));

//port
const port = process.env.PORT || 5000

//Listening to port
app.listen(port, ()=>{
    console.log(
        `Server Running on port ${process.env.PORT}`
    )
})