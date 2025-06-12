const express = require('express');
const app = express();
const products = require("./products")

const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=> {
    res.send("Welcome to online shop Api")
})

app.get("/products", (req,res)=> {
    res.send(products)
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> {
    console.log(`Server is running a port is ${PORT}`)
})