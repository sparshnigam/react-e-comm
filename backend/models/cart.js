const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    _id:{
        type:String,
    },
});

const cart = mongoose.model('cart', cartSchema);

module.exports = cart;