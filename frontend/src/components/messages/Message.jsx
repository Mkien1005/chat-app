import React from 'react'

export default function Message() {
  return (
    <div className='chat chat-end'>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
            </div>
        </div>
        <div className="chat-header">
            John Doe
        </div>
        <div className="chat-bubble">
            Hi, how are you?
        </div>
        <div className="flex justify-between">
            <div className="chat-footer text-xs">10:20 </div>
            <div className="chat-footer text-xs">Seen</div>
        </div>
    </div>
  )
}
