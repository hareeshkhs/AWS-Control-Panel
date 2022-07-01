import ec2Service from "../../Services/ec2service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ListEC2 from './ListEC2';

const StartInstance = () => {
  const navigate = useNavigate();
  const [instanceid, setInstanceID] = useState("");
  const instanceIdChanged = (e) => {
    //console.log(e.target.value);
    setInstanceID(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    ec2Service
      .startInstance({
        InstanceIds: [instanceid],
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };
  return (
    <div>
    <NavBar />
    <ListEC2 />
    <div className="container createid">
      <form onSubmit={submitHandler}>
        <div className="form-group createid">
        <h1>Start Instance</h1>
        <label>
          {" "}
          InstanceId:{" "}
          <input
            type="string"
            name="instanceid"
            placeholder="Enter Instance Id"
            onChange={instanceIdChanged}
            className="form-control"
          />
        </label>
        </div>
        <div className="form-group createid">
        <button
          type="submit"
          className="btn btn-primary btn-dark"
        >Start
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default StartInstance;
