import { useEffect, useState } from "react";

const ProductItem = () => {
  const [allProducts, setAllproducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setAllproducts(data.products);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <section className="main-container">
      <h1>Popular products</h1>
      <div className="grid grid-cols-4  w-full items-center justify-center main-container gap-5">
        {allProducts?.map((item, i) => (
          <div
            key={i}
            className="flex  items-center justify-center flex-col border border-gray-300 overflow-hidden rounded-xl"
          >
            <div className="relative">
              <img src={item.images} className="h-full w-full " />
              <button className="absolute top-0 right-0">Add Cart</button>
            </div>
            <div className="border-t border-gray-300  w-full p-6">
              <h1 className="text-gray-400 text-sm capitalize">{item.sub}</h1>
              <h2 className="text-black font-semibold">{item.title}</h2>
              <p className="">{item.rating}</p>
              <p>{item.salePrice}</p>
              <p>{item.price}</p>
              <button>Add Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductItem;
