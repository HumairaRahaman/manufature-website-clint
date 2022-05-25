import React from "react"
import { Link } from "react-router-dom"
import useProduct from "../../../hooks/useProduct"
import useReview from "../../../hooks/useReview"
import ProductCard from "../Product/ProductCard"
import Reviews from "../Reviews/Reviews"
import Brand from "./Brand"
import BusinessSummary from "./BusinessSummary"
import RecentOrders from "./RecentOrders"
import Subscribe from "./Subscribe"

const Homepage = () => {
  const [products, setProducts] = useProduct();
  const [reviews, setReviews] = useReview();
  return (
    <div className=" pb-8 h-auto w-full bg-gradient-to-t from-yellow-100 via-gray-200 to-amber-100 ">
      <div className="flex items-center md:items-start flex-col-reverse  h-[34rem] pb-32 bg-center bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
        <div className=" w-full py-4 px-8 md:px-16 lg:px-28  md:w-1/2 ml-0 md:ml-14 lg:ml-14 xl:ml-14 ">
          <h1 className=" font-medium text-4xl text-center md:text-left sm:text-5xl md:text-3xl mt-8 md:mt-0 lg:mt-0 xl:mt-0 lg:text-4xl pb-0 md:pb-4 text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-yellow-600 md:from-gray-800 md:to-yellow-800  mb-4 cursor-pointe">
            You asked for it. You got it
          </h1>
          <p className="my-4 mb-8  md:mt-8 lg:mt-8 xl:mt-8 text-center md:text-left text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-yellow-100  ">
            The more you know, the better it looks… Cavalier. We’ll be
            there.Welcome to the State of Independence
          </p>
        </div>
      </div>
      <BusinessSummary></BusinessSummary>

      <div className=" mt-14 py-4 mx-8">
        <h2 className="pb-6 text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 text-center mb-4 cursor-pointe">
          My Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={index} product={product}></ProductCard>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link
            to="/products"
            className=" font-bold  py-4 px-14 text-gray-800 rounded-full rounded-tr-none bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-400 hover:via-blue-400 hover:to-gray-400 "
          >
            All Products
          </Link>
        </div>
      </div>
      <div className=" mt-14 py-4 mx-8">
        <h2 className="pb-6 text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500  text-center mb-4 cursor-pointe">
          My Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
          {reviews.map((review) => (
            <Reviews key={review._id} review={review}></Reviews>
          ))}
        </div>

      
      </div>

      <div className="mt-14 py-4 mx-8">
        <h2 className="pb-6 text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500  text-center mb-4 cursor-pointe">
          Recent Orders
        </h2>
        <RecentOrders></RecentOrders>
      </div>
      <div className="mt-14 py-4 mx-8">
        <h2 className="pb-6  text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500  text-center mb-4 cursor-pointe">
          Shop By Brand
        </h2>
        <Brand></Brand>
      </div>
      <div className="mt-14 py-4 mx-8">
       <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Homepage;
