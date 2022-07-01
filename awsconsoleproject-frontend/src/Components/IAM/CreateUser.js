import iamservice from "../../Services/iamservice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ListIAM from './ListIAM';

const CreateUser = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const userNameChanged = (e) => {
    //console.log(e.target.value);
    setUserName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    iamservice
      .createUser({
        UserName: username,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };
  return (
    <div>
    <NavBar />
    <ListIAM />
    <div className="container createid">
      <form onSubmit={submitHandler}>
      <div className="form-group createid">
        <h1>Create User</h1>
        <label>
          {" "}
          UserName:{" "}
          <input
            type="string"
            name="username"
            placeholder="Enter UserName"
            onChange={userNameChanged}
            className="form-control"
          />
        </label>
        </div>
        <div className="form-group createid">
        <button
          type="submit"
          className="btn btn-primary btn-dark"
          style={{ marginLeft: "5px" }}
        >
          Create
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default CreateUser;
