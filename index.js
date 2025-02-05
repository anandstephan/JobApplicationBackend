const connectDB = require("./config/db")
const express = require('express')

const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const app = express()


connectDB()

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', jobRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))