import React from 'react'
import img from './Humaira-Rahaman.png'

const MyPortfolio = () => {
    return (
        <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
        <div className="">
          <div>
              <>
            {/* <h1 className="text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 text-center cursor-pointer">
              Humaira Rahaman
            </h1> */}
            <img className=" h-1/2 " src={img} alt="" />
            <div  className=' rounded-lg shadow-lg shadow-purple-50 border-purple-300 border-2 px-4 py-8 my-4 mx-8'>
            <p className=" mx-8 mb-6 text-3xl  mt-16">
              <span className='bg-cyan-400 text-white p-1 rounded shadow-cyan-100 shadow-md'>Name:</span> <span className='text-amber-500'>Humaira Rahaman</span>
            </p>
            <p className=" mx-8 mb-6 text-3xl text-cyan-600 mt-16">
             <span className='bg-purple-400 text-white p-1 rounded shadow-purple-100 shadow-md'>Email:</span> <span className='text-amber-500'>humairamitul@gmail.com</span> 
            </p>
            <p className=" mx-8 mb-6 text-3xl text-cyan-600 mt-16">
            <span className='bg-blue-400 text-white p-1 rounded shadow-blue-100 shadow-md'>Education:</span> <span className='text-amber-500'>BSC In CSE</span>
            </p>
            </div>
           
            <div className=' rounded-lg shadow-lg border-amber-300 shadow-amber-50 border-2 px-4 py-8 my-4 mx-8' >
            <span className="space-y-2 text-3xl text-blue-600 mt-16">Skills:</span>
            <div className='flex flex-wrap'>
              <span className='text-md mx-1 my-1 font-bold text-white bg-cyan-600 rounded-full py-1/2 px-2'>HTML</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-amber-600 rounded-full py-1/2 px-2'>CSS</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-indigo-600 rounded-full py-1/2 px-2'>Tailwind Css</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-gray-600 rounded-full py-1/2 px-2'>NoSQl</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-lime-600 rounded-full py-1/2 px-2'>Java Script</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-yellow-600 rounded-full py-1/2 px-2'>Node.js</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-pink-600 rounded-full py-1/2 px-2'>Mongodb</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-green-600 rounded-full py-1/2 px-2'>React</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-purple-600 rounded-full py-1/2 px-2'>Bootstrap</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-blue-600 rounded-full py-1/2 px-2'>AJAX</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-violet-600 rounded-full py-1/2 px-2'>C</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-sky-600 rounded-full py-1/2 px-2'>C++</span>
              <span className='text-md mx-1 my-1 font-bold text-white bg-fuchsia-600 rounded-full py-1/2 px-2'>jQuery</span>
              </div>  
            </div>
            <div className=' rounded-lg border-lime-300 shadow-lg shadow-lime-50 border-2 px-4 py-8 my-4 mx-8' >
            <span className="space-y-2 text-3xl text-lime-600 mt-16">Projects Links:</span>
            <div className='flex flex-col'>
              <span className='text-md mx-1 my-1 font-bold  text-cyan-600 rounded-full py-1/2 px-2'>1.vehicle_zone_inventory:<span className='text-amber-500'>(https://vehicle-zone-inventory.web.app)</span></span>
              <span className='text-md mx-1 my-1 font-bold  text-cyan-600 rounded-full py-1/2 px-2'>2.Nutritionist_Service:<span className='text-amber-500'>(https://ind-nutri-fair.web.app)</span></span>
              <span className='text-md mx-1 my-1 font-bold  text-cyan-600 rounded-full py-1/2 px-2'>3.crypto_cafe:<span className='text-amber-500'>(https://cripto-cafe.netlify.app)</span></span>
           
             
              </div>  
            </div>
           
            
         
           
            </>
          </div>
        </div>
      </section>
    );
};

export default MyPortfolio;