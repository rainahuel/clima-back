const router = require('express').Router()
const climaController = require('../controllers/climaController')

module.exports = () => {

    
    router.post('/cordenadas', climaController.guardarCordenadas);

    return router;

}