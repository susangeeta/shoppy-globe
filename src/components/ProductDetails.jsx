import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  console.log(product);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchData();
  }, [id]);
  if (!product) return <p>Loading…</p>;
  return (
    <section className=" flex gap-10 justify-center items-center h-[80vh] px-8 py-10 rounded-lg w-full ">
      <div className="flex relative  justify-center items-center w-[30%]  bg-white rounded-2xl shadow-lg border border-gray-100 p-4 ">
        <img
          src={product.images}
          className="h-[300px] w-[300px] object-contain rounded-t-xl"
        />
        <button
          onClick={() => dispatch(addToCart(product))}
          className="absolute top-3 right-3 cursor-pointer bg-green-800 text-white px-2 py-1 rounded-md hover:bg-white hover:border border-green-800 hover:text-green-800 text-sm "
        >
          Add Cart
        </button>
      </div>
      <div className="w-[70%] flex items-start flex-col">
        {" "}
        <div className="flex gap-1  items-center justify-center bg-red-600 px-1 w-20 rounded-md py-1 text-xs text-white">
          <CiStar className="text-base" />
          <h2 className="pt-1">{product?.rating}</h2>
        </div>
        <div className="pt-2">
          <h1 className="font-bold text-2xl">{product.title}</h1>
          <h4>
            from{" "}
            <span className="text-green-700 font-semibold">
              {product.category}
            </span>
          </h4>
        </div>
        <div className="flex gap-3 pt-3">
          {product.tags.map((item) => (
            <button className="border-green-800 border text-xs w-fit  px-3 py-1 bg-green-100 rounded-full capitalize text-green-800">
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center  gap-3 pt-3 ">
          <p className="text-2xl text-gray-400 line-through">
            {" "}
            $ {product?.price}
          </p>
          <p className="text-2xl text-black font-semibold">
            ${product?.discountPercentage}
          </p>
        </div>
        <div className="pt-3">
          <h1 className="text-xl font-semibold">Description</h1>
          <li className="text-sm text-gray-500">{product.description}</li>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
