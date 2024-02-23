import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRout from './routes/booksRoute.js'
import cors from 'cors'

const app = express()

// middleware for parsing request body
app.use(express.json())


// Middleware for handling cors policy
// option 1: allow all origins with default cors(*)
app.use(cors());
// option 2: allow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("welcome to mern stack")
})


// this is for all routes
app.use('/books', booksRout)


mongoose.connect(mongoDBURL)
.then(() => {
    console.log("app connected to database")
    app.listen(PORT, () => {
        console.log(`app islistening to port: ${PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})