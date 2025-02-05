const connectDB = require("./config/db")
const express = require('express')

const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const companyRoutes = require('./routes/companyRoutes')
const applicationRoutes = require('./routes/applicationRoutes')
const app = express()


connectDB()

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', jobRoutes);
app.use('/company',companyRoutes)
app.use('/application',applicationRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))