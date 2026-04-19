const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        console.log("⏳ Connecting to MongoDB...");
        
        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ MongoDB connected!");
    } catch (error) {
        console.error("❌ MongoDB ERROR:", error.message);
    }
    };

module.exports = connectDB;