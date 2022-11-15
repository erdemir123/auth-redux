import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { logOut } from '../auth/firebase'
import Navbar from '../conponents/Navbar'

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <div>
      {/* <button onClick={()=>logOut(navigate,dispatch)}>sadık</button> */}
      <Navbar />
    </div>
  )
}

export default Home
