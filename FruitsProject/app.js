const mongoose = require('mongoose');

const mongoUri = ('mongodb://localhost:27017/fruitDB', {useNewUrlParser: true});

async function connectToMongo() {
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
        // Continue with your application logic that requires the MongoDB connection
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
}

connectToMongo();












