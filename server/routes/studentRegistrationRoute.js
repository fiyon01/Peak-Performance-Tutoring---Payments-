// routes/studentRegistrationRoute.js
const express = require("express");
const registrationController = require("../controllers/registrationController");

const router = express.Router();

router.post("/student/register", registrationController.registerStudent);
router.post("/students/register-bulk", registrationController.registerBulkstudents);

module.exports = router;
