
const express = require('express');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const profile = require('./controllers/profile');


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

Db.select('*').from('data').where({ id: 1 }).then(data => {
	//console.log(data);
});


const app = express();
app.use(bodyParser.json());
app.use(cors());
//----Home--------------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {res.json('its Working !!!!');})

//----Profile--------------------------------------------------------------------------------------------------------------
app.get('/profile/:id', (req, res) => { 
	console.log(req.params);
	profile.handleprofile(req, res, Db);
	//console.log(res);


} );



//Launch server--------------------------------------------------------------------------------------------------------------
const port = process.env.PORT;
app.listen(port || 3001, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})

//---------------------------------------------------------------------------------------------------------------------------