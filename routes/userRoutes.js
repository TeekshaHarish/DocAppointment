const express=require("express");
const { loginController, registerController, authController, applyDoctorController, getAllNotificationsController, deleteAllNotificationsController, getAllDoctorsController, bookAppointmentController, checkAvailabilityController, getAppointmentsController } = require("../controllers/userCtrl");
const authMiddleware=require("../middlewares/authMiddleware");

//router object
const router=express.Router();

//LOGIN POST
router.post("/login",loginController);

//REGISTER POST
router.post("/register",registerController);

router.post("/getUserData",authMiddleware,authController);

router.post("/apply-doctor",authMiddleware,applyDoctorController);

router.post("/read-all-notifications",authMiddleware,getAllNotificationsController);

router.post("/delete-all-notifications" ,authMiddleware,deleteAllNotificationsController);

router.get("/getAllDoctors",authMiddleware,getAllDoctorsController);

// router.get("/available-slots",authMiddleware,getAvailableSlotsController);

router.post("/book-appointment",authMiddleware,bookAppointmentController);

router.post("/check-available-appointment",authMiddleware,checkAvailabilityController);

router.get("/getAppointments",authMiddleware,getAppointmentsController);

module.exports=router;