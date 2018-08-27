//Setting up Express app to handle requests

const express = require("express");
const app = express();
const userRoutes = require('./api/routes/user');  //Requests are forwarded to this file if the target URL is '/user'
const bodyParser = require('body-parser');

//Extracts JSON data and makes it easily readable
app.use(bodyParser.json());                        

//Adjusts response to Client (CORS errors)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/user', userRoutes);

//Handles a route which couldnt be found
app.use((req, res, next) => {                     
    const error = new Error('Not found');
    error.status = 404;
    next(error);                                  //Forwards the error request
})

//Handles errors thrown from anywhere in the app
app.use((error, req, res, next) => {            
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})

module.exports = app;