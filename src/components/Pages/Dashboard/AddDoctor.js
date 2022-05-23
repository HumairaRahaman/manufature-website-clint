import React from "react"
import { useForm } from "react-hook-form"
import { useQuery } from "react-query"
import { toast } from "react-toastify"
import Spinner from "../../Local/Spinner/Spinner"

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  const imageStorageKey = '8bd264bafc0b0611019d6605a1603736';

  /**
   * 3 ways to store images
   * 1. Third party storage(Image DB)//Free open public storage is ok for patrice project.
   * 2.your own storage in your own server(file system)
   * 3.DataBase: MongoDB.
   * 
   * 
   * YUP: to validate file //search: yup file validation for react hook from
   * 
   */

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url,{
        method: 'POST',
        body: formData

    })
    .then(res=>res.json())
    .then(result=>{
        if(result.success){
            const img = result.data.url;
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                img: img
            }


            //send to your database

            fetch('http://localhost:5000/doctor',{
                method: 'POST',
                headers: {
                    'content-type':'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(inserted=>{
                if(inserted.insertedId){
                    toast.success('Doctor Added Successfully!');
                    reset();
                }
                else{
                    toast.error('Failed to add the Doctor');
                }
            })
        }
    })
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <h2 className="text-2xl">Add a new Doctor</h2>
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
            placeholder="Your Name"
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
            placeholder="Your Email"
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
            <span className="label-text">Specialty</span>
          </label>
          <select {...register("specialty")} className="select input-bordered w-full max-w-xs">
              {
                  services.map(service=><option
                  key={service._id}
                  value={service.name}
                  
                  >{service.name}</option>)
              }
            
            
          </select>
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
          className="btn w-full max-w-xs text-white font-semibold"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
