const express = require("express");
const router = express.Router();

// route calls respective controller
const fizzControllers = require("../controllers/fizzControllers");
router.route("/").post(fizzControllers.validateFizzBuzz);

module.exports = router;