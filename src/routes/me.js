const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/course', meController.storedCourse);
router.get('/trashed/course', meController.trashedCourse);

module.exports = router;
