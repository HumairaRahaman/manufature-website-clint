import React from "react"

const Reviews = ({ review }) => {
  const {name, reviews, img, rating } = review;
  return (
    <div>
     
      <div className=" shadow-lg rounded-2xl w-auto bd-white p-4">
        <div className="flex flex-col gap-3 justify-between items-center">
          <div className=" flex-shrink-0">
            <img
              className="mx-auto object-cover rounded-full w-16 h-16 "
              src={img}
              alt="coin"
            />
          </div>

          <span className=" text-gray-600 font-medium">{name}</span>
          <span className=" text-gray-400 text-lg">{rating}<span>⭐</span></span>
          <div className="  overflow-hidden">
            <span className=" text-gray-400 text-lg">
              {reviews?.length > 80 ? reviews?.slice(0, 80) + "..." : reviews}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
