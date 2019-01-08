global.fetch = require('node-fetch')
const cc = require('cryptocompare')

// Usage:
cc.priceFull(['BTC', 'ETH'], 'PKR')
    .then(coinList => {

        var arr = [];

        for (var key in coinList) {
            arr.push(coinList[key]);
        }

        console.log(arr)
    })
    .catch(console.error)

module.exports = cc;