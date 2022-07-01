const { iamClient } = require("../libs/iamClient.js");
const {
  ListUsersCommand,
  DeleteUserCommand,
  GetUserCommand,
  CreateUserCommand,
} = require("@aws-sdk/client-iam");

const maxcount = { MaxItems: 10 };
// const deleteparams = { UserName: "lashya" }; //USER_NAME
// const createuser = { UserName: "USER_NAME" }; //USER_NAME

class IAMService {
  async getIAMUserService() {
    try {
      const data = await iamClient.send(new ListUsersCommand(maxcount));
      const users = data.Users || [];
      users.forEach(function (user) {
        console.log("User " + user.UserName + " created", user.CreateDate);
      });
      return data;
    } catch (err) {
      console.log("Error", err);
      return err;
    }
  }

  async setIAMUserService(createuser) {
    try {
      const data = await iamClient.send(new GetUserCommand(createuser));
      console.log("User " + "USER_NAME" + " already exists", data.User.UserId);
      return data;
    } catch (err) {
      try {
        const results = await iamClient.send(new CreateUserCommand(createuser));
        console.log("Success", results);
        return results;
      } catch (err) {
        console.log("Error", err);
        return err;
      }
    }
  }

  // async removeIAMUserService(_id) {
  //   try {
  //     const data = await iamClient.send(new GetUserCommand(deleteparams));
  //     try {
  //       const results = await iamClient.send(
  //         new DeleteUserCommand(deleteparams)
  //       );
  //       console.log("Success", results);
  //       return results;
  //     } catch (err) {
  //       console.log("Error", err);
  //     }
  //     return data;
  //   } catch (err) {
  //     console.log("User " + "USER_NAME" + " does not exist.");
  //   }
  // }
}

module.exports = IAMService;
