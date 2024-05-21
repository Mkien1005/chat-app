import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4 text-white">Log In</h1>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Example"
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
            />
          </div>
          <Link to="/signup" className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-white'>Don't have an account? Sign up now!</Link><br/><br/>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
        </form>
      </div>
    </div>
  )
}
