// routes/adresRoutes.js
const express = require('express');
const router = express.Router();
const adresController = require('../controllers/AdresController');

router.post('/', adresController.createAdres);
router.get('/', adresController.getAdresy);
router.get('/:id', adresController.getAdres);
router.put('/:id', adresController.updateAdres);
router.delete('/:id', adresController.deleteAdres);

module.exports = router;
