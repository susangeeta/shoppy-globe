import { useEffect, useState } from "react";

const ProductApi = () => {
  const [allProducts, setAllproducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setAllproducts(data.products);
    };
    fetchData();
  }, []);
  return { allProducts };
};

export default ProductApi;
