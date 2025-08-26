const express = require("express");

const {
  SignupUser,
  LoginUser,
  getProfile,
  logout,
} = require("../controllers/authController");


const router = express.Router();

const auth = require("../middleware/authMiddleware");
// const verifyToken = require("../middleware/authMiddleware");

//----------login register-----------------
router.post("/register", SignupUser);
router.post("/login", LoginUser);
router.get("/profile", auth, getProfile);
router.get('/logout', logout);
//------------------------------------------------



module.exports = router;
    