// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors = require('cors');
app.use(Cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const Server = app.listen(port , run);

function run() {
    console.log(`hello there :D`);
    console.log(`here is ${port} ready to go`);
}
//GET method
app.get('/all', function(req,res){
    res.send(projectData)
    console.log(projectData);
})
//POST method
app.post("/addUserComment", function(req,res){
    projectData = {
        temp : req.body.temp,
        date : req.body.date,
        feeling : req.body.feeling,
    }
    console.log(projectData);
    res.send(projectData);
})





