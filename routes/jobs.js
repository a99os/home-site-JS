const express = require("express");
const { getContact } = require("../controllers/jobs");
const router = express.Router();

router.get("/jobs", getContact);

module.exports = router;
