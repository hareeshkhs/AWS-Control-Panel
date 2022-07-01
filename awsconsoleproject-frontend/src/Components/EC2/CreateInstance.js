import ec2Service from "../../Services/ec2service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ListEC2 from './ListEC2';

const CreateInstance = () => {
  const navigate = useNavigate();
  const [instanceid, setInstanceID] = useState("");
  const [instancetype, setInstanceType] = useState("");
  const [instancemincount, setInstanceMinCount] = useState();
  const [instancemaxcount, setInstanceMaxCount] = useState();

  const InstanceIDChanged = (e) => {
    //console.log(e.target.value);
    setInstanceID(e.target.value);
  };
  const InstanceTypeChanged = (e) => {
    //console.log(e.target.value);
    setInstanceType(e.target.value);
  };
  const InstanceMinCountChanged = (e) => {
    //console.log(e.target.value);
    setInstanceMinCount(e.target.value);
  };
  const InstanceMaxCountChanged = (e) => {
    //console.log(e.target.value);
    setInstanceMaxCount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    ec2Service
      .createInstance({
        ImageId: instanceid, //AMI_ID
        InstanceType: instancetype,
        MinCount: instancemaxcount,
        MaxCount: instancemincount,
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
      <h1>Create Instance</h1>
        <label>
          ImageId:{" "}
          <input
            type="string"
            name="imageid"
            placeholder="Enter Image Id"
            onChange={InstanceIDChanged}
            className="form-control"
          ></input>
        </label>
        </div>
        <div className="form-group createid">
        <label>
          InstanceType:{" "}
          <input
            type="string"
            name="instancetype"
            placeholder="Enter Instance Type"
            onChange={InstanceTypeChanged}
            className="form-control"
          ></input>
        </label>
        </div>
        <div className="form-group createid">
        <label>
          MinCount:{" "}
          <input
            type="number"
            name="mincount"
            placeholder="Enter Min Count"
            onChange={InstanceMinCountChanged}
            className="form-control"
          ></input>
        </label>
        </div>
        <div className="form-group createid">
        <label>
          MaxCount:{" "}
          <input
            type="number"
            name="maxcount"
            placeholder="Enter Max Count"
            onChange={InstanceMaxCountChanged}
            className="form-control"
          ></input>
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

export default CreateInstance;
