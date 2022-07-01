import s3service from "../../Services/s3service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ListS3 from './ListS3';

const DeleteBucket = () => {
  const navigate = useNavigate();
  const [bucketname, setBucketName] = useState("");
  const bucketNameChanged = (e) => {
    //console.log(e.target.value);
    setBucketName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    s3service
      .deleteBucket({
        Bucket: bucketname,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };
  return (
    <div>
    <NavBar />
    <ListS3 />
    <div className="container createid">
      <form onSubmit={submitHandler}>
      <div className="form-group createid">
        <h1>Delete Bucket</h1>
        <label>
          {" "}
          Bucket Name:{" "}
          <input
            type="string"
            name="bucketname"
            placeholder="Enter Bucket Name"
            onChange={bucketNameChanged}
            className="form-control"
          />
        </label>
        </div>
        <div className="form-group createid">
        <button
          type="submit"
          className="btn btn-primary btn-dark"
        >
          Delete
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default DeleteBucket;
