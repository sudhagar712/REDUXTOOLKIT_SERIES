const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require("./models/productModels");
const products = require("./data/products")
const connectDB = require("./config/db")


dotenv.config();

connectDB()

const importData = async() => {
    try {
    await Product.deleteMany();
    await Product.insertMany(products)
    console.log("Import data successful")
    process.exit()
    } catch (error) {
        console.log('Error data import ', error)
        process.exit(1)
    }
}


importData()

