const chalk = require('chalk');

const path = require('path');

module.exports = {
    listProducts: function(req,res){
        let products= {nombre:'nombre del producto', tipo:'tipo de producto', dato:'dato del producto'};
        return res.render('products/listProducts', {products});
    }
}