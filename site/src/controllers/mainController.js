const chalk = require("chalk");

const path = require('path');

module.exports = {
    index: function (req, res){
        let algo = {titulo: 'pagina principal', texto: 'sarasa, y mas sarasa'};
        return res.render('index', {algo})
    }
}