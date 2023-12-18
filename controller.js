const User = require('./modal')

const getUsers = (req,res,next)=>{
    User.find().then(responce=>{
        res.json({responce})
    }).catch(err=>{
        res.json({massage:err})
    })
};

const addUser = (req,res,next)=>{
    const user = new User({
        id:req.body.id,
        name:req.body.name
    });

    user.save().then(responce=>{
        res.json({responce})
    }).catch(err=>{
        res.json({massage:err})
    })
}

const updateUser = (req,res,next)=>{
    const id = req.body.id;
    const name = req.body.name; 

    User.updateOne({id:id},{$set:{name:name}}).then(responce=>{
        res.json({responce})
    }).catch(err=>{
        res.json({massage:err})
    });
}

const deleteUser = (req,res,next)=>{
    const id = req.body.id;

    User.deleteOne({
        id:id
    }).then(responce=>{
        res.json({responce})
    }).catch(err=>{
        res.json({massage:err})
    });
}
exports.getUsers = getUsers;
exports.deleteUser = deleteUser;
exports.addUser = addUser;
exports.updateUser = updateUser;   