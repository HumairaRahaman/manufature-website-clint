import React from 'react'
import { toast } from 'react-toastify'

const DeleteOrderModal = ({setDeletingOrder,deletingOrder,myOrders} ) => {
    console.log(myOrders[0]._id);
const {product,_id} = deletingOrder;
console.log(_id);
    const handelDelete = () => {

if(myOrders[0]._id === _id){
    if (true) {
        const url = `http://localhost:5000/orders/${_id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
              if (data.deletedCount) {
                  toast.success(`Order:${product} is Deleted.`);
                  setDeletingOrder(null)
                  // refetch();
                }
          });
}
        
        }
        else{
            return
        }
      };
    return (
        <>
        <input
        type="checkbox"
        id="delete-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-orange-500">
            Are you sure you wants to Delete!
          </h3>

          <div className="modal-action">
            <label
              htmlFor="delete-modal"
              className="btn text-white bg-red-600"
            >
              no
            </label>
            <label
              onClick={() => handelDelete()}
              htmlFor="delete-modal"
              className="btn text-white bg-green-600"
            >
              ok
            </label>
          </div>
        </div>
      </div>
      </>
    );
};

export default DeleteOrderModal;