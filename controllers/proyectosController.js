exports.proyectosHome = (req, res) => { 
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => { 
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = (req, res) => { 
    // Evviar a la consola lo que el usuario escriba
    // console.log(req.body);
    // Validar que tengamos algo en el input
    const { nombre } = req.body;
    
    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un nuevo nombre al Proyecto'})
    }

    // si hay errores
    if(errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    } else {
        // Sin errores - Insertar en la BD
        
    }
}
