import { useEffect, useState } from "react";

const ProductApi = () => {
  const [allProducts, setAllproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  console.log(categories);
  console.log(allProducts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        //categories fetch
        const categoryResponse = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);
        setAllproducts(data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { allProducts, loading, categories };
};

export default ProductApi;
