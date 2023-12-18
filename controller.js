const User = require('./modal')
const connection = require('./connection');

const getUsers = (req, res, next) => {
    /*const insertQuery = "INSERT INTO customer (cusid, name, address, salary) VALUES (?, ?, ?, ?)";
    const values = ['C0020', 'Alice Johnson', '987 Elm St', 80000.00];

    connection.query(insertQuery, values, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });*/
    console.log("get called !")
};

const addUser = (req, res, next) => {
    /*var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "80221474",
        insecureAuth: true,
        database: "thogakade"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });*/
    const insertQuery = "INSERT INTO customer (customerId, Name, address, salary) VALUES (?, ?, ?, ?)";
    const values = ['C0022', 'express sina', '987 dubai St', 40000.00];

    connection.query(insertQuery, values, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        res.json({massage:'ok'});
    });
}

const updateUser = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;

    User.updateOne({id: id}, {$set: {name: name}}).then(responce => {
        res.json({responce})
    }).catch(err => {
        res.json({massage: err})
    });
}

const deleteUser = (req, res, next) => {
    const id = req.body.id;

    User.deleteOne({
        id: id
    }).then(responce => {
        res.json({responce})
    }).catch(err => {
        res.json({massage: err})
    });
}
exports.getUsers = getUsers;
exports.deleteUser = deleteUser;
exports.addUser = addUser;
exports.updateUser = updateUser;   