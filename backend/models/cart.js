const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    
    products: [{
        any: {}
    }]
});

const cart = mongoose.model('cart', cartSchema);

module.exports = cart;