const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String},
    favorites: {type: Array}
});

module.exports = mongoose.model('users', User);