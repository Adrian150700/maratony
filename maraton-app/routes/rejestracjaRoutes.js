const express = require('express');
const router = express.Router();
const rejestracjaController = require('../controllers/RejestracjaController');

router.post('/', rejestracjaController.createRejestracja);
router.get('/', rejestracjaController.getRejestracje);
router.get('/:id', rejestracjaController.getRejestracja);
router.put('/:id', rejestracjaController.updateRejestracja);
router.delete('/:id', rejestracjaController.deleteRejestracja);

module.exports = router;
