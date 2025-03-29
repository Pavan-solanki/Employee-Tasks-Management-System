import React from 'react'

const AcceptTask = ({data}) => {
  return (
    // <div className=' flex-shrink-0 bg-red-400 w-[300px] h-full p-4 rounded-xl'>
    //         <div className='flex justify-between text-white'>
    //             <h3 className='bg-red-600 px-2 py-1 rounded text-sm'>{data.category}</h3>
    //             <h4 className='text-sm'>{data.date}</h4>
    //         </div>
    //         <h2 className='text-2xl font-bold mt-5'>{data.title}</h2>
    //         <p className='text-sm mt-3'>{data.description}</p>
    //         <div className='flex justify-between mt-10 gap-2  '>
    //             <button className='text-sm px-2 py-2 bg-green-500 text-white   rounded hover:bg-green-700'>Mark as Completed</button>
    //             <button className='bg-red-600 text-sm text-white px-2 py-1 rounded hover:bg-red-700 cursor-pointer'>Mark as Failed</button>
    //         </div>
    //     </div>
    <div className="relative flex-shrink-0 bg-red-400 w-[300px] h-full p-4 rounded-xl">
        <div className="flex justify-between text-white">
            <h3 className="bg-red-600 px-2 py-1 rounded text-sm">{data.category}</h3>
            <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="text-2xl font-bold mt-5">{data.title}</h2>
        <p className="text-sm mt-3">{data.description}</p>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-2">
            <button className=" text-sm px-2 py-2 font-bold bg-green-500 text-white rounded hover:bg-green-700">
             Mark as Completed
            </button>
            <button className="bg-red-600 font-bold text-sm text-white px-2 py-1 rounded hover:bg-red-700 cursor-pointer">
            Mark as Failed
            </button>
        </div>
    </div>

  )
}

export default AcceptTask