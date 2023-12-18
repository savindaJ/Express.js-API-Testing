const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller')

// unlock resource shereing 
app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

// convertinf json obj or json array
app.use(express.json());

app.get('/users',(req,res)=>{
    controller.getUsers(users=>{
        res.send(users);
    })
});

app.get('/user',(req,res)=>{
    const usrId = req.query.id;
    controller.getUserById(usrId,user=>{
        res.send(user);
    })
});

module.exports = app;