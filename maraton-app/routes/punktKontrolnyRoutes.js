const express = require('express');
const router = express.Router();
const punktKontrolnyController = require('../controllers/PunktKontrolnyController');

router.post('/', punktKontrolnyController.createPunktKontrolny);
router.get('/', punktKontrolnyController.getPunktyKontrolne);
router.get('/:id', punktKontrolnyController.getPunktKontrolny);
router.put('/:id', punktKontrolnyController.updatePunktKontrolny);
router.delete('/:id', punktKontrolnyController.deletePunktKontrolny);

module.exports = router;
