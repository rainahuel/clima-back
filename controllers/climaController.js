

const Pais = require('../models/pais');

exports.guardarCordenadas = (req, res) => {
    let pais = new Pais(req.body);
    mensaje.save((err, paisDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: "error al guardar coordenadas"
            })
        }
        res.status(201).json({
            ok: true,
            message: "coordenadas guardadas con exito!"
        })
    }) 
} 