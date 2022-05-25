import React from 'react'
import useProduct from '../../../hooks/useProduct'
import ManageProductCard from './ManageProductCard'

const ManageProducts = () => {
    const [products, setProducts] = useProduct([])

    const handelDelete = (id) => {
   
      if (true) {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
          method: "DELETE",
          
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = products.filter((product) => product._id !== id);
  
            setProducts(remaining);
          });
      }
    };
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
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product,index) => (
              <ManageProductCard  index={index} handelDelete={handelDelete}  key={product._id} product={product}></ManageProductCard>
            ))}
           
          </tbody>
        </table>
      </div>
   </div>
    );
};

export default ManageProducts;