import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { emptyCart } from "../redux/cartSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const shipping = 50;
  const discount = 100;
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = Math.max(subtotal + shipping - discount, 0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrderPlaced = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.state ||
      !form.pincode ||
      !form.payment
    ) {
      toast.error("Please fill all fields!");
      return;
    }

    toast.success("Order placed successfully!");

    dispatch(emptyCart());

    setTimeout(() => navigate("/"), 1500);
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="main-container py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-600">Your Cart is Empty</h1>
        <p className="text-gray-500 mt-2">Add items to continue to checkout.</p>

        <button
          onClick={() => navigate("/product")}
          className="mt-6 bg-green-800 cursor-pointer text-white px-4 py-2 rounded-md"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="main-container md:pt-28 pt-24">
      <section className="flex md:flex-row flex-col w-full  gap-10">
        <form
          onSubmit={handleOrderPlaced}
          className=" w-full md:w-[60%] shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 flex flex-col gap-5"
        >
          <h1 className="text-gray-500  text-base font-bold">
            Billing Information
          </h1>
          <div className=" grid  grid-cols-1 md:grid-cols-2 gap-3">
            {" "}
            <div className="flex flex-col gap-2">
              <h1>Name</h1>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                className="border p-2 rounded-md "
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Email</h1>
              <input
                name="email"
                onChange={handleChange}
                type="text"
                className="border p-2 rounded-md"
                required
              />
            </div>{" "}
            <div className="flex flex-col gap-2">
              <h1>Phone Number</h1>
              <input
                name="phone"
                value={form.phone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,10}$/.test(value)) {
                    setForm({ ...form, phone: value });
                  }
                }}
                type="number"
                className="border p-2 rounded-md "
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Address</h1>
              <input
                name="address"
                onChange={handleChange}
                type="text"
                className="border p-2  rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>City</h1>
              <input
                name="city"
                onChange={handleChange}
                type="text"
                className="border p-2 rounded-md "
                required
              />
            </div>{" "}
            <div className="flex flex-col gap-2">
              <h1>State</h1>
              <input
                name="state"
                onChange={handleChange}
                type="text"
                className="border p-2 rounded-md "
                required
              />
            </div>{" "}
            <div className="flex flex-col gap-2">
              <h1>Pincode</h1>
              <input
                name="pincode"
                onChange={handleChange}
                type="text"
                className="border p-2 rounded-md "
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Payment Method</h1>
              <select
                name="payment"
                onChange={handleChange}
                className="border p-2 rounded-md"
              >
                <option value="">Select Field</option>
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit Card</option>
                <option value="upi">UPI</option>
              </select>
            </div>
          </div>
          <button className="bg-green-800 px-3 py-2 rounded-md cursor-pointer w-full text-white">
            Place Order
          </button>
        </form>
        <div className=" w-full md:w-[40%] h-fit py-4  bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ">
          <h1 className="uppercase text-gray-400 font-semibold border-b border-b-gray-300 px-4 py-2">
            Order Summery
          </h1>
          <div className="p-4 flex justify-between w-full">
            <div>Total: </div>
            <div>₹ {subtotal.toFixed(2)} </div>
          </div>
          <div className="p-4 flex justify-between w-full">
            <div>Shipping: </div>
            <div>₹ {shipping} </div>
          </div>
          <div className="p-4 flex justify-between w-full">
            <div>Discount: </div>
            <div> - ₹ {discount} </div>
          </div>
          <div className="p-4 flex justify-between w-full border-t font-bold">
            <div>Total:</div>
            <div>₹ {total.toFixed(2)}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
