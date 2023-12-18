const User = require('./modal')
const connection = require('./connection');

const getUsers = (req, res, next) => {
    const insertQuery = "SELECT * FROM customer";
    // const values = ['C0020', 'Alice Johnson', '987 Elm St', 80000.00];

    connection.query(insertQuery, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
    console.log("get called !")
};

const addUser = (req, res, next) => {

    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const salary = req.body.salary;

    console.log(id,name,address,salary);

    res.json({massage:'ok'});

   /* const insertQuery = "INSERT INTO customer (customerId, Name, address, salary) VALUES (?, ?, ?, ?)";
    const values = ['C0022', 'express sina', '987 dubai St', 40000.00];

    connection.query(insertQuery, values, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        res.json({massage:'ok'});
    });*/
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