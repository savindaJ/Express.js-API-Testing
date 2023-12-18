const express = require('express');
const app = express();
const cors = require('cors');

// unlock resource shereing 
app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

// convertinf json obj or json array
app.use(express.json());

module.exports = app;