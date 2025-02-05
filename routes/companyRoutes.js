const express = require('express');
const companyController = require('../controllers/companyController');
const auth = require('../middleware/auth');

const router = express.Router();


router.post('/addcompany',auth,companyController.addCompany)
router.get("/showCompany",auth,companyController.showCompany)
router.get("/showCompanyById/:id",auth,companyController.showCompanyById)
router.put("/updateCompany",auth,companyController.updateCompanyById)
router.delete("/deleteCompany",auth,companyController.deleteCompanyById)
module.exports = router