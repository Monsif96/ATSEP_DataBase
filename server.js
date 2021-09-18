const express = require('express');
//const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt-nodejs');
//const cors = require('cors');
const knex = require('knex');

const profile = require('./controllers/profile');


//Connect to DataBase--------------------------------------------------------------------------------------------------------------
const Db = knex({
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    }
});

const app = express();

//----Home--------------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {res.json('its Working !!!!');})

//----Profile--------------------------------------------------------------------------------------------------------------
app.get('/profile/:id', (req, res) => { profile.handleprofile(req, res, Db)} )



//Launch server--------------------------------------------------------------------------------------------------------------
const port = process.env.PORT;
app.listen(port || 444, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})

//---------------------------------------------------------------------------------------------------------------------------