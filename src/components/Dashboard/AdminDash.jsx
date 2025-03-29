import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDash = (props) => {
  return (
    <div className='p-8 h-screen w-full '>
        <Header changeUser={props.changeUser}/>
        <CreateTask/>
        <AllTask/>

    </div>
  )
}

export default AdminDash