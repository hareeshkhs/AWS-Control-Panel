import React from 'react'
import { Link } from 'react-router-dom'

function navlist() {
  return (
    <nav class="navbar navbar-expand-sm bg-light justify-content-center">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/ec2/createinstance">Create Instance</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/ec2/listinstance">Show Instances</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/ec2/startinstance">Start Instance</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/ec2/stopinstance">Stop Instance</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/ec2/terminateinstance">Terminate Instance</Link>
                </li>
            </ul>
        </nav>
  )
}

export default navlist