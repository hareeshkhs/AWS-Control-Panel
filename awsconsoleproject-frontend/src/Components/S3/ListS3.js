import React from 'react'
import { Link } from 'react-router-dom'

function ListS3() {
  return (
    <nav class="navbar navbar-expand-sm bg-light justify-content-center">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/s3/createbucket">Create Bucket</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/s3/listbucket">Show Buckets</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/s3/deletebucket">Delete Bucket</Link>
                </li>
            </ul>
    </nav>
  )
}

export default ListS3