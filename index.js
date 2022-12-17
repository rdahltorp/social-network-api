const express = require('express');
const db = require('./config/conection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

//Boiler plate for express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Create connection 
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});