const express = require('express');
const router = express.Router();

// Controladores
const proyectosController = require('../controllers/proyectosController')

module.exports = function() {
    // Home -- // .USE() lee todos los verbos de HTML 
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);

    return router;
}