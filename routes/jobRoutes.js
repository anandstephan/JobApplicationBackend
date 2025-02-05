const express = require('express');
const jobController = require('../controllers/jobController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/jobs', auth, jobController.postJob);
router.get('/jobs', jobController.getAllJobs);

module.exports = router;