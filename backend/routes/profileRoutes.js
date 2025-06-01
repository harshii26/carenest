const express = require("express");
const router = express.Router();
const multer = require("multer");
const { getProfile, updateProfile } = require("../controllers/profileController");
const authenticate = require("../middleware/authenticate");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.get("/", authenticate, getProfile);
router.put("/", authenticate, upload.single("profilePicture"), updateProfile);

module.exports = router;
