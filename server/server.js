const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./db/connection');
const app = express();
const PORT = process.env.PORT || 3000;
const usersRoute = require('./routes/users.route');

connectDB();

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/users.route');
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});