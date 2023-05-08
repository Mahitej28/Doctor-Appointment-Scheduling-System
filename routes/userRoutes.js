const express = require("express");
const { loginController, registerController, authController, applyDoctorController, getAllNotificationController, deleteAllNotificationController } = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//Login 
router.post("/login", loginController);

//register
router.post("/register", registerController);


//Auth
router.post("/getUserData", authMiddleware, authController)


//Apply Doctor
router.post("/apply-doctor", authMiddleware, applyDoctorController)

//Notification
router.post("/get-all-notification", authMiddleware, getAllNotificationController)

//Notification
router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController)

module.exports = router