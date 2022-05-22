import { useEffect, useState } from "react"

const useProductDetails = (productId) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://sleepy-gorge-09017.herokuapp.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  return [product];
};

export default useProductDetails;
