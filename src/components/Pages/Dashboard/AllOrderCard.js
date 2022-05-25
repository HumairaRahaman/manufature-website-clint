import React, { useState } from "react"

const AllOrderCard = ({ order, index }) => {
  // const [value,setValue] = ([])
  const [buttonText, setButtonText] = useState("pending");
  const { product, orderQuantity, price } = order;
  console.log(order.paid);

  //  const handelStatus = (e)=>{
  //    e.preventDefault();
  //   //  value = true;
  //   setValue(e.target.value);

  //   console.log(value);
  //  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product}</td>
      <td>{orderQuantity}</td>
      <td>{price}</td>
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
          <button className=" btn btn-xs btn-success">unPaid</button>
        )}
        {order.price && order.paid && (
          <div>
            <p>
              <span
                onClick={() => setButtonText("shipping")}
                className=" text-success"
              >
                {buttonText}
              </span>
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
