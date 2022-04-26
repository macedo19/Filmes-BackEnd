const express = require('express')
const router = express.Router()
const FilmController = require('../controllers/FilmController')

router.get('/list', FilmController.getAllFilms)
router.get('/getid/:id', FilmController.getByIdFilms)
router.post('/cadastrar', FilmController.createFilmsSave)
router.post('/update', FilmController.updateFilmsSave)

module.exports = router