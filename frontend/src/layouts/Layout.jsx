import React, { Fragment } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div className="container">
      <Sidebar />

      <div className="content">
        <Topbar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>

  )
}

export default Layout