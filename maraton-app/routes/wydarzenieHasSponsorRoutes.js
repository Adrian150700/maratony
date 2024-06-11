const express = require('express');
const router = express.Router();
const wydarzenieHasSponsorController = require('../controllers/WydarzenieHasSponsorController');

router.post('/', wydarzenieHasSponsorController.createWydarzenieHasSponsor);
router.get('/', wydarzenieHasSponsorController.getWydarzenieHasSponsorzy);
router.get('/:Wydarzenie_id_wydarzenie/:Sponsor_id_sponsor', wydarzenieHasSponsorController.getWydarzenieHasSponsor);
router.put('/:Wydarzenie_id_wydarzenie/:Sponsor_id_sponsor', wydarzenieHasSponsorController.updateWydarzenieHasSponsor);
router.delete('/:Wydarzenie_id_wydarzenie/:Sponsor_id_sponsor', wydarzenieHasSponsorController.deleteWydarzenieHasSponsor);

module.exports = router;
