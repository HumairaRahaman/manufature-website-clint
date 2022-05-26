import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import Spinner from "../../Local/Spinner/Spinner"
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe(
  "pk_test_51L2zaGHxvtnSXtdP2iXJx9pPuQsLWrdA18g7R1AkMwHFKEh7o48aes0PpAVvSqzAp58GQ1vEIUymJu1xUXSToZem00xV2J9mR5"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <>
     <div><h2>{id}</h2></div>
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello, {order.userName}
          </p>
          <h2 className="card-title">Please Pay for: {order.product}</h2>
          <p>
            Your Amount:
            <span className=" text-cyan-700">{order.price}</span> for Quantity:  
             {order.orderQuantity}
          </p>
          <p>Please Pay: {order.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
    </>
  );
};

export default Payment;
