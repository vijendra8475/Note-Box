import React from "react";
import HeroLogo from "./HeroLogo";

const Footer = () => {
  return (
    <div className="mt-20 grid">
      <div className="flex items-start sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-30 text-sm gap-14">

        <div>
          <HeroLogo />
          <p className="text-gray-600 w-full md:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam atque pariatur dolore ipsum quibusdam, rem delectus porro in ratione, eaque accusantium ad velit architecto dignissimos dolores totam numquam quis fuga.</p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-gray-800 mb-5">COMPANY</p>
          <ul className="text-gray-600">
            <p>Home</p>
            <p>About us</p>
            <p>Delivery</p>
            <p>Policy</p>
          </ul>
        </div>


        <div>
          <p className="text-2xl font-semibold text-gray-800 mb-5">GET IN TOUCH</p>
          <ul className="text-gray-600">
            <p>+1-000-000-0000</p>
            <p>greatstackdev@gmail.com</p>
            <p>Instagram</p>
            <p>Instagram</p>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-center py-5 text-sm">Copyright 2024@ greatstack.dev - All Right Reserved.</p>
      </div>

    </div>
  );
};

export default Footer;
