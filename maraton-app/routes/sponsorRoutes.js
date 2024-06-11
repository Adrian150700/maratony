const express = require('express');
const router = express.Router();
const sponsorController = require('../controllers/SponsorController');

router.post('/', sponsorController.createSponsor);
router.get('/', sponsorController.getSponsorzy);
router.get('/:id', sponsorController.getSponsor);
router.put('/:id', sponsorController.updateSponsor);
router.delete('/:id', sponsorController.deleteSponsor);

module.exports = router;
