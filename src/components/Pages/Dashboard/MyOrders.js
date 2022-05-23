import { signOut } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import auth from "../../../firebase.init"

const MyOrders = () => {
  const [userOrders, setUserOrders] = useState([]);
  
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?user=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }

          return res.json();
        })
        .then((data) => {
          setUserOrders(data);
        });
    }
  }, [user]);
  return (
    <div>
      {/* <h2>MyAppointments: {appointments.length}</h2> */}

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              
              
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {userOrders.map((userOrder, index) => (
              <tr key={userOrder._id}>
                <th>{index + 1}</th>
                <td>{userOrder.product}</td>
               
                <td>{userOrder.price}</td>
                <td>{userOrder.orderQuantity}</td>
                <td>
                  {userOrder.price && !userOrder.paid && (
                    <Link to={`/dashboard/payment/${userOrder._id}`}>
                      <button className=" btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {userOrder.price && userOrder.paid && (
                    <div>
                      <p>
                        <span className=" text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className=" text-success">
                          {userOrder.transactionId}
                        </span>{" "}
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
