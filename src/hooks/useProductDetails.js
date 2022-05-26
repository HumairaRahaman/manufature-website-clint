import { useEffect, useState } from "react"

const useProductDetails = (productId) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://safe-headland-62485.herokuapp.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  return [product];
};

export default useProductDetails;
