import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, Outlet } from "react-router-dom"
import auth from "../../../firebase.init"
import useAdmin from "../../../hooks/useAdmin"

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className="text-2xl font-bold text-secondary">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto  w-52 bg-base-100 text-base-content">
          <li className="hover:bg-secondary font-semibold hover:text-white hover:rounded">
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li className="hover:bg-secondary font-semibold hover:text-white hover:rounded">
            <Link to="/dashboard/review">Add Review</Link>
          </li>
          <li className="hover:bg-secondary font-semibold hover:text-white hover:rounded">
            <Link to="/dashboard/history">My Profile</Link>
          </li>
         { admin && <>
          <li className="hover:bg-secondary font-semibold hover:text-white hover:rounded">
            <Link to="/dashboard/users">All Users</Link>
          </li>
          <li className="hover:bg-secondary font-semibold hover:text-white hover:rounded">
            <Link to="/dashboard/allOrders">All Orders</Link>
          </li>
          <li className="hover:bg-secondary font-semibold hover:text-white hover:rounded">
            <Link to="/dashboard/addProduct">Add Product</Link>
          </li>
          <li className="hover:bg-secondary font-semibold hover:text-white hover:rounded">
            <Link to="/dashboard/manageProduct">Manage Products</Link>
          </li>

         </>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
