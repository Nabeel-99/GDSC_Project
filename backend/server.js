import express from "express"
import * as dotenv from 'dotenv'
import cors from "cors"
import mongoose from "mongoose"

dotenv.config()
const app = express();

app.use(cors())
app.use(express.json())

// connect mongoDB PORT
mongoose.connect(process.env.mongo).then(() => {
    console.log("MongoDB Connected Successfully")
    app.listen(process.env.PORT, () => {
        console.log(`Server connected successfully: ${process.env.PORT}`)
    })
}).catch((err) => {
    console.log(err)
})

// Test server route
app.get('/', (req, res) => {
    res.status(201).send('Server is running successfully!')
})

