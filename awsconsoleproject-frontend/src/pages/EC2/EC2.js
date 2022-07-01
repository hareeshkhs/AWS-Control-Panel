import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import ec2 from "../../images/ec2.png";
import ListEC2 from '../../Components/EC2/ListEC2';


function EC2() {
  return (
    <div>
        <NavBar />
        <ListEC2 />
        <div class="container imagecontainer">
        <h2>Welcome to EC2 Operations</h2>
        <img className="imagestyle" src={ec2} alt='ec2'/>
        </div>
    </div>
  )
}

export default EC2