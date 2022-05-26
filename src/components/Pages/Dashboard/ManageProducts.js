import React, { useState } from "react"
import { useQuery } from "react-query"
import Spinner from "../../Local/Spinner/Spinner"
import DeleteConfurmModal from "./DeleteConfurmModal"
import ManageProductCard from "./ManageProductCard"

const ManageProducts = () => {
  // const [products, setProducts] = useProduct([])
  const [deletingProduct, setDeletinProduct] = useState(null);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/products", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  // const handelDelete = (id) => {
  //   console.log(id);

  //   if (true) {
  //     const url = `http://localhost:5000/products/${id}`;
  //     fetch(url, {
  //       method: "DELETE",

  //         headers: {
  //           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },

  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const remaining = products.filter((product) => product._id !== id);

  //         setProducts(remaining);
  //       });
  //   }
  // };
  return (
    <div className="mx-8 lg:mb-8 mb-64">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="md:table-cell hidden">AvailableQuantity</th>
              <th className="lg:table-cell hidden">price</th>
              <th className="sm:table-cell hidden">Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageProductCard
                index={index}
                refetch={refetch}
                deletingProduct={deletingProduct}
                setDeletinProduct={setDeletinProduct}
                key={product._id}
                product={product}
              ></ManageProductCard>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <DeleteConfurmModal
          deletingProduct={deletingProduct}
          refetch={refetch}
          setDeletinProduct={setDeletinProduct}
        ></DeleteConfurmModal>
      )}
    </div>
  );
};

export default ManageProducts;
