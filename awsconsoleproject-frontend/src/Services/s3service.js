import axios from "axios";
const USER_BASE_URL = "http://localhost:3000/s3";

class S3Service {
  getBuckets() {
    return axios.get(USER_BASE_URL + "/s3/getBuckets");
  }

  createBucket(name) {
    return axios.post(USER_BASE_URL + "/s3/setBucket", name);
  }

  deleteBucket(name) {
    return axios.post(USER_BASE_URL + "/s3/removeBucket", name);
  }
}

export default new S3Service();
