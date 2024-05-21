import React from 'react'
import { CiLogout } from "react-icons/ci";
export default function LogoutButton() {
  return (
    <div className='mt-auto'>
        <CiLogout className='text-3xl hover:text-red-500 cursor-pointer' />
    </div>
  )
}
