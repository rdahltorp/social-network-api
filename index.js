const express = require('express');
const db = require('./config/conection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = 3001;
const app = express();

//Boiler plate for express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PROT, () => {
        console.log(`API server for ${activity} running on port ${PORT}!`);
    });
});