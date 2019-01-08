const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

const mongodbErrorHandler = require('mongoose-mongodb-errors');
mongoose.plugin(mongodbErrorHandler);

mongoose.connect("mongodb://kucoin:manibai197@ds261460.mlab.com:61460/kucoin")
// mongoose.connect("mongodb://127.0.0.1:27017")