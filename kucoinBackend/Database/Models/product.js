const mongoose = require('mongoose');

const Products = mongoose.Schema({
    name:{
        type:String,
    },
    BTC:{
        type:String,
    },
    company:{
        type:String,
        required:true
    },
    shortName:{
        type:String,
    },
    lastPrice:{
        type:Number,
    
    },
    totalPercentage:{
        type:Number,

    },
    changePercentage:{
        type:Number,
    
    }
    
})
module.exports =  mongoose.model('products',Products);