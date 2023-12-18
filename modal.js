const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheema = new Schema({
    id:String,
    name:String
});

const User = mongoose.model('User',userScheema);

module.exports = User;