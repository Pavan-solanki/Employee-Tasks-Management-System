import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData,setuserData]= useContext(AuthContext)

    const [title, settitle] = useState("")
    const [date, setdate] = useState("")
    const [assignTo, setassignTo] = useState("")
    const [category, setcategory] = useState("")
    const [description, setdescription] = useState("")
    const [newtask, setnewtask] = useState({})
    
    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(title,date,assignTo,category,description)
        setnewtask({title,date,category,description,active:false,newTask:true,failed:false,completed:false})

        const data=userData
        
        data.forEach(function(elem){
            if(assignTo==elem.firstName){
                elem.tasks.push(newtask)
                if (elem.taskNumbers) {
                elem.taskNumbers.newTasks += 1;
            } 
                // console.log(elem)
            }
        })
        setuserData(data)
        // console.log(data);
        
    }

  return (
    <div className='mt-8 bg-[#1c1c1c] p-5 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
            className='flex justify-between p-5 flex-wrap w-full'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='mb-0.5 text-sm text-gray-200'>Task Title</h3>
                        <input 
                        onChange={(e) => {
                            settitle(e.target.value)
                        }}
                        className='w-4/5 outline-none border-[1px] border-gray-400 px-2 py-1 mb-4 bg-transparent rounded text-sm ' type="text " placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='mb-0.5 text-sm text-gray-200'>Date</h3>
                        <input
                        onChange={(e) => {
                            setdate(e.target.value)
                        }} 
                        className='w-4/5 outline-none border-[1px] border-gray-400 px-2 py-1 mb-4 bg-transparent rounded text-sm text-gray-400' type="date" placeholder='dd/mm/yyyy' />
                    </div>
                    <div>
                        <h3 className='mb-0.5 text-sm text-gray-200'>Assign t0</h3>
                        <input
                        onChange={(e) => {
                            setassignTo(e.target.value)
                        }} 
                        className='w-4/5 outline-none border-[1px] border-gray-400 px-2 py-1 mb-4 bg-transparent rounded text-sm ' type="text " placeholder='Employee name' />
                    </div>
                    <div>
                        <h3 className='mb-0.5 text-sm text-gray-200'>Category</h3>
                        <input
                        onChange={(e) => {
                            setcategory(e.target.value)
                        }} 
                        className='w-4/5 outline-none border-[1px] border-gray-400 px-2 py-1 mb-4 bg-transparent rounded text-sm ' type="text " placeholder='Design,dev,etc' />
                    </div>
                </div>

                <div className=' w-2/5 flex flex-col flex-start'>
                    <h3 className='mb-0.5 text-sm text-gray-200'>Description</h3>
                    <textarea
                    onChange={(e) => {
                            setdescription(e.target.value)
                        }} 
                    className='w-Full h-44 outline-none border-[1px] border-gray-400 px-2 py-1 mb-4 bg-transparent rounded text-sm text-gray-50 ' name="description" id="description" cols="30" rows="10" placeholder='Write a description..'></textarea>
                    <button className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 pb-2 rounded shadow-md cursor-pointer'>Create Task</button>
                </div>

            </form>
        </div>
  )
}

export default CreateTask