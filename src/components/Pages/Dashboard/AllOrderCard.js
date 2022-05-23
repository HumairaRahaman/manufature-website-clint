import React from 'react'

const AllOrderCard = ({ order,index }) => {
    const {product,orderQuantity,price} = order;
    return (
        <tr>
      <th>{index +1}</th>
      <td>{product}</td>
      <td>{orderQuantity}</td>
      <td>{price}</td>
      <td><button className="btn btn-xs">Remove User</button></td>
    </tr>
    );
};

export default AllOrderCard;