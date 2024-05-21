import React from 'react'
import { IoSend } from "react-icons/io5";
export default function MessageInput() {
  return (
    <form className=''>
        <div className="form-control">
            <div className="input-group w-full relative">
                <input type="text" placeholder="Type here" className="input input-bordered pr-10 w-full" />
                <button type='submit' className=" absolute flex items-center pe-3 inset-y-0 end-0">
                    <IoSend />
                </button>
            </div>
        </div>  
    </form>
  )
}
