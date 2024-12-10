import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useLocation } from "react-router-dom";

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);
  const location = useLocation();

  const windowsScroll = () => {
    if (location.pathname.includes("products")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll to the top
      });
    }
  };

  return (
    <Link
      className="text-gray-700 cursor-pointer border rounded border-[#EEEDEB] p-3"
      to={`/products/${id}`}
      onClick={windowsScroll}
    >
      <div className="overflow-hidden">
        <Link onClick={windowsScroll} to={`/products/${id}`}>
          <img
            className="hover:scale-110 transition ease-in-out"
            src={image[0]}
            alt=""
          />
        </Link>
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium inline-flex gap-1">
        {currency}
        <p>{price}</p>
      </p>
    </Link>
  );
};

export default ProductItem;
