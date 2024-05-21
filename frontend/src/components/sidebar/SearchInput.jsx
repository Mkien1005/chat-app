import React from 'react'

export default function SearchInput() {
  return (
    <form className='flex items-center gap-2'>
      <input
        className="w-full h-10 px-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-full shadow-sm appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search..."
      />
      <button
        className="w-10 h-10 text-white bg-blue-500 rounded-xl hover:bg-blue-600"
        type="submit"
      >
        <svg
          className="w-5 h-5 mx-auto text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  )
}
