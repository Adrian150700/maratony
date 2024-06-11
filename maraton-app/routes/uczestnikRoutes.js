const express = require('express');
const router = express.Router();
const uczestnikController = require('../controllers/UczestnikController');

router.post('/', uczestnikController.createUczestnik);
router.get('/', uczestnikController.getUczestnicy);
router.get('/:id', uczestnikController.getUczestnik);
router.put('/:id', uczestnikController.updateUczestnik);
router.delete('/:id', uczestnikController.deleteUczestnik);

module.exports = router;
