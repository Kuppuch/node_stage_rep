const db = require('../config/db.config')

exports.addUser = function (request, response){
    response.render('create.hbs'); // Поменялось тут
};
exports.getUsers = function(request, response){
    db.user.findAll({raw:true}).then(data => {
        response.render('users.hbs', {
            users: data //Обратите внимание, что users параметр должен называться так же как во views/users.hbs в 12 строке
        });
    }).catch(err=>console.log(err));
    // response.render('users.hbs', { // Поменялось тут
    //     users: db.user.findAll({raw:true}).then(users=>{
    //         console.log(users);
    //     }).catch(err=>console.log(err))
    // });
};

// А это вообще добавилось
exports.postUser= function(request, response){
    const name = request.body.name;
    const birthday = request.body.birthday;
    const email = request.body.email;
    const roleId = 2;
    db.user.create({
        name: name,
        birthday: birthday,
        email: email,
        roleId: roleId
    }).then(res=>{
        const user = {id: res.id, name: res.name, age: res.birthday, email: res.email}
        console.log(user);
    }).catch(err=>console.log(err));
    response.redirect("/user");
};