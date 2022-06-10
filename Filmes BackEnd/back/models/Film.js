/**
 * =======================================
 * SEQUELIZE => MYSQL
 * ===================================
 */

// const {DataTypes} = require('sequelize')

// const db = require('../db/conn')

// const Film = db.define('Film', {
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false, // Não aceita valores Null
//         require: true
//     },
//     url: {
//         type: DataTypes.STRING,
//         allowNull: false, // Não aceita valores Null
//         require: true
//     },
//     genero: {
//         type: DataTypes.STRING,
//         allowNull: false, // Não aceita valores Null
//         require: true
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false, // Não aceita valores Null
//         require: true
//     }
// })

// module.exports = Film;


/**
 * =======================================
 * MONGOOSE
 * ===================================
 */

const mongoose = require ('mongoose')

const filmsSchema = require('../schema/filmsSchema')
module.exports = mongoose.model('filmes', filmsSchema)
