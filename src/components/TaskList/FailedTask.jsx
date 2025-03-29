import React from 'react'

const FailedTask = ({data}) => {
  return (
    // <div className=' flex-shrink-0 bg-green-400 w-[300px] h-full p-4 rounded-xl'>
    //         <div className='flex justify-between text-white'>
    //             <h3 className='bg-red-600 px-2 py-1 rounded text-sm'>{data.category}</h3>
    //             <h4 className='text-sm'>{data.date}</h4>
    //         </div>
    //         <h2 className='text-2xl font-bold mt-5'>{data.title}</h2>
    //         <p className='text-sm mt-3'>{data.description}</p>
    //         <div className='mt-5'>
    //             <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full mt-5'>Failed</button>
    //         </div>
    //     </div>
    <div className="flex-shrink-0 bg-green-400 w-[300px] h-full p-4 rounded-xl flex flex-col">
  <div className="flex justify-between text-white">
    <h3 className="bg-red-600 px-2 py-1 rounded text-sm">{data.category}</h3>
    <h4 className="text-sm">{data.date}</h4>
  </div>
  <h2 className="text-2xl font-bold mt-5">{data.title}</h2>
  <p className="text-sm mt-3">{data.description}</p>

  <div className="flex-grow"></div> {/* Pushes button to bottom */}

  <div className="mt-5">
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
      Failed
    </button>
  </div>
</div>


  )
}

export default FailedTask