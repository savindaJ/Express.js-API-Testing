const app = require('./app');
const router = require('./router');

const server = app.listen(3001,'127.0.0.1',()=>{
    console.log('listening to server !');
});
// set context !
app.use('/api',router);