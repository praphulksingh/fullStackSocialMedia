import React from 'react'
import { Link } from 'react-router-dom'

function Stories() {
  return (
    <section className=" min-h-[150px] pl-4 md:flex flex-col">
      <div className="pt-10 pb-1"></div>
      <ul className="md:flex md:space-x-8">
        <li className="flex flex-col w-[72px] space-y-2">
          <div className="bg-gradient-to-tr from-yellow-500 to-pink-600 rounded-full p-1 relative">
            <Link
              className="block bg-white p-1 rounded-full transform transition hover:-rotate-12 duration-300"
              at="/"
            >
              <img
                className="h-14 w-14 rounded-full"
                src="https://i.ibb.co/yhh0Ljy/profile.jpg"
                alt="image"
              />
            </Link>
            <button className="transition duration-500 absolute bottom-0 right-0 bg-blue-700 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center hover:bg-blue-900">
              +
            </button>
          </div>
          <p>you</p>
        </li>
      </ul>
    </section>
  );
}

export default Stories