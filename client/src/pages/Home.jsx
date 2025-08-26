import React from 'react'
import dashboard from '../assets/Dashboard-home-page.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div className="flex flex-col px-6 bg-gray-50 w-full ">
      {/* Hero Section bg-gradient-to-r from-sky-500 to-blue-600 */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 max-h-screen justify-center items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">Our App</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A simple and responsive MERN app dashboard built with{" "}
            <span className="font-semibold">React + Tailwind CSS </span>.
          </p>
          <Link to={'/login'} className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition cursor-pointer">
            Login Here
          </Link>
          {' '}
          <Link to={'/register'} className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition cursor-pointer">
            Register Here
          </Link>
        </div>
        <div className="flex justify-center mb-8 md:mb-0  my-4">
          <img
            src={dashboard}
            alt="Dashboard preview"
            className="rounded-lg shadow-lg w-1/2  md:w-full sm:mx-5"
          />
        </div>
      </section>

      {/* Features Section */}
      

      {/* Call to Action Section */}
     
    </div>
    </>
  )
}

export default Home