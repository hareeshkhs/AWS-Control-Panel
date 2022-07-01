const { CreateKeyPairCommand } = require("@aws-sdk/client-ec2");
const { ec2Client } = require("../libs/ec2Client");

// Set the parameters
const params = { KeyName: "MYPAIR11" }; //MY_KEY_PAIR
class KeyPairService {
  async setKeyPairService() {
    try {
      const data = await ec2Client.send(new CreateKeyPairCommand(params));
      console.log(JSON.stringify(data));
      return data;
    } catch (err) {
      console.log("Error", err);
      return err;
    }
  }

  async getKeyPairService() {}

  async removeKeyPairService(_id) {}
}

module.exports = KeyPairService;
