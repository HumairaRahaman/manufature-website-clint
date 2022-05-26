import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
      const imageStorageKey = "8bd264bafc0b0611019d6605a1603736";
      const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              const img = result.data.url;
              const product = {
                name: data.name,
                email: data.email,
                price: data.price,
                description: data.description,
                o_quantity: data.o_quantity,
                a_quantity: data.a_quantity,
                img: img,
              };
    
              //send to your database
    
              fetch("https://safe-headland-62485.herokuapp.com/product", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(product),
              })
                .then((res) => res.json())
                .then((inserted) => {
                  if (inserted.insertedId) {
                    toast.success("Product Added Successfully!");
                    reset();
                  } else {
                    toast.error("Failed to add the Product");
                  }
                });
            }
          });
      };
    return (
        <div className=" bg-amber-50 flex mt-11 mx-7 md:mx-20 rounded-2xl shadow-lg mb-64 lg:mb-20 shadow-lime-50 py-5">
        <div className="md:mx-auto mx-5  py-8">
          <h2 className="text-2xl text-center">Add Product</h2>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
  
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                type="email"
                placeholder="User Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
  
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
                type="text"
                placeholder="Your Rating"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.price?.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Order quantity</span>
              </label>
              <input
                {...register("o_quantity", {
                  required: {
                    value: true,
                    message: "Order quantity is Required",
                  },
                })}
                type="text"
                placeholder="Order quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.o_quantity?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.o_quantity?.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                {...register("a_quantity", {
                  required: {
                    value: true,
                    message: "Available quantity is Required",
                  },
                })}
                type="text"
                placeholder="Available quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.a_quantity?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.a_quantity?.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Comments</span>
              </label>
              <textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
                type="text"
                placeholder="Product Description"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.description?.message}
                  </span>
                )}
              </label>
            </div>
  
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
                type="file"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
  
            <input
              className="btn w-full my-4 max-w-xs text-white font-semibold bg-cyan-300 border-0 hover:bg-cyan-600"
              type="submit"
              value="Add Product"
            />
          </form>
        </div>
      </div>
    );
};

export default AddProduct;