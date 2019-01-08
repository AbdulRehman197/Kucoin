const mongoose = require('mongoose')
const async = require('async')
// const cc = require('../criptoCurrencies/criptocurrencies')

//databasw model 
global.fetch = require('node-fetch')
require('../Database/Models/product')
const Products = mongoose.model('products');
const cc = require('cryptocompare')
//Programmer  isn't who write code, programmer is obe who solve problems

module.exports = {
    getData: (req, res) => {
    
        var data = {
            ETH:'GAMICA',
            NEO:'NEO',
            KCS:'Kucoin Shares',
            TMT:'TRAXIA',
            TFD:'TE-FOOD',
            ZINC:'Zinc',
            CBC:'ChashBit Coin',
            DAG:'Constellation',
            DCC:'Distributed Credit Chain',
            EDR:'Endor Protocol',
            LALA:'LALA World'
        };

    cc.priceFull(['ETH','NEO','KCS','TMT','TFD','ZINC','CBC','DAG','DCC','EDR','LALA','AOA'], 'PKR')
        .then(priceFull => {
            var arr = [];
            for (var key in priceFull) {
                var currency = priceFull[key]['PKR'];
                currency.thumbnail = '/images/currency/'+key+'.png';
                currency.name = data[key];
                arr.push(currency);
            }

            res.json(arr);
        })
    },

    
    // postData: async (req, res) => {

    //     const product = new Products()


    //     // product.name = req.body.name
    //     // product.company = req.body.company
    //     // product.lastPrice = req.body.lastPrice
    //     await product.save();
    //     res.json(product)


    putData: async (req, res) => {



        const product = await Products.findOneAndUpdate({ name: req.body.name }
            , req.body, {
                new: true
            })


        res.json(product)

    }
}
