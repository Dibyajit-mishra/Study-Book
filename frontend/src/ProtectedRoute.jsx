import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {

    let login = useContext(loginId)
    if(!login){
  return (
    <Navigate to={"/login"} replace/>
  )}
    
  return children
}

export default ProtectedRoute