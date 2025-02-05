const Application = require('../models/Application'); // Import the Application model

// Create a new job application
exports.createApplication = async (req, res) => {
    try {
        const { jobId, userId } = req.body;
        const newApplication = new Application({ jobId, userId });
        await newApplication.save();
        res.status(201).json(newApplication);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//  Get all job applications
exports.getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find()
            .populate('jobId')  // Populate job details
            .populate('userId'); // Populate user details
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Get a single application by ID
exports.getApplicationById = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id)
            .populate('jobId')
            .populate('userId');
        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.json(application);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Get applications by Job ID
exports.getApplicationsByJob = async (req, res) => {
    try {
        const applications = await Application.find({ jobId: req.params.jobId })
            .populate('userId'); // Get user details
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Get applications by User ID (Job Seeker)
exports.getApplicationsByUser = async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.params.userId })
            .populate('jobId'); // Get job details
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Update application status (Accept / Reject)
exports.updateApplicationStatus = async (req, res) => {
    try {
        const { status } = req.body;
        if (!['pending', 'accepted', 'rejected'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status value' });
        }

        const application = await Application.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//  Delete an application
exports.deleteApplication = async (req, res) => {
    try {
        const application = await Application.findByIdAndDelete(req.params.id);
        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.json({ message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
