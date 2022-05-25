import React from 'react'
import img from './Humaira-Rahaman.png'

const MyPortfolio = () => {
    return (
        <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
        <div className="">
          <div>
              <>
            <h1 className="text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 text-center cursor-pointer">
              Humaira Rahaman
            </h1>
            <img className=" h-1/2 " src={img} alt="" />
            <h3 className="text-4xl mt-8 font-bold text-black opacity-70  text-center mb-4 cursor-pointer">
              Become a full-stack web developer😎
            </h3>
            <p className=" mx-8 mb-6 text-3xl text-cyan-600 mt-16">
              How to achieve my goals🔥?
            </p>
            <p className=" mx-8 mb-6 text-3xl text-cyan-600 mt-16">
              name
            </p>
            <p className=" mx-8 mb-6 text-3xl text-cyan-600 mt-16">
             email
            </p>
            <p className=" mx-8 mb-6 text-3xl text-cyan-600 mt-16">
            educational background,
            </p>
            <p className=" mx-8 mb-6 text-3xl text-cyan-600 mt-16">
            ist of technologies or skills you have as a web developer
            </p>
            <p className=" mx-8 mb-6 text-3xl text-cyan-600 mt-16">
            Add links of three of your projects (live website links).
            </p>
            <p className="text-blue-800 mx-8 ">
              I set my routine and try to use my time efficiently. I am learning
              many other topics and Patrice properly day by day. I leave all of my
              other social work to achieve my goals. I am very passionate and
              highly interested in working in a reputed and leading hi-tech
              industry . Since I am a computer science graduate, I want to build
              my career by using cutting-edge technology and working in a
              development -oriented job. I have more than a year of work
              experience as a web designer and developer. I am highly skilled in
              HTML5, CSS3, Bootstrap 4, Tailwind, etc. I am also interested in
              Shopify's problem -solving. I am confident that I will be able to
              achieve my objectives and join the best software company.
            </p>
           
            </>
          </div>
        </div>
      </section>
    );
};

export default MyPortfolio;