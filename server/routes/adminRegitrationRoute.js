const adminController = require('../controllers/adminController');
const express = require("express");

const router = express.Router();

router.post("/admin/register", adminController.registerAdmin);

module.exports = router;
