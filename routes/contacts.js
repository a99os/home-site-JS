const express = require("express");
const { getCont } = require("../controllers/contacts");
const router = express.Router();

router.get("/contacts", getCont);

module.exports = router;
