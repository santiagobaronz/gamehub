/***************************************************************
 *                     Dependencies 
***************************************************************/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

/***************************************************************
*                     Router y EJS 
***************************************************************/

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home')
})

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));