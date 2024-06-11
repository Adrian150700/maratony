const express = require('express');
const router = express.Router();
const trasaHasPunktKontrolnyController = require('../controllers/TrasaHasPunktKontrolnyController');

router.post('/', trasaHasPunktKontrolnyController.createTrasaHasPunktKontrolny);
router.get('/', trasaHasPunktKontrolnyController.getTrasyHasPunktKontrolny);
router.get('/:Trasa_id_trasa/:Punkt_kontrolny_id_punkt', trasaHasPunktKontrolnyController.getTrasaHasPunktKontrolny);
router.put('/:Trasa_id_trasa/:Punkt_kontrolny_id_punkt', trasaHasPunktKontrolnyController.updateTrasaHasPunktKontrolny);
router.delete('/:Trasa_id_trasa/:Punkt_kontrolny_id_punkt', trasaHasPunktKontrolnyController.deleteTrasaHasPunktKontrolny);

module.exports = router;
