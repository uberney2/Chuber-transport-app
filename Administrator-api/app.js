const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const registerServiceRoutes = require('./routes/register-service')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/services', registerServiceRoutes);

sequelize.sync().then(result => {
    // console.log(result);
    app.listen(8080);
}).catch(err => {
    console.log(err);
});

