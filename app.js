//  All dependencies imported here
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const routes = require('./routes/routes');

// Setting View Engine
app.engine('hbs',hbs({
    defaultLayout: 'layouts',
    extname: '.hbs'
}))
app.set('view engine', 'hbs');

// Routes Connected Here
app.use(routes);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static Files are server here
app.use(express.static('public'));

// Server and Database connection
app.listen(port,(err)=>{
    if(!err){
        console.log("Server located at \n");
        console.log(port);
    }else{
        console.log(err)
    }
})

