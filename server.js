const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const pageRoute = require('./routes/pageRoute.js')


// environment
dotenv.config();
let PORT = process.env.PORT || 4000;

// init express
const app = express();

// init json and from data
app.use(express.json());
app.use(express.urlencoded({ extended : false }))

    // Static 
    app.use('/public', express.static('public'));

    // router init
    app.use(pageRoute);


// server listen
app.listen(PORT, () => {
    console.log('Server is running on 5050');
})