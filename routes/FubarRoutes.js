import MainController from "../controller/MainController";
import Validation from "../helpers/Validators";
const express = require('express');
const fubarRouter = express.Router();

fubarRouter.get('/person/:input', (req, res, next) =>{
    let parameter = req.params.input;
    let response = MainController.isAuthenticated(parameter);
    res.send(response);

});
fubarRouter.get('/facility/:input', (req, res) =>{
    let parameter = req.params.input;
    let response = MainController. getFacilityEndpoint(parameter);
    res.send(response);
});
fubarRouter.get('/exposure/:input', (req, res) =>{
    let parameter = req.params.input;
    let response = MainController.getExposureEndpoint(parameter);
    res.send(response);
});

module.exports = fubarRouter;