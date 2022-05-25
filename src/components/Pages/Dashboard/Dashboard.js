import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, NavLink, Outlet } from "react-router-dom"
import auth from "../../../firebase.init"
import useAdmin from "../../../hooks/useAdmin"

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer mt-16 drawer-mobile px-0">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-cyan-500 my-4 mx-auto">
          Welcome to your Dashboard
        </h2>
        <div className="flex-none lg:hidden">
        <label for="dashboard-sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side flex-none hidden lg:block">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto  w-52 bg-base-100  text-base-content">
        <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <Link to="/dashboard">My Profile</Link>
          </li>
        {!admin && <>  <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/myOrder">My Orders</NavLink>
          </li>
          <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/review">Add Review</NavLink>
          </li>
         
          </>}
         
         { admin && <>
          <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/users">Make Admin</NavLink>
          </li>
          <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/allOrders">All Orders</NavLink>
          </li>
          <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/addProduct">Add Product</NavLink>
          </li>
          <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/manageProduct">Manage Products</NavLink>
          </li>

         </>}
        </ul>
      </div>
      <div className="drawer-end lg:hidden">
    <label for="dashboard-sidebar" className="drawer-overlay "></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
     
    {!admin && <>  <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/myOrder">My Orders</NavLink>
          </li>
          <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/review">Add Review</NavLink>
          </li>
         
          </>}
          <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/history">My Profile</NavLink>
          </li>
         { admin && <>
          <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/users">All Users</NavLink>
          </li>
          <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/allOrders">All Orders</NavLink>
          </li>
          <li className="hover:bg-primary text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/addProduct">Add Product</NavLink>
          </li>
          <li className="hover:bg-primary  text-primary font-semibold hover:text-white hover:rounded">
            <NavLink to="/dashboard/manageProduct">Manage Products</NavLink>
          </li>

         </>}
      
    </ul>
    
  </div>
    </div>
  );
};

export default Dashboard;
