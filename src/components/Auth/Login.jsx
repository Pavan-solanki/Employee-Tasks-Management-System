import React from 'react'
import { useState } from 'react'
const Login = ({handler}) => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const preventDefault = (event) => {
        event.preventDefault()
        handler(Email, Password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-10 '>
        <h1 className='text-3xl font-bold '>Login Page</h1>
        <div className='flex flex-col gap-2 px-13 py-15 border-2 rounded-lg border-emerald-600'>
            <form onSubmit={preventDefault} className='flex flex-col gap-5'>
                <input
                value={Email}
                 onChange={(e) => {
                    setEmail(e.target.value)
                 }}
                required
                className='p-2 border-2 border-emerald-600 rounded-lg placeholder:text-gray-400'
                type="text"   placeholder='Enter Email' />
                <input
                value={Password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                required
                className=' p-2 border-2 border-emerald-600 rounded-lg placeholder:text-gray-400'
                type="password" placeholder="Enter Password" />
                <button className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg shadow-md active:bg-emerald-800' type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login