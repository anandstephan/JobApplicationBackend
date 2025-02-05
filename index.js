const connectDB = require("./config/db")

const express = require('express')
const app = express()


connectDB()

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))