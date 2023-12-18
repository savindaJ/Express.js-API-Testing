const app = require('./app');
const router = require('./router');

/*var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "80221474",
    insecureAuth : true
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});*/
const server = app.listen(3001,'127.0.0.1',()=>{
    console.log('listening to server !');
});

app.use('/api',router);