const express = require('express');

const app = express();

//----Home--------------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {res.json('its Working !!!!');})




//Launch server--------------------------------------------------------------------------------------------------------------
const port = process.env.PORT;
app.listen(port || 444, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})

//---------------------------------------------------------------------------------------------------------------------------