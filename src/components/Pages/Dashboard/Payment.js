import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import Spinner from "../../Local/Spinner/Spinner"
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe(
  "pk_test_51L1UL5IDjt5xsXzQ9irmx9apGbix0W3w1J1B42g4sZgai3SvG4E4urrq6e3lPu8CEOTMVEE4jMjtDbp8P2HVUVMJ00uouX4IGO"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
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
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 className="card-title">Please Pay for: {appointment.treatment}</h2>
          <p>
            Your Appointment:
            <span className=" text-cyan-700">{appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p>Please Pay: ${appointment.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
