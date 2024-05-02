import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import HomeRight from '../components/HomeRight'
import Stories from '../components/Stories'

function HomePage() {
  return (
    <>
      <div className="flex flex-row">
        <div className="lg:w-1/3 ">
          <Header />
        </div>
        <div className=" w-2/3 grid sm:justify-center sm:w-[90%]">
          <Stories />

          <Post />
        </div>
      
          <HomeRight className="float-right" />
       
      </div>
    </>
  );
}

export default HomePage