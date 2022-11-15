import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { logOut } from '../auth/firebase'

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>logOut(navigate,dispatch)}>sadık</button>
    </div>
  )
}

export default Home
