const express = require("express");

const { createContact } = require("../Controllers/ContactController");

const router = express.Router();

router.post("/", createContact);

module.exports = router;
