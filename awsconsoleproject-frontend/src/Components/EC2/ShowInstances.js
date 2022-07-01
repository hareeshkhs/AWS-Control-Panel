import ec2Service from "../../Services/ec2service";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import ListEC2 from './ListEC2';

const ShowInstances = () => {
  const [instances, setInstances] = useState([]);
  useEffect(() => {
    ec2Service.getInstances().then((res) => {
      setInstances(res.data.Reservations);
    });
  }, []);
  console.log(instances)
  return (
    <div>
    <NavBar />
    <ListEC2 />
    <div className="container showlist">
      <h1>Instances List</h1>
      <table class="table table-hover">
      <thead>
        <tr>
          <th>Created at</th>
          <th>Instance Id</th>
          <th>Image Id</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {instances.map((instance) => (
            <tr key={instance.Instances[0].InstanceId}>
              <td>{instance.Instances[0].LaunchTime}</td>
              <td>{instance.Instances[0].InstanceId}</td>
              <td>{instance.Instances[0].ImageId}</td>
              <td>{instance.Instances[0].State.Name}</td>
            </tr>
        ))}
      </tbody>
      </table>
    </div>
    </div>
  );
};

export default ShowInstances;
