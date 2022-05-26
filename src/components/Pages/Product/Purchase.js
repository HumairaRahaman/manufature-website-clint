import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import useProductDetails from "../../../hooks/useProductDetails"
import AddUserInfo from "./AddUserInfo"

const Purchase = () => {
  const inputRef = useRef();

  const { productId } = useParams();
  const [product] = useProductDetails(productId);
  const storeQuantity = product.quantity;

  const [productQuantity, setProductQuantity] = useState(storeQuantity);
  useEffect(() => {
    setProductQuantity(storeQuantity);
  }, [storeQuantity]);

  const updateHandel = async (id) => {
    setProductQuantity(productQuantity - 1);
    const url = `https://safe-headland-62485.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: 1 }),
    }).then((res) => res.json());
    //toast
    toast.info("Update Your Quantity Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  // const updateHandelQuantity = async (id, event) => {
  //   event.preventDefault();

  //   let value = parseInt(inputRef.current.value);
  //   if (value <= 0) {
  //     toast.info("Please Insert the right value!", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     return;
  //   }
  //   //toast
  //   toast.info("Update Your Quantity Successfully!", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  //   setProductQuantity(productQuantity + value);
  //   console.log(value);
  //   const url = `https://safe-headland-62485.herokuapp.com/products/${id}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ quantity: -value }),
  //   }).then((res) => res.json());
  //   inputRef.current.value = "";
  // };
  return (
    <div className=" pt-20 gap-4 grid grid-cols-1 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 justify-items-center bg-gradient-to-t from-yellow-100 via-gray-300 to-amber-200">
        <div className=" z-0 rounded-lg w-full h-full  flex justify-end items-right">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-transparent text-primary text-xl font-bold  text-right ">
            Add user Information
          </div>
          <div className="collapse-content bg-transparent  ">
            <AddUserInfo key={product._id} product={product}></AddUserInfo>
          </div>
        </div>
      </div>
      <div className="bg-white  shadow-lg mx-4 my-8 shadow-gray-100 rounded-2xl  bd-white p-4">
        <div className=" flex flex-col gap-4 justify-between mx-4">
          <div className=" flex-shrink-0 mx-auto items-center flex">
            <img
              className="mx-auto object-cover rounded-lg bg-cover  w-full h-64 "
              src={product.img}
              alt="coin"
            />
          </div>
          <div className="flex justify-between ">
            <span className="bg-cyan-300 font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 text-center cursor-pointer text-gray-600">
              {product.name}
            </span>
            <span className="   font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-amber-500 text-center cursor-pointer">
              Price: {product.price} Taka
            </span>
          </div>
          <span className=" text-gray-400 text-lg">{product.description}</span>
          <div className=" flex justify-between ">
            <p className="flex items-start font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 text-center cursor-pointer">
              Quantity: {product.o_quantity} (min)
            </p>
            <p className="flex items-start font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointer">
           Available Quantity{product.a_quantity} <span></span>
            </p>
          </div>
          <button
            onClick={() => updateHandel(product._id)}
            className=" py-1 px-6 mx-24 text-white font-semibold rounded-full rounded-tr-none  bg-gradient-to-r from-slate-400 via-blue-400 to-gray-400 hover:bg-gradient-to-r hover:from-slate-500 hover:via-lime-500 hover:to-gray-600 "
          >
            <ToastContainer></ToastContainer>
            Delivered
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Purchase;
