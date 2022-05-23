import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const {_id, name, price, img, description, o_quantity,a_quantity } = product;
  
    const navigate = useNavigate()
    const navigateToProductDetail = id =>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div className="bg-gray-100 mb-8  md:mb-0 lg:mb-0 xl:mb-0 shadow-lg  shadow-gray-100 rounded-2xl  bd-white py-4 sm:p-0 p-4">
      <div className=" flex flex-col gap-4 justify-between mx-4">
        <div className=" flex-shrink-0 mx-auto items-center flex">
          <img
            className="mx-auto  object-cover rounded-lg bg-cover py-0 sm:py-4  w-full h-64 "
            src={img}
            alt=""
          />
        </div>
        <div className="flex justify-between ">
          <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-amber-500 text-center cursor-pointer text-gray-600">{name}</span>
          <span className="  font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-amber-500 text-center cursor-pointer"> Price: {price}Taka</span>
        </div>
        <div className="  overflow-hidden">
        <span className=" text-gray-400 text-lg">{description.length>180 ? description.slice(0,180) + '...' : description}</span>
 
        </div>
        <div className=" flex justify-between ">
          <p className="flex items-start font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 text-center cursor-pointer">
            <span>Order-Quantity: {o_quantity}(min)</span>
          </p>
          <p className="flex items-start font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointer">
          Available-Quantity: {a_quantity} <span></span>
          </p>

          
        </div>
        
        <button onClick={() =>navigateToProductDetail(_id)} className=" py-1 px-6 mx-24 text-white hover:rounded-full rounded-full  bg-gradient-to-r from-slate-400 via-blue-400 to-gray-400 hover:bg-gradient-to-r hover:from-slate-500 hover:via-lime-500 hover:to-gray-600 ">
        purchase
          </button>
      </div>
    </div>
        </div>
    );
};

export default ProductCard;