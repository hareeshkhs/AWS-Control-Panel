import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import EC2 from "./pages/EC2/EC2";
import S3 from "./pages/S3/S3";
import IAM from "./pages/IAM/IAM"
import CreateBucket from "./Components/S3/CreateBucket";
import DeleteBucket from "./Components/S3/DeleteBucket";
import ShowBucket from "./Components/S3/ShowBuckets";
import CreateInstance from "./Components/EC2/CreateInstance";
import ShowInstances from "./Components/EC2/ShowInstances";
import StartInstance from "./Components/EC2/StartInstance";
import StopInstance from "./Components/EC2/StopInstance";
import TerminateInstance from "./Components/EC2/TerminateInstance";
import ShowUsers from "./Components/IAM/ShowUsers";
import CreateUser from "./Components/IAM/CreateUser";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ec2" element={<EC2 />} />
        <Route path="/s3" element={<S3 />} />
        <Route path="/iam" element={<IAM />} />
        <Route path="/ec2/createinstance" element={<CreateInstance />} />
        <Route path="/ec2/listinstance" element={<ShowInstances />} />
        <Route path="/ec2/startinstance" element={<StartInstance />} />
        <Route path="/ec2/stopinstance" element={<StopInstance />} />
        <Route path="/ec2/terminateinstance" element={<TerminateInstance />} />
        <Route path="/s3/listbucket" element={<ShowBucket />} />
        <Route path="/s3/createbucket" element={<CreateBucket />} />
        <Route path="/s3/deletebucket" element={<DeleteBucket />} />
        <Route path="/iam/listuser" element={<ShowUsers />} />
        <Route path="/iam/createuser" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
