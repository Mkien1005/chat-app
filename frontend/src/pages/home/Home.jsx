import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
export default function () {
  return (
    <div className='flex flex-col sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      {/* <MessageContainer/> */}
    </div>
  )
}
