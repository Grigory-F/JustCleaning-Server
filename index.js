"use-strict"
import express from "express";

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'
dotenv.config();


import fileUpload from 'express-fileupload';
const app = express();
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve('static', "input.txt");


import ApiRouter from './routes/ApiRouter.js'
import AuthRouter from './routes/AuthRouter.js'



app.use('/api', ApiRouter)
app.use('/auth', AuthRouter)


app.use('/', (req, res) => {
    res.send('ssssssssss')
})






const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server worked on ${PORT}\n=====================================================================`);
})