import React from 'react'

const Subscribe = () => {
    return (
        <div className="2xl:mx-auto 2xl:container mx-4 py-16 ">
      <div className=" mx-6 flex items-center justify-center rounded-lg  bg-gradient-to-r from-blue-100 to-amber-200 ">
     
        <div className="bg-cyan-100 shadow-xl shadow-cyan-400 bg-opacity-20 md:my-12 lg:py-16 py-10 w-full md:mx-10 md:px-12 px-4 flex flex-col items-center justify-center  ">
          <h1 className="pb-2 text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 text-center mb-4 cursor-pointe">
            Don’t miss our Update!
          </h1>
          <p className="text-base leading-normal text-center text-gray-800 mt-6">
            Subscribe to your newsletter to stay in the loop. Our newsletter is
            sent once in <br />a week on every friday so subscribe to get latest
            news and updates.
          </p>
          <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
            <input
              className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
              placeholder="Email Address"
            />
            <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto text-gray-800 bg-white py-4 px-6 hover:bg-opacity-75">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Subscribe;