const express = require('express');
const router = express.Router();
const organizatorController = require('../controllers/OrganizatorController');

router.post('/', organizatorController.createOrganizator);
router.get('/', organizatorController.getOrganizatorzy);
router.get('/:id', organizatorController.getOrganizator);
router.put('/:id', organizatorController.updateOrganizator);
router.delete('/:id', organizatorController.deleteOrganizator);

module.exports = router;
