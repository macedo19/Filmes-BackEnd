const mongoose = require('mongoose')

const filmsSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Titulo é obrigatório!"]},
    url: {type: String, required: [true, "Url é obrigatório!"]},
    genero: String,
    description: String

});

module.exports = filmsSchema;