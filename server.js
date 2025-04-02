'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const bcrypt = require('bcrypt');

const app = express();
fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';

//START_SYNC
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log("Hash generado (sync):", hash);

const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log("¿Las contraseñas coinciden? (sync):", result);
//END_SYNC

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});

