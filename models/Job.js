const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // HR who posted the job
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true }, // Company associated with the job
});

module.exports = mongoose.model('Job', jobSchema);