const express = require("express");
const router = express.Router();
const IAMService = require("../services/iamService.js");

router.get("/iam/getIAMusers", async (req, res) => {
  const iamService = new IAMService();
  const result = await iamService.getIAMUserService();
  res.send(result);
  //console.log(result);
});

router.post("/iam/setIAMuser", async (req, res) => {
  const iamService = new IAMService();
  const result = await iamService.setIAMUserService(req.body);
  res.send(result);
  //console.log(result);
});

// router.get("/removeIAMuser", async (req, res) => {
//   const iamService = new IAMService();
//   const result = await iamService.removeIAMUserService();
//   console.log(result);
// });
module.exports = router;
