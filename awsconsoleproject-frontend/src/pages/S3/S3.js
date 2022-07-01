import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import s3 from "../../images/s3.png"
import ListS3 from '../../Components/S3/ListS3'

function S3() {
  return (
    <div>
        <NavBar />
        <ListS3 />
        <div class="container imagecontainer">
        <h2>Welcome to S3 Operations</h2>
        <img className="imagestyle" src={s3} alt='ec2'/>
        </div>
    </div>
  )
}

export default S3