const db = require("../config/db.config");
const Sequelize = require("sequelize");
exports.index = function (request, response) {
    response.render('main.hbs');
};
exports.about = function (request, response) {
    response.send("О сайте");
};

//Тут как в создании пользователя. Собираем всё. что нужно
exports.request = function (request, response) {
    const name = request.body.name;
    const phone = request.body.phone;
    const email = request.body.email;
    const table = request.body.table;
    const content = request.body.content;
    db.request.create({
        visitor_name: name,
        phone: phone,
        email: email,
        table: table,
        content: content
    }).then(res=>{
        const resuest = {id: res.id, name: res.visitor_name, phone: res.phone, email: res.email, table_number: res.table_number, content: res.content}
        console.log(resuest);
    }).catch(err=>console.log(err));
}

exports.getAllRequest = function (request, response) {
    db.request.findAll({raw:true}).then(data => {
        response.render('requests.hbs', {
            requests: data //Обратите внимание, что requests параметр должен называться так же как во views/requests.hbs в 12 строке
        });
    }).catch(err=>console.log(err));
}