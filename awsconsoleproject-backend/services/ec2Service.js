const {
  CreateTagsCommand,
  RunInstancesCommand,
  DescribeInstancesCommand,
  StartInstancesCommand,
  StopInstancesCommand,
  TerminateInstancesCommand,
} = require("@aws-sdk/client-ec2");
const { ec2Client } = require("../libs/ec2Client");

// const instanceID = { InstanceIds: ["i-0fdd93e19e960ca73"] };
// const instanceParams = {
//   ImageId: "ami-0f9fc25dd2506cf6d", //AMI_ID
//   InstanceType: "t2.micro",
//   MinCount: 1,
//   MaxCount: 1,
// };

class EC2Service {
  async setEC2Instance(instanceParams) {
    try {
      const data = await ec2Client.send(
        new RunInstancesCommand(instanceParams)
      );
      console.log(data.Instances[0].InstanceId);
      const instanceId = data.Instances[0].InstanceId;
      console.log("Created instance", instanceId);
      const newinstance = "Created instance : " + instanceId;
      // Add tags to the instance
      const tagParams = {
        Resources: [instanceId],
        Tags: [
          {
            Key: "Name",
            Value: "SDK Sample",
          },
        ],
      };
      try {
        const data = await ec2Client.send(new CreateTagsCommand(tagParams));
        console.log("Instance tagged");
        return data;
      } catch (err) {
        console.log("Error", err);
        return err;
      }
    } catch (err) {
      console.log("Error", err);
      return err;
    }
  }

  async getEC2Instance() {
    try {
      const data = await ec2Client.send(new DescribeInstancesCommand({}));
      console.log("Success", JSON.stringify(data));
      return data;
    } catch (err) {
      console.log("Error", err);
      return err;
    }
  }

  async startEC2Instance(instanceID) {
    try {
      const data = await ec2Client.send(new StartInstancesCommand(instanceID));
      console.log("Success", data.StartingInstances);
      return data;
    } catch (err) {
      console.log("Error2", err);
      return err;
    }
  }
  async stopEC2Instance(instanceID) {
    try {
      const data = await ec2Client.send(new StopInstancesCommand(instanceID));
      console.log("Success", data.StoppingInstances);
      return data;
    } catch (err) {
      console.log("Error", err);
      return err;
    }
  }
  async terminateEC2Instance(instanceID) {
    try {
      const data = await ec2Client.send(
        new TerminateInstancesCommand(instanceID)
      );
      console.log("Success", data.TerminatingInstances);
      return data;
    } catch (err) {
      console.log("Error", err);
      return err;
    }
  }
}

module.exports = EC2Service;
