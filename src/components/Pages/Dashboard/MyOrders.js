import React from "react"
import { Link } from "react-router-dom"
import useMyOrder from "../../../hooks/useMyOrder"

const MyOrders = () => {
  const [myOrders, setMyOrders] = useMyOrder()
  // const [userOrders, setUserOrders] = useState([]);
  
  // const [user] = useAuthState(auth);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     fetch(`http://localhost:5000/orders?user=${user.email}`, {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => {
  //         console.log("res", res);
  //         if (res.status === 401 || res.status === 403) {
  //           signOut(auth);
  //           localStorage.removeItem("accessToken");
  //           navigate("/");
  //         }

  //         return res.json();
  //       })
  //       .then((data) => {
  //         setUserOrders(data);
  //       });
  //   }
  // }, [user]);
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
            {myOrders.map((myOrder, index) => (
              <tr key={myOrder._id}>
                <th>{index + 1}</th>
                <td>{myOrder.product}</td>
               
                <td>{myOrder.orderQuantity}</td>
                <td>${myOrder.price}</td>
                <td>
                  {myOrder.price && !myOrder.paid && (
                    <Link to={`/dashboard/payment/${myOrder._id}`}>
                      <button className=" btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {myOrder.price && myOrder.paid && (
                    <div>
                      <p>
                        <span className=" text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className=" text-success">
                          {myOrder.transactionId}
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
