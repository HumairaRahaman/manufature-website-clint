import React from 'react'
import { Link } from 'react-router-dom'

const MyOrdersRow = ({index,myOrder,deletingOrder,setDeletingOrder}) => {
    const {_id, product,orderQuantity,price,paid,transactionId} = myOrder;
    // const {_id} = deletingOrder;
console.log(deletingOrder);
console.log(myOrder);
//     const handelDelete = () => {
//     if (true) {
//       const url = `http://localhost:5000/orders/${_id}`;
//       fetch(url, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//             if (data.deletedCount) {
//                 toast.success(`Order ${product} is Deleted.`);
//                 setDeletingOrder(null)
//                 // refetch();
//               }
//         });
//     }
//   };

    return (
        
        <tr >
                <th>{index + 1}</th>
                <td className=" text-xs sm:text-md md:text-lg">
                  {product}
                </td>

                <td className=" lg:table-cell hidden ">
                  {orderQuantity}
                </td>
                <td className="hidden sm:table-cell">${price}</td>
                <td>
                  {price && !paid && (
                    <>
                      <Link to={`/dashboard/payment/${myOrder._id}`}>
                        <button className=" btn btn-xs text-white btn-success">
                          Pay
                        </button>
                      </Link>

                      <label
                      onClick={() => setDeletingOrder(myOrder)} 
                        htmlFor="delete-modal"
                        className="btn btn-xs text-white bg-red-600 ml-3"
                      >
                        Delete
                      </label>
                      </>
                  )}
                </td>
              
              </tr>
                
    );
};

export default MyOrdersRow;