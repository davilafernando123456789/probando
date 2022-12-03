var express = require('express');
var router = express.Router();

var medico = require('../controllers/MedicoController.js');

router.get('/', medico.list);
router.get('/show/:id', medico.show);
router.get('/create', medico.create);
router.post('/save', medico.save);
router.get('/edit/:id', medico.edit);
router.post('/update/:id', medico.update);
router.post('/delete/:id', medico.delete);

module.exports = router;
