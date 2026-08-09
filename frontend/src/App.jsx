import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import PagenotFound from './pages/PagenotFound'
import ProtectedRoute from './ProtectedRoute'
import Signup from './pages/Signup'

function App() {
  return (
    <Routes>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/' element={<ProtectedRoute><Layout/></ProtectedRoute>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='*' element={<PagenotFound/>}/>
    </Routes>
  )
}

export default App