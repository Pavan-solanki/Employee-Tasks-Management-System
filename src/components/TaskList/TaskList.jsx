import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='mt-10 h-[50%] flex items-center flex-nowrap gap-5 overflow-x-auto'>
        {data.tasks.map((e,idx) => {
            if(e.active){
                return <AcceptTask key={idx} data={e}/>
            }
            if(e.newTask){
                return <NewTask key={idx} data={e}/>
            }
            if(e.completed){
                return <CompleteTask key={idx} data={e}/>
            }
            if (e.failed){
                return <FailedTask key={idx} data={e}/>
            }
        })}


    </div>
  )
}

export default TaskList