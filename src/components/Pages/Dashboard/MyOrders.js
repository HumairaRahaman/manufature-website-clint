import React from "react"
import { Link } from "react-router-dom"
import useMyOrder from "../../../hooks/useMyOrder"

const MyOrders = () => {
  const [myOrders, setMyOrders] = useMyOrder([]);
  // const [myItems, setMyItems] = useState([]);
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

  //Delete

  const handelDelete = (id) => {
   
    if (true) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myOrders.filter((myOrder) => myOrder._id !== id);

          setMyOrders(remaining);
        });
    }
  };
  return (
    <div>
      {/* <h2>MyAppointments: {appointments.length}</h2> */}

      {/* table */}
      <div className="overflow-x-auto mx-8">
        <table className="table w-full">
      
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="lg:table-cell hidden ">Quantity</th>
              <th className="hidden sm:table-cell">Price</th>

              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
           
            {myOrders.map((myOrder, index) => (
              <tr key={myOrder._id}>
                <th>{index + 1}</th>
                <td className=" text-xs sm:text-md md:text-lg">{myOrder.product}</td>

                <td className=" lg:table-cell hidden ">{myOrder.orderQuantity}</td>
                <td className="hidden sm:table-cell">${myOrder.price}</td>
                <td>
                  {myOrder.price && !myOrder.paid && (
                    <>
                      <Link to={`/dashboard/payment/${myOrder._id}`}>
                        <button className=" btn btn-xs btn-success">Pay</button>
                      </Link>
                      
                    
                        <label htmlFor="delete-modal" className="btn btn-xs bg-red-600 ml-3">
                        Delete
                        </label>

                        <input
                          type="checkbox"
                          id="delete-modal"
                          className="modal-toggle"
                        />
                        <div className="modal modal-bottom sm:modal-middle">
                          <div className="modal-box">
                            <h3 className="font-bold text-lg text-orange-500">
                              Are you sure you wants to Delete!
                            </h3>
                           
                            <div className="modal-action">
                              <label htmlFor="delete-modal" className="btn text-white bg-red-600">
                                no
                              </label>
                              <label onClick={() => handelDelete(myOrder._id)} htmlFor="delete-modal" className="btn text-white bg-green-600">
                                ok
                              </label>
                            </div>
                          </div>
                        </div>
                     
                    </>
                  )}
                  {myOrder.price && myOrder.paid && (
                    <div>
                      <p>
                        <span className=" text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:
                        <span className=" block text-2xs lg:text-xs lg:inline-flex text-success">
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
