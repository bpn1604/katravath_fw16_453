import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

function Home() {
    const {logout}=useContext(AuthContext)
  return (
    <div><h1>Home</h1>
    <button onClick={logout}>Log out</button></div>
  )
}

export default Home