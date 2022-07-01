import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import aws from "../../images/aws.png";

function Home() {
  return (
    <div>
        <NavBar />
        <div class="container imagecontainerhome">
        <h2>Welcome to AWS</h2>
        <img className="imagestyle imagecontainerhome" src={aws} alt='aws'/>
        </div>
    </div>
  )
}

export default Home