import React from 'react'

const RecentOrders = () => {
    return (
        <div className=" rounded-lg shadow-lg shadow-amber-100 ">
      <table className="table-auto w-full  ">
      <thead className="  bg-gray-100 rounded-lg ">
          <tr className="">
            <td className="   text-sm text-[#3E3F48] px-2 py-5  text-left">
              <div className="inline-flex items-center justify-start space-x-1">
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
                  Name
                </p>
              </div>
            </td>
            <td className="text-sm hidden md:inline-flex lg:inline-flex sm:inline-flex  text-[#3E3F48] px-2 py-3 text-left">
              <div className=" items-center justify-start space-x-1">
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
                  Price
                </p>
              </div>
            </td>
            <td className=" text-sm text-[#3E3F48] px-2 py-5 text-left ">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br  from-amber-500 to-gray-500 text-left cursor-pointe">
                payment
              </p>
            </td>
            <td className=" inline-flex text-sm text-[#3E3F48] px-2 py-5  text-left">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-left cursor-pointe">
                Status
              </p>
            </td>
           
      
          </tr>
        </thead>
        <tbody className=" bg-yellow-50   text-left">
          <tr className=" border-b-2 border-amber-100">
           
           <td className="py-4 px-4 font-semibold  text-amber-900">Audi Q4 e-tron</td>
            <td className="hidden sm:inline-flex md:inline-flex font-semibold  text-amber-900">$400000</td>
            <td className="font-semibold text-lime-500">paid</td>
            <td><span className="sm:bg-lime-500 text-lime-600 text-xs sm:text-white px-2 py-1 font-semibold rounded-xl">Delivered</span></td>
           
            
          </tr>
          <tr className=" border-b-2 border-amber-100">
            <td className="py-4 px-4 font-semibold  text-amber-900">BMW i7</td>
            <td className="hidden sm:inline-flex font-semibold  text-amber-900 ">$3489000</td>
            <td className="font-semibold text-orange-400">Due</td>
            <td><span className="sm:bg-yellow-400 text-xs text-yellow-500 sm:text-white px-2 py-1 font-semibold rounded-xl">Pending</span></td>
          </tr>
          <tr className=" border-b-2 border-amber-100">
            <td className="py-4 px-4 font-semibold  text-amber-900">Lamborghini</td>
            <td className="hidden sm:inline-flex font-semibold  text-amber-900">$3456000</td>
            <td className="font-semibold text-lime-500">paid</td>
            <td><span className="sm:bg-red-600 text-red-600 text-xs sm:text-white px-2 py-1 font-semibold rounded-xl">Return</span></td>
          </tr>
          <tr className=" border-b-2 border-amber-100">
            <td className="py-4 px-4 font-semibold  text-amber-900">Mercedez GLB SUV</td>
            <td className="hidden sm:inline-flex font-semibold  text-amber-900">$340000</td>
            <td className="font-semibold text-orange-400">Due</td>
            <td><span className="sm:bg-cyan-600 text-cyan-600 text-xs sm:text-white px-2 py-1 font-semibold rounded-xl">In Progress</span></td>
          </tr>
          <tr className=" border-b-2 border-amber-100">
            <td className="py-4 px-4 font-semibold  text-amber-900">LAND ROVER DISCOVERY</td>
            <td className="hidden sm:inline-flex font-semibold  text-amber-900">$3450000</td>
            <td className="font-semibold text-lime-500">paid</td>
            <td><span className="sm:bg-red-600 text-red-600 text-xs sm:text-white px-2 py-1 font-semibold rounded-xl">Return</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    );
};

export default RecentOrders;