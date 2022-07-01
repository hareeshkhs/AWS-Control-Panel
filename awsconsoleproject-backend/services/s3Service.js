const {
  CreateBucketCommand,
  ListBucketsCommand,
  DeleteBucketCommand,
} = require("@aws-sdk/client-s3");
const { s3Client } = require("../libs/s3Client.js");
// const createBucketParams = { Bucket: "jayantbucketyoyo3244" };
// const deleteBucketParams = { Bucket: "jayantbucketyoyo3244" };
class S3Service {
  async setS3Service(createBucketParams) {
    try {
      const data = await s3Client.send(
        new CreateBucketCommand(createBucketParams)
      );
      console.log("Success", data);
      return data;
    } catch (err) {
      console.log("Error", err);
      return err;
    }
  }

  async getS3Service() {
    try {
      const data = await s3Client.send(new ListBucketsCommand({}));
      console.log("Success", data.Buckets);
      return data;
    } catch (err) {
      console.log("Error", err);
      return err;
    }
  }

  async removeS3Service(deleteBucketParams) {
    try {
      const data = await s3Client.send(
        new DeleteBucketCommand(deleteBucketParams)
      );
      console.log("Success - bucket deleted");
      return data;
    } catch (err) {
      console.log("Error", err);
      return err;
    }
  }
}

module.exports = S3Service;
