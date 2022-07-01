import aws from "../../images/aws.png";

const Home = () => {
  return (
    <div class="container centeralign">
      <h3>Hello User!</h3>
      <h1>Welcome to AWS Control Panel</h1>
      <img src={aws} alt='aws'/>
    </div>
  );
};

export default Home;
