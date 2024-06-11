const express = require('express');
const router = express.Router();
const wydarzenieController = require('../controllers/WydarzenieController');

router.post('/', wydarzenieController.createWydarzenie);
router.get('/', wydarzenieController.getWydarzenia);
router.get('/:id', wydarzenieController.getWydarzenie);
router.put('/:id', wydarzenieController.updateWydarzenie);
router.delete('/:id', wydarzenieController.deleteWydarzenie);

module.exports = router;
