const Film = require('../models/Film')

const { Op } = require('sequelize')


// Include filmes
exports.createFilmsSave = async (req, res) => {

        const {title, url, genero, description} = req.body

        const data = {
            title,
            url,
            genero,
            description
        }

        try{

            const repost = await Film.create(data)
            res.status(201).json(repost)

        }catch(error){
            console.log(error)
        }
        console.log('CHEGOU AQUIIIII LAZARENTO VEIO')

    }

  
// Get Filmesss
exports.getAllFilms = async (req, res, next) => {

    const films = await Film.find({})

    res.status(200).json(films)
}

exports.getByIdFilms = async (req, res, next) => {
    const id = req.params.id;
    const film = await Film.findOne({where : {id : id}})

    console.log(film)
    res.status(200).json(film)
}

//Update Filmes
exports.updateFilmsSave = async (req, res, next) => {
    const id = req.body.id
    const {title, url, genero, description} = req.body

    const data = {
        title,
        url,
        genero,
        description
    }

    const updateFilm = await Film.update(data, {where: {id : id}})
    res.status(200).json(updateFilm)
}

 //Remove filme
 exports.removeFilms = async(req, res) => {
     console.log("deu boa")
    const id = req.body.id
    const filmedeletar = await Film.destroy({where: {id: id}})
    res.status(200).json(filmedeletar)
}