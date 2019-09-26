import MainController from "../controller/MainController";
const express = require('express');
const fubarRouter = express.Router();

fubarRouter.get('/person', (req, res) =>{
    let request = 'val2';
    let data = MainController.getValue(request);
    console.log('This is my data ', data);
    res.send('Person is working: ');

});
fubarRouter.get('/facility', (req, res) =>{
    res.send('Facility is working');
});
fubarRouter.get('/exposure', (req, res) =>{
    res.send('Exposure is working');
});

module.exports = fubarRouter;