import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import HomeRight from '../components/HomeRight'
import Stories from '../components/Stories'

function HomePage() {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-64">
          <Header />
        </div>
        <div className="h-full border-l border-gray-300"></div>
        <div className=" w-[1000px]">
          <Stories />
          <hr />
          <Post />
        </div>
        <HomeRight className="float-right hidden md:block" />
      </div>
    </>
  );
}

export default HomePage