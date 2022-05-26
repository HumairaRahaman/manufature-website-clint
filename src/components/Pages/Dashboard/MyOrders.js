import React, { useState } from "react"
import useMyOrder from "../../../hooks/useMyOrder"
import DeleteOrderModal from "./DeleteOrderModal"
import MyOrdersRow from "./MyOrdersRow"

const MyOrders = () => {
  const [myOrders, setMyOrders] = useMyOrder([]);

  const [deletingOrder, setDeletingOrder] = useState(null);

  //Delete
  // const handelDelete = () => {
  //   if (true) {
  //     const url = `http://localhost:5000/orders/${_id}`;
  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //           if (data.deletedCount) {
  //               toast.success(`Order is Deleted.`);
  //               setDeletingOrder(null)
  //               // refetch();
  //             }
  //       });
  //   }
  // };

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
              <MyOrdersRow key={myOrder._id} myOrder={myOrder} index={index} deletingOrder={deletingOrder} setDeletingOrder={setDeletingOrder}  ></MyOrdersRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
                <DeleteOrderModal
                myOrders={myOrders}
                  setDeletingOrder={setDeletingOrder}
                  deletingOrder={deletingOrder}
                ></DeleteOrderModal>
              )}
    </div>
  );
};

export default MyOrders;
