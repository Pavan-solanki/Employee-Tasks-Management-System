import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setuserData]=useContext(AuthContext)
  return (
    <div id='tasklist' className='mt-8    bg-[#1c1c1c] p-5 rounded'>
        <div className='flex justify-between bg-red-400 p-1.5 rounded mb-3'>
            <h3 className='w-1/5 text-white '>Employee Name</h3>
            <h3 className='w-1/5'>New Task</h3>
            <h4 className='w-1/5'>Active Task</h4>
            <h4 className='w-1/5'>Completed</h4>
            <h4 className='w-1/5'>Failed</h4>
        </div>
        {userData.map(function(elem,idx) {
            return <div key={idx} className='flex justify-between border-[1px] border-emerald-500 p-1.5 rounded mb-3'>
            <h3 className='w-1/5 text-white'>{elem.firstName}</h3>
            <h3 className='w-1/5 text-amber-200'>{elem.taskNumbers.newTasks}</h3>
            <h4 className='w-1/5'>{elem.taskNumbers.acceptedTasks}</h4>
            <h4 className='w-1/5 text-green-500'>{elem.taskNumbers.completedTasks}</h4>
            <h4 className='w-1/5 text-red-500'>{elem.taskNumbers.failedTasks}</h4>
        </div>
        })}
        
        
        
    </div>
  )
}

export default AllTask