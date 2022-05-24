import React from "react"
import useMyOrder from "../../../hooks/useMyOrder"

const OrderButton = () => {
  const [myOrders, setMyOrders] = useMyOrder();
 
  return (
    <div>
      {myOrders.map((myOrder) => (
        <div key={myOrder._id}>
             <h2>{myOrder.price}</h2>
          {myOrder.price  && (
             
              <button className=" btn btn-xs btn-success">{}</button>
            
          )}
          { myOrder.paid && (
            <div>
              <p>
                <span className=" text-success">Paid</span>
              </p>
              <p>
                Transaction id:{" "}
                <span className=" text-success">{myOrder.transactionId}</span>{" "}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderButton;
