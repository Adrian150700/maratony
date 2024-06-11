const express = require('express');
const router = express.Router();
const trasaController = require('../controllers/TrasaController');

router.post('/', trasaController.createTrasa);
router.get('/', trasaController.getTrasy);
router.get('/:id', trasaController.getTrasa);
router.put('/:id', trasaController.updateTrasa);
router.delete('/:id', trasaController.deleteTrasa);

module.exports = router;
