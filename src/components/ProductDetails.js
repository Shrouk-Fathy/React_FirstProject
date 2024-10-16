import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

export default function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`${api_url}/${params.productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [params.productId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Product product = {product}  show={false}/>
  );
}