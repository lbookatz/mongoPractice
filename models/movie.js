const mongoose = require('mongoose');

const Movie = new mongoose.Schema({
    name: {type: String, required: true},
    genra: {type: String, required: true}
});

module.exports = mongoose.model('movies', Movie);