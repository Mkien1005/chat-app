import React from 'react'

export default function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="fullName"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Example"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="******"
            />
          </div>
          {/* GENDER CHECKBOX GOES HERE */}
          <div className="mb-4 flex flex-row">
            <label className="block text-white-700 text-sm font-bold mb-2 mr-5" htmlFor="gender">
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
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
