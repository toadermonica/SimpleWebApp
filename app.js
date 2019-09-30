//package imports
import express from 'express'
import bodyParser from 'body-parser'
import serviceAPI from "./services/APIService";
import Validators from './backend/helpers/Validators';
//variables
const app = express();
const appFrontend = express();
const routes = require('./backend/routes/FubarRoutes');
//json body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
appFrontend.use(bodyParser.urlencoded({ extended: false }));
appFrontend.use(bodyParser.json());
appFrontend.set('view engine', 'ejs');
//static files middleware
appFrontend.use('/assets', express.static('assets'));

//middleware
app.use('/', routes);
appFrontend.get('/', function(req, res){
   serviceAPI.getCallResult().then(result =>{
      return res.render('index',{values: result, error:''});
   }).catch(error =>{
      return res.render('index', {error: error, values:''});
   });
});
appFrontend.post('/userValues', function(req, res){
   const userValue = req.body.userval;
   if(Validators.isEmpty(userValue)){
      return res.render('values',{values: "", error: 'Field is empty, please provide information'})
   }
   if(!Validators.isValid(userValue)){
      return res.render('values', {values: "", error: 'Please use a valid input'});
   }
   serviceAPI.getCallResult().then(result =>{
      return res.render('values',{values: result, error:''});
   }).catch(error =>{
      return res.render('values',{values: "", error: error});
   });
});

//Backend server
app.listen(3000);
//Client server
appFrontend.listen(8000);