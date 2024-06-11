const express = require('express');
const router = express.Router();
const platnoscController = require('../controllers/PlatnoscController');

router.post('/', platnoscController.createPlatnosc);
router.get('/', platnoscController.getPlatnosci);
router.get('/:id', platnoscController.getPlatnosc);
router.put('/:id', platnoscController.updatePlatnosc);
router.delete('/:id', platnoscController.deletePlatnosc);

module.exports = router;
