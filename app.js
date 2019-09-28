//package imports
const express = require ('express');
import bodyParser from 'body-parser'
//variables
const app = express();
const routes = require('./routes/FubarRoutes');

//json body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middleware
app.use('/', routes);

//Listening to server
app.listen(3000);