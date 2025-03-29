import React from 'react'
import  { AuthContext } from '../../context/AuthProvider'

const Header = (props) => {

  const logout=() => {
    localStorage.setItem("loggedInUser","")
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className='flex justify-between items-start '>
        <h1 className='text-xl font-bold'>Hello, <br/> <span className='text-3xl font-bold'>username👋 </span></h1>
        <button onClick={logout} className='w-20 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 pb-2 rounded shadow-md cursor-pointer'>LogOut</button>
    </div>
  )
}

export default Header