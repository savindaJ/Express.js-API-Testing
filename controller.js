const users = [{id:'U001',name:'kamal'},{
    id:'U002',
    name:'savinda'
}];

const getUsers = (cd)=>{
    cd(users)
};

const getUserById = (id,cd)=>{
    const usr = users.find(usr=> usr.id==id);
    cd(usr);
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;   