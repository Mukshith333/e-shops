import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className=" flex flex-col sm:grid items-center sm:items-start grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="flex flex-col items-center sm:items-start gap-5">
          <img className="w-32" src={assets.logo} alt="" />
          <p className="w-2/5 text-balance sm:3/5 md:w-2/3  text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
            accusantium illum? Sint possimus dolorem cum id unde nam
            exercitationem!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+01987654321</li>
            <li>contact@nyprus.com</li>
          </ul>
        </div>
        <div>
          <p className="text-xl text-right font-medium mb-5">SECURE PAYMENT</p>
          <div className="flex flex-col items-center sm:items-end gap-1 text-gray-600">
            <img className="w-[80px] mt-2" src={assets.stripe_svg} alt="" />
            <img className="w-[80px] mt-2" src={assets.upilogo} alt="" />
            <img className="w-[80px] mt-2" src={assets.mastercardlogo} alt="" />
            <img
              className="w-[80px] mt-2"
              src={assets.razorpay_newlogo}
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ nyprus.com</p>
      </div>
    </div>
  );
};

export default Footer;
