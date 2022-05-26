import React from "react"

const ManageProductCard = ({ product, index, handelDelete }) => {
  const { _id,name, img, price, a_quantity } = product;
  console.log(product._id);
  console.log(handelDelete._id);
  return (
    <tr>
      <th>{index + 1}</th>
      <td className=" text-xs sm:text-md">{name}</td>

      <td className="md:table-cell hidden ">{a_quantity}</td>
      <td className="lg:table-cell hidden">${price}</td>
      <td className=" sm:table-cell hidden">
        <div class="avatar">
          <div class="w-16 rounded">
            <img
              src={img}
              alt={name}
            />
          </div>
        </div>
      </td>

      <td>
        <label htmlFor="delete-modal" className="btn btn-xs text-white bg-red-600 ml-3">
          Delete
        </label>

        <input type="checkbox" id="delete-modal" className="modal-toggle " />
        <div className="modal modal-middle sm:modal-middle ">
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
                onClick={() => handelDelete(_id)}
                htmlFor="delete-modal"
                className="btn text-white bg-green-600"
              >
                ok
              </label>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ManageProductCard;
