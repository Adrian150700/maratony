const express = require('express');
const router = express.Router();
const użytkownikController = require('../controllers/UżytkownikController');

router.post('/', użytkownikController.createUżytkownik);
router.get('/', użytkownikController.getUżytkownicy);
router.get('/:id', użytkownikController.getUżytkownik);
router.put('/:id', użytkownikController.updateUżytkownik);
router.delete('/:id', użytkownikController.deleteUżytkownik);

module.exports = router;
