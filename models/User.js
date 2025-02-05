const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['hr', 'jobseeker'], required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, // Only for HR
});

module.exports = mongoose.model('User', userSchema);