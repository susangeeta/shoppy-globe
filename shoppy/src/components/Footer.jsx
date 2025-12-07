import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#064E3B] text-white py-10 mt-16 ">
      <div className="main-container  grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">ShoppyGlobe</h2>
          <p className="text-gray-200">
            Your trusted shopping destination with the best products and great
            prices.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3  md:text-center">
            Quick Links
          </h3>
          <ul className="flex  md:items-center  md:justify-center flex-col text-gray-200 cursor-pointer">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/product">
              <li>Product</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>{" "}
            <Link to="/checkout">
              <li>CheckOut</li>
            </Link>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>

          <div className="flex items-center gap-4 mt-4">
            <div className="bg-white rounded-md h-9 w-9 flex items-center justify-center">
              {" "}
              <a
                href="linkedin.com/in/susangeeta-swain"
                target="_blank"
                className="text-[#0A66C2] text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="bg-white rounded-md h-9 w-9 flex items-center justify-center">
              {" "}
              <a
                href="https://github.com/susangeeta "
                target="_blank"
                className="text-[#181717] text-2xl"
              >
                <FaGithub />
              </a>
            </div>

            <div className="bg-white rounded-md h-9 w-9 flex items-center justify-center">
              {" "}
              <a
                href="sangeetaswainlucky@gmail.com"
                className="text-[#EA4335] text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 pt-6 border-t border-gray-500 text-gray-200">
        © 2025 ShoppyGlobe. All Rights Reserved.
      </div>
    </footer>
  );
};
export default Footer;
