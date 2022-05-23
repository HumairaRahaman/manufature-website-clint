import React from 'react'
import useOrder from '../../../hooks/useOrder'
import AllOrderCard from './AllOrderCard'

const AllOrders = () => {
    const [orders,setOrders] = useOrder()
    return (
        <div>
         <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>orderQuantity</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <AllOrderCard  index={index}  key={order._id} order={order}></AllOrderCard>
            ))}
          </tbody>
        </table>
      </div>
   </div>
    );
};

export default AllOrders;