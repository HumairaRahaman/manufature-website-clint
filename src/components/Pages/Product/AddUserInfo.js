import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import auth from "../../../firebase.init"

const AddUserInfo = ({ product }) => {
  const { _id, o_quantity, a_quantity, name, price } = product;
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const [inputOrder, setInputOrder] = useState({});
  const [inputQuantity, setQuantity] = useState(0);

  console.log(inputOrder.order);

  const handelValue = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    const orderQuantity = data.order;
    console.log(orderQuantity);

    if (orderQuantity > a_quantity || orderQuantity < o_quantity) {
      toast.error("plz Input the write value", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
      return;
    } else {
      const userOrder = {
        orderId: _id,
        product: name,
        orderQuantity: inputQuantity,
        price,
        user: user.email,
        userName: user.displayName,
        phone: data.phone,
      };
      const url = `http://localhost:5000/orders`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userOrder),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);

          toast.info("Add your product Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000,
          });
          // if((data.order > a_quantity && data.order < o_quantity ) ||data.order > a_quantity || data.order < o_quantity ){

          // }
          // else{
          //
          // }
        });
    }
    setInputOrder(data);
    console.log(data);
    e.target.reset();
    //toast
  };

  return (
    <div className=" justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="my-8">
        <div className="py-8 px-10 m-8 sm:m-0 sm:py-12 sm:px-12 bg-white  rounded-2xl shadow-xl ">
          <div>
            <h1 className="text-3xl text-center mb-6 text-transparent bg-clip-text font-bold bg-gradient-to-br from-amber-500 to-gray-500  cursor-pointe">
              Please add your Product information!
            </h1>
          </div>
          <div className="space-y-4">
            <input
              placeholder="Name"
              readOnly
              value={user?.displayName}
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              readOnly
              placeholder="Email"
              value={user?.email}
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              {...register("email", { required: true })}
            />
            {/* <textarea
              placeholder="Description"
                className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
                {...register("description",{ required: true})}
              /> */}
            <input
              placeholder="Address"
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              type="text"
              {...register("address")}
            />
            <input
              placeholder="Phone"
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              type="number"
              {...register("phone")}
            />
            <input
              onChange={handelValue}
              value={inputQuantity}
              placeholder="Order Quantity"
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              type="text"
              // {...register("order")}
            />
            {/* <input
              placeholder="Photo URL"
                className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
                type="text"
                {...register("img")}
                disabled={o_quantity > a_quantity}
              /> */}
            <div className="text-center mt-6">
              {
                // inputOrder?.order > a_quantity
                parseInt(inputQuantity) < parseInt(o_quantity) ||
                parseInt(inputQuantity) > parseInt(a_quantity) ? (
                  <input
                    disabled
                    className="font-bold  py-4 px-14 text-gray-800 rounded-full  bg-gray-400 "
                    type="submit"
                  />
                ) : (
                  <input
                    className="font-bold  py-4 px-14 text-gray-800 rounded-full  bg-lime-200 "
                    type="submit"
                  />
                )
              }
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUserInfo;
