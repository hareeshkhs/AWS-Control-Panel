import iamservice from "../../Services/iamservice";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import ListIAM from './ListIAM';

const ShowUsers = () => {
  const [usernames, setUserName] = useState([]);
  useEffect(() => {
    iamservice.getUser().then((res) => {
      setUserName(res.data.Users);
      //console.log(res);
    });
  }, []);
  return (
    <div>
    <NavBar />
    <ListIAM />
    <div className="container showlist">
      <h1>Users List</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">User ID</th>
          </tr>
        </thead>
        <tbody>
          {usernames.map((username) => {
            return (
              <tr>
                <td>{username.UserName}</td>
                <td>{username.UserId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ShowUsers;
