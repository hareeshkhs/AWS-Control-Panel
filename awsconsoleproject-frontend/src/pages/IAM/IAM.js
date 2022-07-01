import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import iam from "../../images/iam3.png"
import ListIAM from '../../Components/IAM/ListIAM'

function IAM() {
  return (
    <div>
        <NavBar />
        <ListIAM />
        <div class="container imagecontainer">
        <h2>Welcome to IAM Operations</h2>
        <img className="imagestyle" src={iam} alt='ec2'/>
        </div>
    </div>
  )
}

export default IAM