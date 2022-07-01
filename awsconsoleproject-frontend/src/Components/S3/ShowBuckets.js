import s3service from "../../Services/s3service";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import ListS3 from './ListS3';

const ShowBuckets = () => {
  const [buckets, setBuckets] = useState([]);
  useEffect(() => {
    s3service.getBuckets().then((res) => {
      setBuckets(res.data.Buckets);
      //console.log(res);
    });
  }, []);
  console.log(buckets)
  return (
    <div>
    <NavBar />
    <ListS3 />
    <div className="container showlist">
    <h1>Buckets List</h1>
    <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Bucket Name</th>
            <th scope="col">Bucket Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {buckets.map((bucket) => {
            return (
              <tr>
                <td>{bucket.Name}</td>
                <td>{bucket.CreationDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ShowBuckets;
