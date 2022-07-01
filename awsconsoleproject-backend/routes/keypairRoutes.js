const express = require("express");
const router = express.Router();
const KeyPairService = require("../services/keypairService.js");

router.get("/createkp", async (req, res) => {
  const kpservice = new KeyPairService();
  const kp = await kpservice.setKeyPairService();
  console.log(kp);
});

module.exports = router;
