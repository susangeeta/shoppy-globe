import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem.jsx";
import ProductApi from "../hooks/ProductApi";

const ProductList = ({ limit }) => {
  const { allProducts } = ProductApi();
  const search = useSelector((state) => state.products.search);
  const filterProduct = allProducts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const prouctLimit = limit ? filterProduct.slice(0, limit) : filterProduct;
  return (
    <section className="main-container">
      <div className="grid grid-cols-4 gap-8 w-full">
        {prouctLimit.map((data) => (
          <ProductItem product={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
