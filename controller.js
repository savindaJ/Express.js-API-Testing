const User = require('./modal')
const connection = require('./connection');

const getUsers = (req, res, next) => {
    const insertQuery = "SELECT * FROM customer";

    connection.query(insertQuery, function (err, result) {
        if (err) res.json(err.code);
        res.json(result);
    });
};

const addUser = (req, res, next) => {

    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const salary = req.body.salary;

    console.log(id,name,address,salary);

    const insertQuery = "INSERT INTO customer (customerId, Name, address, salary) VALUES (?, ?, ?, ?)";
    const values = [id,name,address,parseFloat(salary)];

    connection.query(insertQuery, values, function (err, result) {
        if (err) res.json(err.code);
        console.log("Number of records inserted: " + result.affectedRows);
        res.json({massage:'ok'});
    });
}

const updateUser = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const salary = req.body.salary;

    const updateQuery = "UPDATE customer SET Name=? ,address=?, salary=? WHERE customerId=?";
    const values = [name,address,parseFloat(salary),id];
    connection.query(updateQuery, values, function (err, result) {
        if (err) res.json(err.code);
        console.log("Number of records updated !: " + result.affectedRows);
        res.json({massage:'ok'});
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