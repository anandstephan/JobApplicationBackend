const Company = require('../models/Company')
// Create a Company
exports.addCompany = async (req, res) => {
    const {name,location} = req.body
    try {
        const company = new Company({name,location});
        await company.save();
        res.status(201).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//  Get All Companies
exports.showCompany  =  async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Get a Company by ID
exports.showCompanyById =  async (req, res) => {
    try {
        const company = await Company.findById(req.body.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 4 Update a Company
exports.updateCompanyById =  async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.body.id, req.body, { new: true, runValidators: true });
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a Company
exports.deleteCompanyById =  async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.body.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.json({ message: 'Company deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};