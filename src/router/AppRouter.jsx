import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { userObserver } from '../auth/firebase'

const AppRouter = () => {
  const currentUser = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  
  useEffect(() => {
    userObserver(dispatch,currentUser)
  }, [])
  return (
    <>
   <Routes>
      <Route path='' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />}/>
      
     </Routes>
     
     </>
  )
}

export default AppRouter
