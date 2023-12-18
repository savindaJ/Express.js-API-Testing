const app = require('./app');
const mongoose = require('mongoose');

const router = require('./router');

const uri = 'mongodb+srv://savinda:80221474@cluster0.ywjuznk.mongodb.net/?retryWrites=true&w=majority';

/*const connect = async()=>{
    try{
        await mongoose.connect(uri)
        console.log("connect !")
    }
    catch(err){
        console.log("not connect !",err)
    }
}

// connect();*/

const server = app.listen(3001,'127.0.0.1',()=>{
    console.log('lisning to server !');
});

app.use('/api',router);