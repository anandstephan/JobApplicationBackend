const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Application Routes
router.post('/', applicationController.createApplication); 
router.get('/', applicationController.getAllApplications); 
router.get('/:id', applicationController.getApplicationById);
router.get('/job/:jobId', applicationController.getApplicationsByJob);
router.get('/user/:userId', applicationController.getApplicationsByUser); 
router.put('/:id/status', applicationController.updateApplicationStatus); 
router.delete('/:id', applicationController.deleteApplication); 

module.exports = router;
