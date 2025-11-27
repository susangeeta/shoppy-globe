import ProductItem from "../components/ProductItem";
import ProductApi from "../hooks/ProductApi";

const Product = () => {
  const { allProducts } = ProductApi();
  return (
    <section className="main-container py-12">
      <div className="grid grid-cols-4 gap-8 w-full">
        {allProducts.map((data) => (
          <ProductItem product={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Product;
