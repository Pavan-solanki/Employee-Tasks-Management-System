import React from 'react'

const CompleteTask = ({data}) => {
  return (
//     <div className=' flex-shrink-0 bg-blue-400 w-[300px] h-full p-4 rounded-xl'>
//             <div className='flex justify-between text-white'>
//                 <h3 className='bg-red-600 px-2 py-1 rounded text-sm'>{data.category}</h3>
//                 <h4 className='text-sm'>{data.date}</h4>
//             </div>
//             <h2 className='text-2xl font-bold mt-5'>{data.title}</h2>
//             <p className='text-sm mt-3'>{data.description}</p>
//             <div>
//                 <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-full mt-10'>Completed</button>
//             </div>
            
//         </div>
        <div className="flex-shrink-0 bg-blue-400 w-[300px] h-full p-4 rounded-xl flex flex-col">
            <div className="flex justify-between text-white">
                <h3 className="bg-red-600 px-2 py-1 rounded text-sm">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="text-2xl font-bold mt-5">{data.title}</h2>
            <p className="text-sm mt-3">{data.description}</p>

            <div className="flex-grow"></div> {/* Pushes button to bottom */}

            <div>
                <button className="bg-green-500 font-bold text-white px-4 py-2 rounded hover:bg-green-700 w-full mt-4">
                Completed
                </button>
            </div>
        </div>

  )
}

export default CompleteTask