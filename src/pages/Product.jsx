import { useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import ProductApi from "../hooks/ProductApi";

const Product = () => {
  const { allProducts, loading } = ProductApi();
  const search = useSelector((state) => state.products.search);
  const [localSearch, setLocalSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Beauty", "Fragrances", "Furniture", "Groceries"];

  const filteredProducts = allProducts.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes((search || localSearch).toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      item.category?.toLowerCase() === selectedCategory.toLowerCase();

    return matchSearch && matchCategory;
  });

  if (loading) {
    return (
      <section className="main-container">
        <div className="grid grid-cols-4 gap-8 w-full">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <ProductItem key={i} loading={true} />
            ))}
        </div>
      </section>
    );
  }
  return (
    <section className="main-container flex flex-col gap-12 pt-24">
      <div className="flex md:flex-row flex-col gap-5">
        <input
          type="text"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="border p-2 w-full  md:w-96 rounded-md focus:outline-none"
          placeholder="Search the Product....."
        />
        <div className="flex flex-col gap-2">
          <select
            className="border p-2 rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Product;
