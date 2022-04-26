const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Film = db.define('Film', {
    title: {
        type: DataTypes.STRING,
        allowNull: false, // Não aceita valores Null
        require: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false, // Não aceita valores Null
        require: true
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false, // Não aceita valores Null
        require: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false, // Não aceita valores Null
        require: true
    }
})

module.exports = Film;