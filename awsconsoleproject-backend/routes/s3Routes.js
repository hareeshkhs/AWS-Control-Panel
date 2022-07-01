const express = require("express");
const router = express.Router();
const S3Service = require("../services/s3Service.js");

router.get("/s3/getBuckets", async (req, res) => {
  const s3Service = new S3Service();
  const result = await s3Service.getS3Service();
  res.send(result);
  //console.log(result);
});

router.post("/s3/setBucket", async (req, res) => {
  const s3Service = new S3Service();
  const result = await s3Service.setS3Service(req.body);
  res.send(result);
  //console.log(result);
});

router.post("/s3/removeBucket", async (req, res) => {
  const s3Service = new S3Service();
  const result = await s3Service.removeS3Service(req.body);
  res.send(result);
  //console.log(result);
});

module.exports = router;
