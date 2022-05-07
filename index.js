"use-strict"
import express from "express";

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'
dotenv.config();

import sequelize from "./utilites/db-config.js";
import Users from './db/models/users.js'
import Executors from './db/models/executors.js'
import Clients from './db/models/clients.js'
import Orders from './db/models/orders.js'
import Roles from './db/models/roles.js'
import Articles from './db/models/articles.js';
import PhoneNumbersClients from './db/models/phone_numbers_clients.js'
import PhoneNumbersExecutors from './db/models/phone_numbers_executors.js'
import AddressesClients from './db/models/addresses-clients.js'
import AddressesExecutors from './db/models/addresses_executors.js'

Executors.hasMany(Orders, {
});
Executors.hasMany(AddressesExecutors, {
});
Executors.hasMany(PhoneNumbersExecutors, {
});
Clients.hasMany(Orders, {
});
Clients.hasMany(AddressesClients, {
});
Clients.hasMany(PhoneNumbersClients, {
});
Users.hasMany(Roles, {
});



sequelize.sync({ force: true, match: /just_cleaning$/, alter: true }).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err);
})

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