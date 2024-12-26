const mongoose = require('mongoose');

const uri = "mongodb+srv://aadi13134:Allfather001@cluster0.u78gc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB Atlas!");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        process.exit(1);
    }
}

module.exports = connectDB;