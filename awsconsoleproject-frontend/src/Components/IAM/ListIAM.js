import React from 'react'
import { Link } from 'react-router-dom'

function ListIAM() {
  return (
    <nav class="navbar navbar-expand-sm bg-light justify-content-center">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/iam/createuser">Create User</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/iam/listuser">Show Users</Link>
                </li>
            </ul>
        </nav>
  )
}

export default ListIAM;