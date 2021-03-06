import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import auth from "../../../firebase.init"

const AddReview = () => {
  const [user] = useAuthState(auth)
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
          const review = {
            name: data.name,
            email: data.email,
            rating: data.rating,
            reviews: data.reviews,
            img: img,
          };

          //send to your database

          fetch("https://safe-headland-62485.herokuapp.com/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Review Added Successfully!");
                reset();
              } else {
                toast.error("Failed to add the Review");
              }
            });
        }
      });
  };
  return (
    <div className="bg-cyan-50 px-8 md:px-0 flex mx-12 md:mx-28 lg:mb-28 mb-64 rounded shadow-lg  py-8">
      <div className="mx-auto">
        <h2 className="text-2xl text-center">Add Review</h2>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            readOnly
            value={user.displayName}
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
             readOnly
             value={user.email}
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
              <span className="label-text">Rating</span>
            </label>
            <input
              {...register("rating", {
                required: {
                  value: true,
                  message: "Rating is Required",
                },
              })}
              type="text"
              placeholder="Your Rating"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.rating?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.rating.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Comments</span>
            </label>
            <textarea
              {...register("reviews", {
                required: {
                  value: true,
                  message: "Comments is Required",
                },
              })}
              type="text"
              placeholder="Your Comments"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.comments?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.comments.message}
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
            className="btn my-8 w-full max-w-xs text-white font-semibold bg-cyan-300 border-0 hover:bg-cyan-600"
            type="submit"
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
