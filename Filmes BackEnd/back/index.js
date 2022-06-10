require('./db/conn');
const express = require('express')
const flash = require('express-flash')

// Express
const app = express()

// DB
const conn = require('./db/conn')

// Models
const Film = require('./models/Film');

// Controllers
const FilmController = require("./controllers/FilmController")

// Routes
const filmRoutes = require('./routes/filmRoutes')

const cors = require("cors");


// ----------------------------------------------
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// ---------------------------------------------

app.use(cors());

app.use(flash())

// Routes
app.use('/filmes', filmRoutes)
app.listen(3000)
// conn.sync().then(() => {
//     app.listen(3000)
// }).catch((err) => console.log(err))

// Resetar tabela (Limpeza)
// conn.sync({force: true}).then(()=> {
//     app.listen(3000)
// }).catch((err) => console.log(err))