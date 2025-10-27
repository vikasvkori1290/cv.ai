import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import BuildYourCV from './pages/BuildYourCV'
import Layout from './pages/Layout'
import Preview from './pages/Preview'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='build-your-cv/:id' element={<BuildYourCV />} />
        </Route>

        <Route path='view/:id' element={<Preview page />} />
        <Route path='login' element={<Login />} />

      </Routes>
    </>
  )
}
export default App