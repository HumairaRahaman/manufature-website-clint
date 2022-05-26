import React, { useState } from "react"

const AllOrderCard = ({ order, index }) => {
  const [value, setValue] = useState("");

  let { _id, product, orderQuantity, price, orderStatus } = order;
  const [buttonText, setButtonText] = useState(orderStatus);

  console.log(order);

  const handelStatus = (e) => {
    e.preventDefault();
    orderStatus = "sipping";

    
    const status = {
      orderStatus: orderStatus,
    };

    fetch(`https://safe-headland-62485.herokuapp.com/orders/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        setButtonText("sipping");
        console.log(data);
      });
  };

  localStorage.setItem("buttonText", "sipping");
  return (
    <tr>
      <th>{index + 1}</th>
      <td className=" text-xs sm:text-md">{product}</td>
      <td className=" sm:table-cell hidden">{orderQuantity}</td>
      <td className=" lg:table-cell hidden">${price}</td>
      {/* <td><button className="btn btn-xs">pending</button>
      <button className="btn btn-xs">Remove User</button></td> */}
      {/* {myOrder.price && !myOrder.paid && (
        <Link to={`/dashboard/payment/${myOrder._id}`}>
          <button className=" btn btn-xs btn-success">Pay</button>
        </Link>
      )} */}
      <td>
        {order.paid}
        {order.price && !order.paid && (
          <button className=" btn btn-xs text-white btn-success">unPaid</button>
        )}
        {order.price && order.paid && (
          <div>
            <p>
              <input
                type="submit"
                onClick={(e) => handelStatus(e)}
                className="btn btn-xs  text-success"
                value={buttonText}
              />
            </p>

            {/* <p>
                        Transaction id:{" "}
                        <span className=" text-success">
                          {order.transactionId}
                        </span>{" "}
                      </p> */}
          </div>
        )}
      </td>
    </tr>
  );
};

export default AllOrderCard;
