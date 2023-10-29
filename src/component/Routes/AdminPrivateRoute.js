import React from 'react'
import { useAuth } from '../../Context/authProvider'
import { Navigate, Outlet } from 'react-router-dom'

const AdminPrivateRoute = () => {
    const [auth,setAuth] = useAuth()
  const data = JSON.parse(localStorage.getItem('auth'))
  const user = data.data
    console.log(auth.token);
  return (
    user.role === 1 ? <Outlet /> : <Navigate to='/login'/>
  )
}

export default AdminPrivateRoute