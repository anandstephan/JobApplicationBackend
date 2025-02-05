const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Job seeker who applied
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
});

module.exports = mongoose.model('Application', applicationSchema);