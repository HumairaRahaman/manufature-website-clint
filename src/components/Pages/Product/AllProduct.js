import React from 'react'
import useProduct from '../../../hooks/useProduct'
import ProductCard from './ProductCard'

const AllProduct = () => {
    const [products, setProducts] = useProduct([])
    return (
        <div className='mx-7 mb-40 mt-20'>
             <h2 className="pb-6 text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center mb-4 cursor-pointe">
        My Products
      </h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
        </div>
    );
};

export default AllProduct;