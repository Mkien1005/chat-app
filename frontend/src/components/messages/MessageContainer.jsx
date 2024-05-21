import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
export default function MessageContainer() {
  const noChatSelected = true
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {noChatSelected ? <NoChatSelected/> : <Messages/>}
    </div>
  )
}
const NoChatSelected = ()=>{
  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>Welcome 👋 John Doe</p>
            <h1>Select a chat to start messaging</h1>
            <TiMessages className="text-3xl md:text-6xl text-center"/>
        </div>
    </div>
  )
}