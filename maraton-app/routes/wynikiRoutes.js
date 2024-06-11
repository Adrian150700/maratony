const express = require('express');
const router = express.Router();
const wynikiController = require('../controllers/WynikiController');

router.post('/', wynikiController.createWynik);
router.get('/', wynikiController.getWyniki);
router.get('/:id', wynikiController.getWynik);
router.put('/:id', wynikiController.updateWynik);
router.delete('/:id', wynikiController.deleteWynik);

module.exports = router;
