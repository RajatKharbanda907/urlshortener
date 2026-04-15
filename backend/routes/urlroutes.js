const express = require("express");
const router = express.Router();

const { shorturl, redirecturl } = require("../controllers/urlcontroller");

router.post("/getshorturl", shorturl);
router.get("/:shorturl", redirecturl);

module.exports = router;