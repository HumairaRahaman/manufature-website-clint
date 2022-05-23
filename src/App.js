import React from "react"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Login from "./components/Login/Login"
import RequireAdmin from "./components/Login/RequireAdmin"
import RequireAuth from "./components/Login/RequireAuth"
import SignUp from "./components/Login/SignUp"
import AddProduct from "./components/Pages/Dashboard/AddProduct"
import AddReview from "./components/Pages/Dashboard/AddReview"
import AllOrders from "./components/Pages/Dashboard/AllOrders"
import Dashboard from "./components/Pages/Dashboard/Dashboard"
import ManageProducts from "./components/Pages/Dashboard/ManageProducts"
import MyOrders from "./components/Pages/Dashboard/MyOrders"
import MyProfile from "./components/Pages/Dashboard/MyProfile"
import Payment from "./components/Pages/Dashboard/Payment"
import Users from "./components/Pages/Dashboard/Users"
import Homepage from "./components/Pages/Homepage/Homepage"
import AllProduct from "./components/Pages/Product/AllProduct"
import Purchase from "./components/Pages/Product/Purchase"
import AllReviews from "./components/Pages/Reviews/AllReviews"
import Footer from "./components/Shared/Footer/Footer"
import Header from "./components/Shared/Header/Header"

const App = () => {
  return (
    <div className=" max-w-7xl mx-auto px-12 ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path='/reviews' element={<AllReviews></AllReviews>}></Route>
        <Route path='/products' element={<AllProduct></AllProduct>}></Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="/purchase/:productId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
         <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          
          <Route path="history" element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
               </RequireAdmin>
            }
          ></Route>
          <Route
            path="allOrders"
            element={
              <RequireAdmin>
                <AllOrders></AllOrders>
               </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
               </RequireAdmin>
            }
          ></Route>
          
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default App;
