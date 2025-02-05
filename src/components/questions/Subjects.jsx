import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Subjects = () => {
  return (
    <div>
        <h1>Subjects</h1>
        <Link to="/subjects/html">Html</Link>
        <Outlet/>
    </div>
  )
}

export default Subjects