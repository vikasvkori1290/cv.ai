import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>Layout page</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
