import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem.jsx";
import ProductApi from "../hooks/ProductApi";

const ProductList = ({ limit }) => {
  const { allProducts, loading } = ProductApi();
  const search = useSelector((state) => state.products.search);
  const filterProduct = allProducts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const prouctLimit = limit ? filterProduct.slice(0, limit) : filterProduct;

  if (loading || allProducts.length === 0) {
    return (
      <section className="main-container">
        <div className="grid grid-cols-1  md:grid-cols-4 gap-8 w-full">
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
    <section className="main-container">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {prouctLimit.map((data) => (
          <ProductItem product={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
