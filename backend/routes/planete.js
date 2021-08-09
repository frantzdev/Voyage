const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const controllerPlanete = require('../controllers/planete');

router.post('/planete', multer, controllerPlanete.postPlanete);
router.get('/:id', controllerPlanete.getPlanete);
router.get('/', controllerPlanete.getAllPlanete);

module.exports = router;

