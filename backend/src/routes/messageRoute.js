const express = require("express");
const router = express.Router();

const messageController = require("../controller/messageController");

// Endpoint utama yang dipanggil oleh Frontend Next.js (/contact)
router.post("/contact", messageController.createMessage);

// Alias tambahan agar tetap bisa menggunakan /messages
router.post("/messages", messageController.createMessage);

module.exports = router;