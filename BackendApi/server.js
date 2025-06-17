const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const ProductRoutes = require("./routes/productRoutes")
dotenv.config()
const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("hello backend :)")
})

app.use("/api/v1", ProductRoutes);
app.use("/uploads", express.static("uploads"));



connectDB()

const PORT = process.env.PORT || 8900

app.listen(PORT, ()=> {
    console.log(`Server is Running on Port ${PORT}`)
})

