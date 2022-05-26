import React from 'react'
import useProduct from '../../../hooks/useProduct'
import ManageProductCard from './ManageProductCard'

const ManageProducts = () => {
    const [products, setProducts] = useProduct([])

    const handelDelete = (id) => {
      console.log(id);
   
      if (true) {
        const url = `https://safe-headland-62485.herokuapp.com/products/${id}`;
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
        <div className='mx-8 lg:mb-8 mb-64'>
         <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="md:table-cell hidden">AvailableQuantity</th>
              <th className="lg:table-cell hidden">price</th>
              <th className='sm:table-cell hidden'>Image</th>
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