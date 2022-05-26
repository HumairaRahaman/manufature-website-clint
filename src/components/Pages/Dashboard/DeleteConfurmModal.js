import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfurmModal = ({deletingProduct,refetch,setDeletinProduct}) => {
    const {name,_id} = deletingProduct;
    console.log(name);
    const handelDelete = () => {
        fetch(`https://safe-headland-62485.herokuapp.com/products/${_id}`,{
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              toast.success(`Product:${name} is Deleted.`);
              setDeletinProduct(null)
              refetch();
            }
          });
      };
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle " />
        <div className="modal modal-middle sm:modal-middle ">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-orange-500">
              Are you sure you wants to Delete ${name}!
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
        </div>
    );
};

export default DeleteConfurmModal;