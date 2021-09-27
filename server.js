
const express = require('express');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const profile = require('./controllers/profile');
const add = require('./controllers/add');


//Connect to DataBase--------------------------------------------------------------------------------------------------------------
const Db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'atsep',
    password : 'atsep',
    database : 'atsepldb'
  }
});

const app = express();
app.use(bodyParser.json()); 
app.use(cors());

//----Home--------------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {res.json('its Working !!!!');})

//----Profile--------------------------------------------------------------------------------------------------------------
app.get('/registre', (req, res) => { profile.handleprofile(req, res, Db); });

//----Register--------------------------------------------------------------------------------------------------------------
app.post('/add', (req, res) => { add.handleadd(req, res, Db) });

//Launch server--------------------------------------------------------------------------------------------------------------
const port = process.env.PORT;
app.listen(port || 3002, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})

//---------------------------------------------------------------------------------------------------------------------------