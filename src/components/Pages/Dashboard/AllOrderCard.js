import React from "react"

const AllOrderCard = ({ order, index }) => {
  const { product, orderQuantity, price} = order;
  console.log(order.paid);
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
      <td>{order.paid}
      {order.price && !order.paid && (
                   
                      <button className=" btn btn-xs btn-success">unPaid</button>
                    
                  )}
                    {order.price && order.paid && (
                    <div>
                      <p>
                        <span className=" text-success">Pending</span>
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
