const express = require("express");
const router = express.Router();

const heroController = require("../controller/heroController");

// Get Hero Data
router.get("/hero", heroController.getHero);

module.exports = router;