import React from "react"

const ManageProductCard = ({deletingProduct, product, index, setDeletinProduct,refetch }) => {
  const { _id,name, img, price, a_quantity,email } = product;
  console.log(product._id);
//  const {name,email}=deletingDoctor
 

 
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
      {/* */}
      <td>
        <label onClick={() => setDeletinProduct(product)}   htmlFor="delete-modal" className="btn btn-xs text-white bg-red-600 ml-3">
          Delete
        </label>

        
      </td>
    </tr>
  );
};

export default ManageProductCard;
