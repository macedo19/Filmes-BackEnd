

/**
 * |========================================|
 * CONEXÃO COM MYSQL
 *  |========================================|
 */

// // Require do Sequelize
// const {Sequelize} = require ('sequelize')

// // CONEXÃO COM O BANCO (banco, username, senha, host, dialeto é a linguagem)
// const sequelize = new Sequelize('projectfilmes', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// })

// try{
//     // Autenticar no banco a conexão
//     sequelize.authenticate()
//     console.log('Conexão com sucesso!!')
// }catch(erro){
//     // Caso ocorra erro apresenta o erro
//     console.log(erro)
// }

// Exportando o modulo para ser usado dentro do sistema
// module.exports = sequelize



/**
 *====================================================
 * CONEXÃO COM O MONGOOSE
 * ===================================================
 */

 const mongoose = require('mongoose')

 const URL = 'mongodb://localhost:27017/filmesback';

 const db = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  
  const con = mongoose.connection;
  
  con.on('open', function(){
    console.log('Conectado ao MongoDB!');
  });
  
  con.on('error', function(error){
    console.log('Erro na conexão com o MongoDB!' + error );
  });
  
  con.on('close', function(){
    console.log('Desconetado do MongoDB!');
  });
  
  module.exports = db;



/**
 *====================================================
 * CONEXÃO COM O MONGODB
 *===================================================
 */

// const {MongoClient} = require('mongodb')

// // Criar a conexão no momento que conectar
// const uri = "mongodb://localhost:27017/filmesback"

// const db = new MongoClient(uri)

// async function run(){
//     try{
//         await db.connect()
//         console.log("Conectou ao banco")
//     }catch(error){
//         console.log(error)
//     }
// }

// run()

// module.exports = db