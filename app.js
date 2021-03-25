
const routes = require('./routes/routes');
//Require packages and set the port
const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3003;
const app = express();

//Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


// app.get('/', (request,reponse) =>{
//     response.send({
//         message: 'Node.js and Express REST API'}
//     );
// });

routes(app);


//Start the server
const server = app.listen(port, (error) => {
    if(error) return console.log(`Error:${error}`);

    console.log(`Server listening on port ${server.address().port}`);
}
);

