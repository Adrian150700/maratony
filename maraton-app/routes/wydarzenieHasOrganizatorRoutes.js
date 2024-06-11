const express = require('express');
const router = express.Router();
const wydarzenieHasOrganizatorController = require('../controllers/WydarzenieHasOrganizatorController');

router.post('/', wydarzenieHasOrganizatorController.createWydarzenieHasOrganizator);
router.get('/', wydarzenieHasOrganizatorController.getWydarzenieHasOrganizatorzy);
router.get('/:Wydarzenie_id_wydarzenie/:Organizator_id_organizator', wydarzenieHasOrganizatorController.getWydarzenieHasOrganizator);
router.put('/:Wydarzenie_id_wydarzenie/:Organizator_id_organizator', wydarzenieHasOrganizatorController.updateWydarzenieHasOrganizator);
router.delete('/:Wydarzenie_id_wydarzenie/:Organizator_id_organizator', wydarzenieHasOrganizatorController.deleteWydarzenieHasOrganizator);

module.exports = router;
