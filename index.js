"use-strict"
import express from "express";
import router from './router.js'
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs'

import fileUpload from 'express-fileupload';
const app = express();
import dotenv from 'dotenv'
dotenv.config();
app.use(express.static('static'))
app.use(fileUpload({}))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve('static', "input.txt");

app.use(express.json())
app.use('/api', router)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server worked on ${PORT}\n=====================================================================`);
})