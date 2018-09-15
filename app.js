const express = require('express')
const bodyParser = require('body-parser')
const database = require('./config/database')
const booksRouter = require('./src/routers/books');
const port = 3000
const app = express();


app.use(bodyParser.json());
app.use('/', booksRouter);

database.connect()
    .then(() => app.listen(port, () => console.log(`Ta rodando aqui ó: ${port}`)))
    .catch(err =>{
        console.error(err)
        process.exit(1)
    })