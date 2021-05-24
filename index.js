const express = require('express');
const routes = require('./routes');
const path = require('path'); // lee el file system
const bodyParser = require('body-parser')

// Crear una app de express
const app = express();

// Carga de archivos estaticos
app.use(express.static('public'));

// habilitar PUG
app.set('view engine', 'pug');

// Vistas
app.set('views', path.join(__dirname, './views'));

//Habilitar bodyParser para lerr datos del formulario
app.use(bodyParser.urlencoded({extended: true}))

/* Rutas */
app.use('/', routes() );

app.listen(3000); // puerto donde escucha

