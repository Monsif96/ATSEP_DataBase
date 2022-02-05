
const express = require('express');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const profile = require('./controllers/profile');
const get = require('./controllers/get');
const add = require('./controllers/add');
const update = require('./controllers/Update');


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

//----Get--------------------------------------------------------------------------------------------------------------
app.get('/get/:id', (req, res) => { get.handle(req, res, Db); });

//----Add-To-DB--------------------------------------------------------------------------------------------------------------
app.post('/add', (req, res) => { add.handleadd(req, res, Db) });

//----Update-DB--------------------------------------------------------------------------------------------------------------
app.post('/update', (req, res) => { update.handleupdate(req, res, Db) });

//Launch server--------------------------------------------------------------------------------------------------------------
const port = process.env.PORT;
app.listen(port || 3002, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})

//---------------------------------------------------------------------------------------------------------------------------