import React from 'react'
import { Link } from 'react-router-dom'

function Cover() {
  return (
    <main className="h-screen bg-front-page bg-no-repeat bg-cover bg-center bg-fixed text-white">
      <div className="h-screen flex flex-col justify-center items-center text-4xl font-style: italic">
        <div className="py-7">FIND ALL THE RECIPES AVAILABLE ON EARTH!</div>
        <Link to="/search">
          <button className=" text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            ENTER
          </button>
        </Link>
      </div>
    </main>
  )
}

export default Cover
