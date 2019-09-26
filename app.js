//package imports
const express = require ('express');
//variables
const app = express();
const routes = require('./routes/FubarRoutes');

//middleware
app.use('/', routes);

//Listening to server
app.listen(3000);