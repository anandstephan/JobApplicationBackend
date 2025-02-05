const Job = require('../models/Job');

// Post a Job
exports.postJob = async (req, res) => {
    const { title, description, location } = req.body;

    try {
        const job = new Job({
            title,
            description,
            location,
            postedBy: req.user._id,
            companyId: req.user.companyId,
        });

        await job.save();
        res.status(201).json({ message: 'Job posted successfully', job });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get All Jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};