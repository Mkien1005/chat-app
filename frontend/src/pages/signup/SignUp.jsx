import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: '',
    username:'',
    password: '',
    confirmpw: '',
    gender: '',
  }) 
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(inputs);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4 text-white">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="fullName"
              placeholder="Nguyễn Văn A"
              value={inputs.fullName}
              onChange={(e)=>setInputs({...inputs,fullName: e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Example"
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs, username: e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password: e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmpw">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmpw"
              type="password"
              placeholder="******"
              value={inputs.confirmpw}
              onChange={(e)=> setInputs({...inputs, confirmpw: e.target.value})}
            />
          </div>
          {/* GENDER CHECKBOX GOES HERE */}
          <div className="mb-4 flex flex-row">
            <label className="block text-white text-sm font-bold mb-2 mr-5" htmlFor="gender">
              Gender
            </label>
            <div className="flex items-center mr-5">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-2"
              />
              <label htmlFor="male" className='text-white'>Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"

              />
              <label htmlFor="female" className='text-white'>Female</label>
            </div>
          </div>
          <Link to="/login" className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-white'> Already have an account? Log in now!</Link>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
