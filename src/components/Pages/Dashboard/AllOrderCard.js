import React, { useState } from "react";

const AllOrderCard = ({ order, index }) => {
  // const [value,setValue] = ([])
  const [buttonText, setButtonText] = useState("");
  const {_id, product, orderQuantity, price,orderStatus } = order;
  // orderStatus = "sipping"
  // console.log(orderStatus);

  //  const handelStatus = (e)=>{
  //    e.preventDefault();
  //   //  value = true;
  //   setValue(e.target.value);

  //   console.log(value);
  //  }


    const handelStatus=(e)=>{
      // e.preventDefault();
     let  orderStatus = "sipping"
  console.log(orderStatus);
      const value = e
      e = "sipping";

console.log(value);
console.log(e);
    const status = {
      orderStatus: orderStatus,
      
     };

        fetch(`http://localhost:5000/orders/${_id}`,{
            method: 'PUT',
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(status),

        }).then(res=>res.json())
        .then(data=>{
            
            console.log(data);
        })
      }
  
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
                onClick={() => handelStatus("paid")}
                className="btn btn-xs  text-success"
                value="paid"
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
