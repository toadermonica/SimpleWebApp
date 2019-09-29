import MainController from "../controller/MainController";
import Validation from "../helpers/Validators";
const express = require('express');
const fubarRouter = express.Router();

fubarRouter.get('/person/:input', (req, res) =>{
    let parameter = req.params.input;
    let valid = Validation.isValid(parameter);
    if(valid){
        let response = MainController.getEndpoint(parameter);
        res.status(200).send(response);
    }
    res.status(401).end();
});
fubarRouter.get('/facility/:input', (req, res) =>{
    let parameter = req.params.input;
    let response = MainController. getEndpoint(parameter);
    res.status(200).send(response);
});
fubarRouter.get('/exposure/:input', (req, res) =>{
    let parameter = req.params.input;
    let response = MainController.getEndpoint(parameter);
    res.status(200).send(response);
});

module.exports = fubarRouter;