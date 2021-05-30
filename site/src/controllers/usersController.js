const chalk = require('chalk');

const path = require('path');

module.exports = {
    listUsers: function(req, res){
        let users = {nombre: 'Bond... James Bond'};
        return res.render('users/listUsers', {users});
    }
}
