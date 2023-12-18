console.log("internal calling");

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '80221474';

var mysql = require('mysql2');
    
    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "80221474",
      insecureAuth : true,
        database:"thogakade"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    module.exports = con;