console.log("internal calling");

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '80221474';

var mysql = require('mysql2');
    
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "80221474",
      insecureAuth : true
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });