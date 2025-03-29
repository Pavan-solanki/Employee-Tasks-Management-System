import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex screen gap-5 justify-between mt-10 '>
      <div className='flex flex-col  w-[45%] bg-emerald-600 px-6 py-9  rounded-lg'>
        <h1 className='text-3xl font-bold'>{data.taskNumbers.newTasks}</h1>
        <h2 className='text-xl font-bold'>New Task</h2>
      </div>

      <div className='flex flex-col  w-[45%] bg-red-400 px-6 py-9  rounded-lg'>
        <h1 className='text-3xl font-bold'>{data.taskNumbers.acceptedTasks}</h1>
        <h2 className='text-xl font-bold'>Accepted Task</h2>
      </div>

      <div className='flex flex-col  w-[45%] bg-blue-600 px-6 py-9 rounded-lg'>
        <h1 className='text-3xl font-bold'>{data.taskNumbers.completedTasks}</h1>
        <h2 className='text-xl font-bold'>Completed Task</h2>
      </div>

      <div className='flex flex-col  w-[45%] bg-yellow-500 px-6 py-9  rounded-lg'>
        <h1 className='text-3xl font-bold'>{data.taskNumbers.failedTasks}</h1>
        <h2 className='text-xl font-bold'>Failed Task</h2>
      </div>

      
    </div>
  )
}

export default TaskListNumbers