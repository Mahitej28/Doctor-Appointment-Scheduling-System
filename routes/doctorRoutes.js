//To get user and display it
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getDoctorInfoController, updateProfileController } = require("../controllers/doctorCtrl");

const router = express.Router();

//GET SINGGLE DOCTOR INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post('/updateProfile', authMiddleware, updateProfileController)

module.exports = router