import { Link } from "react-router-dom";
  
const Navtest = () => {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>

            <div
            class="collapse navbar-collapse navbar-dark bg-dark justify-content-center"
            id="navbarCenteredExample"
            >
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">AWS</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/ec2">EC2</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/s3">S3</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/iam">IAM</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    );
};
  
export default Navtest;
  